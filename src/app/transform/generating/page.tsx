'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTransformStore } from '@/store/transformStore'
import { Sparkles } from 'lucide-react'

const steps = [
  { label: 'Uploading your photo...', pct: 20 },
  { label: 'Analyzing your goals...', pct: 40 },
  { label: 'Building your transformation...', pct: 65 },
  { label: 'Applying AI enhancement...', pct: 85 },
  { label: 'Finalizing your future self...', pct: 100 },
]

// Downscale the uploaded photo so its longest side is at most `maxSide`, as JPEG
async function resizeImage(source: File | string, maxSide: number) {
  const url = typeof source === 'string' ? source : URL.createObjectURL(source)
  try {
    const img = new Image()
    img.src = url
    await img.decode()

    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight))
    const width = Math.round(img.naturalWidth * scale)
    const height = Math.round(img.naturalHeight * scale)

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d')!.drawImage(img, 0, 0, width, height)

    const blob = await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not process photo'))), 'image/jpeg', 0.92),
    )
    return { blob, width, height }
  } finally {
    if (typeof source !== 'string') URL.revokeObjectURL(url)
  }
}

export default function GeneratingPage() {
  const router = useRouter()
  const {
    photo,
    photoPreview,
    goals,
    habits,
    timeline,
    setTransformedImage,
    setTransformError,
  } = useTransformStore()

  const [stepIndex, setStepIndex] = useState(0)
  const [progress, setProgress] = useState(5)

  // Guard — no photo = go back
  useEffect(() => {
    if (!photoPreview) {
      router.replace('/transform')
    }
  }, [photoPreview, router])

  // Fake progress animation (advances every 10s)
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < steps.length - 1) {
        i++
        setStepIndex(i)
        setProgress(steps[i].pct)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // Main AI call
  useEffect(() => {
    if (!photoPreview) return

    const run = async () => {
      try {
        // Model needs the reference photo under 512x512
        const resized = await resizeImage(photo ?? photoPreview, 512)

        const form = new FormData()
        form.append('image', resized.blob, 'photo.jpg')
        form.append('width', String(resized.width))
        form.append('height', String(resized.height))
        form.append('goals', JSON.stringify(goals))
        form.append('habits', JSON.stringify(habits))
        form.append('timeline', timeline)

        const res = await fetch('/api/generate', {
          method: 'POST',
          body: form,
        })

        const data = await res.json()

        if (data.error) throw new Error(data.error)

        setTransformedImage(data.imageUrl)
        setProgress(100)
        setStepIndex(steps.length - 1)

        setTimeout(() => router.push('/transform/result'), 1000)

      } catch (err: any) {
        setTransformError(err.message || 'Something went wrong')
        router.push('/transform/result')
      }
    }

    run()
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-ink-950 flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white dark:bg-ink-900 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl dark:shadow-black/40 p-6 sm:p-10 text-center">

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg,#a855f7,#6366f1)' }}
        >
          <Sparkles size={28} className="text-white" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl mb-2 text-gray-900 dark:text-white">
          Creating Your{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Future Self
          </span>
        </h2>

        {/* Progress bar */}
        <div className="mt-8 mb-3 h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          />
        </div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{progress}%</p>
        <p className="mt-3 text-sm text-gray-400 italic">{steps[stepIndex].label}</p>

        {/* Info box */}
        <div className="mt-8 bg-violet-50 dark:bg-violet-500/10 rounded-2xl p-4 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          ✦ Our AI is creating a photoreal preview of your transformation based on your goals,
          habits, and timeline. This usually takes 45–60 seconds.
        </div>
      </div>
    </div>
  )
}