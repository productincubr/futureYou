import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    if (!process.env.FAL_KEY) {
      return NextResponse.json({ error: 'FAL_KEY not set in .env.local' }, { status: 500 })
    }

    const response = await fetch('https://fal.run/fal-ai/flux/schnell', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${process.env.FAL_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        image_size: 'portrait_4_3',
        num_inference_steps: 4,
        num_images: 1,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Fal error:', err)
      return NextResponse.json({ error: err }, { status: 500 })
    }

    const data = await response.json()
    const imageUrl = data?.images?.[0]?.url

    if (!imageUrl) {
      return NextResponse.json({ error: 'No image returned from fal.ai' }, { status: 500 })
    }

    return NextResponse.json({ imageUrl })

  } catch (error: any) {
    console.error('Generate error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}