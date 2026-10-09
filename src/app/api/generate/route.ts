import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
      return NextResponse.json({ error: 'Cloudflare credentials not set' }, { status: 500 })
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          num_steps: 4,
        }),
      }
    )

    console.log('Cloudflare status:', response.status)
    console.log('Content-Type:', response.headers.get('content-type'))

    if (!response.ok) {
      const err = await response.text()
      console.error('Cloudflare error:', err)
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
      imageUrl = `data:image/png;base64,${data.result.image}`
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