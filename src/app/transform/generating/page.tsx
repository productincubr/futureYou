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
        // Build prompt from user goals
        const parts = []
        if (goals.weightLoss) parts.push(`${goals.weightLoss} weight loss`)
        if (goals.buildMuscle) parts.push(`${goals.buildMuscle} muscle gain`)
        if (goals.fitnessLevel) parts.push(`${goals.fitnessLevel} fitness level`)

        const prompt = `Photorealistic fitness transformation photo, athletic person, 
          ${parts.join(', ')}, ${timeline} transformation, 
          confident posture, studio lighting, professional fitness photography, 
          healthy and strong physique, high quality`

        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
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
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-10 text-center">

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg,#a855f7,#6366f1)' }}
        >
          <Sparkles size={28} className="text-white" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl mb-2 text-gray-900">
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
        <div className="mt-8 mb-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          />
        </div>
        <p className="text-sm font-medium text-gray-700">{progress}%</p>
        <p className="mt-3 text-sm text-gray-400 italic">{steps[stepIndex].label}</p>

        {/* Info box */}
        <div className="mt-8 bg-violet-50 rounded-2xl p-4 text-xs text-gray-500 leading-relaxed">
          ✦ Our AI is creating a photoreal preview of your transformation based on your goals,
          habits, and timeline. This usually takes 45–60 seconds.
        </div>
      </div>
    </div>
  )
}