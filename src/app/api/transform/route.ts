import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { filename, goals, habits, timeline } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY not set in .env.local' }, { status: 500 })
    }

    const model = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.0-flash-preview-image-generation'

    const filepath = path.join(process.cwd(), 'public', 'uploads', filename)
    let imageBuffer: Buffer
    try {
      imageBuffer = await readFile(filepath)
    } catch {
      return NextResponse.json({ error: `Image file not found: ${filename}` }, { status: 400 })
    }

    const base64Image = imageBuffer.toString('base64')

    const prompt = `Transform this person's photo to show their realistic future self after ${timeline} of dedicated fitness work.
Goals achieved:
- Weight Loss: ${goals.weightLoss}
- Muscle Gain: ${goals.buildMuscle}
- Fitness Level: ${goals.fitnessLevel}
- Confidence: ${goals.confidence}/10
Daily habits followed: ${habits.join(', ')}
Keep the person's face, identity, and background the same. Show realistic physical transformation: leaner body, more muscle definition, better posture, healthier skin. Professional photo quality, same lighting and angle as original.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              { inline_data: { mime_type: 'image/jpeg', data: base64Image } }
            ]
          }],
          generationConfig: {
            responseModalities: ['IMAGE', 'TEXT']
          }
        }),
      }
    )

    // Guard against empty/non-JSON response
    const rawText = await response.text()
    if (!rawText || rawText.trim() === '') {
      console.error('Gemini returned empty response. Status:', response.status)
      return NextResponse.json(
        { error: `Gemini API returned empty response (status ${response.status}). Check your API key and model name.` },
        { status: 500 }
      )
    }

    let data: any
    try {
      data = JSON.parse(rawText)
    } catch {
      console.error('Gemini response was not valid JSON:', rawText.slice(0, 500))
      return NextResponse.json(
        { error: 'Gemini API returned invalid JSON. Check server logs.' },
        { status: 500 }
      )
    }

    // Check for API-level errors
    if (data.error) {
      console.error('Gemini API error:', data.error)
      return NextResponse.json(
        { error: `Gemini API error: ${data.error.message || JSON.stringify(data.error)}` },
        { status: 500 }
      )
    }

    const parts = data?.candidates?.[0]?.content?.parts || []

    for (const part of parts) {
      if (part.inlineData?.mimeType?.startsWith('image/')) {
        return NextResponse.json({
          success: true,
          image: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
        })
      }
    }

    console.error('No image in Gemini response. Full response:', JSON.stringify(data))
    return NextResponse.json(
      { error: 'No image generated. Check server logs for full Gemini response.', raw: data },
      { status: 500 }
    )

  } catch (err: any) {
    console.error('Transform route crashed:', err)
    return NextResponse.json(
      { error: err.message || 'Unknown server error' },
      { status: 500 }
    )
  }
}