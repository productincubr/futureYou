import { NextRequest, NextResponse } from 'next/server'

// FLUX.2 edits the uploaded photo (keeps face/identity) — usually ~10s
export const maxDuration = 60

// klein-4b kept the face best in testing (klein-9b changed identity; flux-2-dev returned 500s)
const DEFAULT_MODEL = '@cf/black-forest-labs/flux-2-klein-4b'

type Goals = {
  weightLoss?: string
  buildMuscle?: string
  fitnessLevel?: string
  confidence?: string
}

function buildPrompt(goals: Goals, habits: string[], timeline: string) {
  const changes: string[] = []
  if (goals.weightLoss) changes.push(`${goals.weightLoss.replace('-', '')} lighter, visibly leaner with less body fat`)
  if (goals.buildMuscle) changes.push(`${goals.buildMuscle} more muscle mass with clear muscle definition`)
  if (goals.fitnessLevel) changes.push(`the athletic physique of someone at the ${goals.fitnessLevel.toLowerCase()} fitness level`)
  if (goals.confidence) changes.push(`confident, upright posture (confidence ${goals.confidence}/10)`)

  return [
    `Edit the photo in image 0: show this exact same person after ${timeline || '6 months'} of consistent training and healthy habits.`,
    `Keep the face completely identical — same facial features, face shape, eyes, nose, mouth, facial hair, expression, skin tone, hairstyle, age and identity. Do not replace or beautify the face.`,
    `Keep the same camera angle, framing, pose, background and lighting.`,
    // Without explicit clothing the model tends to go shirtless, which Cloudflare's safety filter blocks
    `The person is fully clothed, wearing a well-fitted plain athletic t-shirt.`,
    changes.length ? `Transform only the body under the t-shirt: ${changes.join('; ')}.` : 'Transform only the body to look fitter and healthier.',
    habits.length ? `They followed these habits daily: ${habits.join(', ')}, so their skin looks healthier and they look well-rested.` : '',
    `Photorealistic, natural and believable result, high detail, same photo quality as the original.`,
  ].filter(Boolean).join(' ')
}

// Output size: keep the uploaded photo's aspect ratio, long side 1024, multiples of 16
function outputSize(width: number, height: number) {
  const scale = 1024 / Math.max(width, height)
  const round = (v: number) => Math.min(1920, Math.max(256, Math.round((v * scale) / 16) * 16))
  return { width: round(width), height: round(height) }
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
      return NextResponse.json({ error: 'Cloudflare credentials not set' }, { status: 500 })
    }

    const body = await req.formData()
    const image = body.get('image')
    if (!(image instanceof Blob)) {
      return NextResponse.json({ error: 'No photo received' }, { status: 400 })
    }

    const goals: Goals = JSON.parse((body.get('goals') as string) || '{}')
    const habits: string[] = JSON.parse((body.get('habits') as string) || '[]')
    const timeline = (body.get('timeline') as string) || ''
    const size = outputSize(
      Number(body.get('width')) || 512,
      Number(body.get('height')) || 512,
    )

    // FLUX.2 on Workers AI takes multipart form data; reference image goes in input_image_0
    const form = new FormData()
    form.append('prompt', buildPrompt(goals, habits, timeline))
    form.append('input_image_0', image, 'photo.jpg')
    form.append('width', String(size.width))
    form.append('height', String(size.height))

    const model = process.env.CLOUDFLARE_IMAGE_MODEL || DEFAULT_MODEL
    if (!model.includes('klein')) {
      // klein models use a fixed 4 steps; dev accepts a custom step count
      form.append('steps', '25')
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/${model}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
        },
        body: form,
      }
    )

    console.log('Cloudflare status:', response.status)
    console.log('Content-Type:', response.headers.get('content-type'))

    if (!response.ok) {
      const err = await response.text()
      console.error('Cloudflare error:', err)
      // 3030 = Cloudflare safety filter flagged the input photo / output
      if (err.includes('"code":3030')) {
        return NextResponse.json({
          error: 'This photo could not be transformed by our AI safety filter. Please try a different photo — a clear, well-lit photo of you wearing a t-shirt or regular clothes works best.',
        }, { status: 400 })
      }
      return NextResponse.json({ error: err }, { status: 500 })
    }

    const contentType = response.headers.get('content-type') || ''

    // Case 1: Direct image binary return karta hai
    if (contentType.includes('image/')) {
      const buffer = await response.arrayBuffer()
      const base64 = Buffer.from(buffer).toString('base64')
      const imageUrl = `data:${contentType};base64,${base64}`
      return NextResponse.json({ imageUrl })
    }

    // Case 2: JSON mein image data aata hai
    const data = await response.json()
    console.log('Cloudflare response keys:', Object.keys(data))

    // Try different response formats
    let imageUrl: string | null = null

    // Format A: { result: { image: "base64string" } }
    if (data?.result?.image) {
      // FLUX.2 returns JPEG ("/9j/" is the base64 JPEG signature); older models return PNG
      const mime = data.result.image.startsWith('/9j/') ? 'image/jpeg' : 'image/png'
      imageUrl = `data:${mime};base64,${data.result.image}`
    }
    // Format B: { images: ["url"] }
    else if (data?.images?.[0]) {
      imageUrl = data.images[0]
    }
    // Format C: { result: "base64string" }
    else if (typeof data?.result === 'string') {
      imageUrl = `data:image/png;base64,${data.result}`
    }
    // Format D: base64 directly
    else if (data?.image) {
      imageUrl = `data:image/png;base64,${data.image}`
    }

    if (!imageUrl) {
      console.error('Unknown response format:', JSON.stringify(data).slice(0, 200))
      return NextResponse.json({
        error: 'No image in response. Format: ' + JSON.stringify(data).slice(0, 100)
      }, { status: 500 })
    }

    return NextResponse.json({ imageUrl })

  } catch (error: any) {
    console.error('Generate error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
