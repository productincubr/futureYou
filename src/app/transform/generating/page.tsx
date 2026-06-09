'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Sparkles,
} from 'lucide-react'

export default function GeneratingPage() {
  const router = useRouter()

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)

          setTimeout(() => {
            router.push('/transform/result')
          }, 1000)

          return 100
        }

        return prev + 1
      })
    }, 60)

    return () => clearInterval(interval)
  }, [router])

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Back */}

        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm text-gray-500 mb-16"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        {/* Center Content */}

        <div className="flex flex-col items-center justify-center text-center">

          {/* Icon */}

          <div
            className="
              w-20 h-20
              rounded-full
              flex items-center justify-center
              mb-10
              shadow-lg
            "
            style={{
              background:
                'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          >
            <Sparkles
              size={34}
              className="text-white"
            />
          </div>

          {/* Heading */}

          <h1 className="font-serif text-5xl mb-10">
            Creating Your{' '}
            <span
              className="italic"
              style={{
                background:
                  'linear-gradient(135deg,#AD46FF,#00D3F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Future Self
            </span>
          </h1>

          {/* Progress Bar */}

          <div className="w-full max-w-2xl">

            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background:
                    'linear-gradient(90deg,#AD46FF,#E12AFB,#00D3F3)',
                }}
              />

            </div>

            <p className="text-2xl font-semibold text-gray-700 mt-5">
              {progress}%
            </p>

            <p className="text-gray-400 italic text-sm mt-1">
              {progress < 30 &&
                'Analyzing your uploaded image...'}

              {progress >= 30 &&
                progress < 60 &&
                'Building your transformation profile...'}

              {progress >= 60 &&
                progress < 90 &&
                'Generating future self visualization...'}

              {progress >= 90 &&
                'Finalizing your future self...'}
            </p>

          </div>

          {/* Info Box */}

          <div
            className="
              mt-12
              max-w-2xl
              bg-white
              border
              border-gray-100
              rounded-2xl
              px-6
              py-5
            "
          >
            <p className="text-sm text-gray-500 leading-relaxed">
              ✨ Our AI is creating a photoreal preview
              of your transformation based on your goals,
              habits, and timeline.
              This usually takes 45–60 seconds.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}