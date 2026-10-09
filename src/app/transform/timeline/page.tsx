'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Sparkles, Circle, CheckCircle2 } from 'lucide-react'
import { useTransformStore } from '@/store/transformStore'
import StepIndicator from '@/components/transform/StepIndicator'

export default function TimelinePage() {
  const router = useRouter()
  const { timeline, setTimeline, photoPreview } = useTransformStore()

  if (typeof window !== 'undefined' && !photoPreview) {
    router.replace('/transform')
    return null
  }

  const timelines = [
    { value: '3 Months', subtitle: 'Quick transformation', popular: false },
    { value: '6 Months', subtitle: 'Balanced & sustainable', popular: true },
    { value: '9 Months', subtitle: 'Deep transformation', popular: false },
    { value: '12 Months', subtitle: 'Complete reinvention', popular: false },
  ]

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-ink-950 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => router.push('/')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-8 sm:mb-10">
          <ArrowLeft size={16} /> Back to Home
        </button>

        <StepIndicator current={3} />

        <div className="text-center mb-10 sm:mb-14">
          <h1 className="font-serif text-4xl sm:text-5xl mb-3 text-gray-900 dark:text-white">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Timeline
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">How long do you want to see your transformation take?</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {timelines.map((item) => {
            const selected = timeline === item.value
            return (
              <button
                key={item.value}
                onClick={() => setTimeline(item.value)}
                className={`relative bg-white dark:bg-ink-900 rounded-3xl border p-4 pt-6 sm:p-8 text-center transition-all duration-200 ${
                  selected
                    ? 'border-violet-400 shadow-lg shadow-violet-100 dark:shadow-violet-950/50'
                    : 'border-gray-100 dark:border-white/10 hover:border-violet-200 dark:hover:border-violet-400/40'
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] sm:text-xs text-white font-medium whitespace-nowrap bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-center mb-3 sm:mb-4">
                  {selected
                    ? <CheckCircle2 size={22} className="text-violet-500" />
                    : <Circle size={22} className="text-gray-300 dark:text-gray-600" />
                  }
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl text-gray-900 dark:text-white mb-1">{item.value.split(' ')[0]}</h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">Months</p>
                <p className="text-gray-400 text-xs sm:text-sm">{item.subtitle}</p>
                <div className="h-[3px] bg-gray-100 dark:bg-white/10 rounded-full mt-4 sm:mt-6 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: item.value === '3 Months' ? '25%' : item.value === '6 Months' ? '50%' : item.value === '9 Months' ? '75%' : '100%',
                      background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
                    }}
                  />
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex justify-between gap-3 mt-8 sm:mt-12">
          <button onClick={() => router.back()} className="px-5 sm:px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 text-gray-500 dark:text-gray-300">
            Back
          </button>
          <button
            onClick={() => router.push('/transform/generating')}
            disabled={!timeline}
            className={`px-5 sm:px-8 py-3 rounded-full flex items-center gap-2 font-medium text-sm sm:text-base ${
              timeline
                ? 'text-white bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-white/10 dark:text-gray-500'
            }`}
          >
            Generate My Future Self <Sparkles size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}
