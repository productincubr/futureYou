'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Sparkles, Circle, CheckCircle2 } from 'lucide-react'
import { useTransformStore } from '@/store/transformStore'

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
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => router.push('/')} className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <ArrowLeft size={16} /> Back to Home
        </button>

        <StepIndicator current={3} />

        <div className="text-center mb-14">
          <h1 className="font-serif text-5xl mb-3">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Timeline
            </span>
          </h1>
          <p className="text-gray-400">How long do you want to see your transformation take?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {timelines.map((item) => {
            const selected = timeline === item.value
            return (
              <button
                key={item.value}
                onClick={() => setTimeline(item.value)}
                className={`relative bg-white rounded-3xl border p-8 text-center transition-all duration-200 ${
                  selected ? 'border-violet-400 shadow-lg shadow-violet-100' : 'border-gray-100 hover:border-violet-200'
                }`}
              >
                {item.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs text-white font-medium"
                    style={{ background: 'linear-gradient(135deg,#AD46FF,#00D3F3)' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  {selected
                    ? <CheckCircle2 size={22} className="text-violet-500" />
                    : <Circle size={22} className="text-gray-300" />
                  }
                </div>
                <h3 className="font-serif text-5xl text-gray-900 mb-1">{item.value.split(' ')[0]}</h3>
                <p className="text-lg text-gray-700 mb-4">Months</p>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
                <div className="h-[3px] bg-gray-100 rounded-full mt-6 overflow-hidden">
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

        <div className="flex justify-between mt-12">
          <button onClick={() => router.back()} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-500">
            Back
          </button>
          <button
            onClick={() => router.push('/transform/generating')}
            disabled={!timeline}
            className="px-8 py-3 rounded-full flex items-center gap-2 font-medium"
            style={{
              background: timeline ? 'linear-gradient(135deg,#AD46FF,#00D3F3)' : '#E5E7EB',
              color: timeline ? '#fff' : '#9CA3AF',
              cursor: timeline ? 'pointer' : 'not-allowed',
            }}
          >
            Generate My Future Self <Sparkles size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

function StepIndicator({ current }: { current: number }) {
  const steps = ['Upload Photo', 'Set Goals', 'Define Habits', 'Choose Timeline']
  return (
    <div className="flex justify-center gap-3 mb-14 flex-wrap">
      {steps.map((s, i) => (
        <div
          key={s}
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={
            i === current
              ? { background: 'linear-gradient(135deg,#AD46FF,#00D3F3)', color: '#fff' }
              : { border: '1px solid #e5e7eb', color: '#9ca3af' }
          }
        >
          {s}
        </div>
      ))}
    </div>
  )
}