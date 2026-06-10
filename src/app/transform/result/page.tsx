'use client'

import { useRouter } from 'next/navigation'
import { useTransformStore } from '@/store/transformStore'
import { Download, RotateCcw } from 'lucide-react'

export default function ResultPage() {
  const router = useRouter()
  const { photoPreview, transformedImage, transformError, goals, timeline, reset } = useTransformStore()

  const handleStartOver = () => {
    reset()
    router.push('/transform')
  }

  const goalItems = [
    { icon: '🎯', label: 'Weight Loss', value: goals.weightLoss },
    { icon: '💪', label: 'Build Muscle', value: goals.buildMuscle },
    { icon: '🏃', label: 'Fitness Level', value: goals.fitnessLevel },
    { icon: '⭐', label: 'Confidence', value: goals.confidence },
  ].filter((g) => g.value)

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <button onClick={handleStartOver} className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-10">
          ← Back to Home
        </button>

        <div className="flex justify-center mb-6">
          <div
            className="px-4 py-1.5 rounded-full text-white text-xs font-medium"
            style={{ background: 'linear-gradient(135deg,#AD46FF,#00D3F3)' }}
          >
            ✦ YOUR FUTURE SELF
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl mb-2">
            This Is{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Who You'll Become
            </span>
          </h1>
          {timeline && <p className="text-gray-400 text-sm mt-2">In {timeline}, this could be you</p>}
        </div>

        {/* Error state */}
        {transformError && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center mb-8">
            <p className="text-red-500 font-medium mb-2">Something went wrong</p>
            <p className="text-red-400 text-sm">{transformError}</p>
          </div>
        )}

        {/* Before / After */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-2 gap-0">
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                Before
              </div>
              {photoPreview ? (
                <img src={photoPreview} alt="Before" className="w-full h-[380px] object-cover" />
              ) : (
                <div className="w-full h-[380px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  No photo
                </div>
              )}
            </div>
            <div className="relative">
              <div
                className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-white text-xs font-medium"
                style={{ background: 'linear-gradient(135deg,#AD46FF,#00D3F3)' }}
              >
                After
              </div>
              {transformedImage ? (
                <img src={transformedImage} alt="After" className="w-full h-[380px] object-cover" />
              ) : (
                <div className="w-full h-[380px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  {transformError ? 'Transform failed' : 'Processing...'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Goal chips */}
        {goalItems.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {goalItems.map((g) => (
              <div key={g.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                <div className="text-2xl mb-1">{g.icon}</div>
                <p className="font-semibold text-gray-800 text-sm">{g.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{g.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {transformedImage && (
            <a
              href={transformedImage}
              download="my-future-self.jpg"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-medium"
              style={{ background: 'linear-gradient(135deg,#AD46FF,#00D3F3)' }}
            >
              <Download size={16} /> Download My Future Self
            </a>
          )}
          <button
            onClick={handleStartOver}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <RotateCcw size={16} /> Start Over
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Keep this photo. Print it, make it your wallpaper. Let it show who you truly are.
        </p>
      </div>
    </div>
  )
}