import { writeFile, mkdir } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('image') as File
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  await mkdir(uploadDir, { recursive: true })

  const filename = `${Date.now()}-${file.name.replace(/\s/g, '_')}`
  await writeFile(path.join(uploadDir, filename), buffer)

  return NextResponse.json({ success: true, filename, url: `/uploads/${filename}` })
}