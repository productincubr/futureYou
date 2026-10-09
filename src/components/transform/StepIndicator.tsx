import { Upload, Target, Zap, Calendar } from 'lucide-react'

const steps = [
  { label: 'Upload Photo', icon: Upload },
  { label: 'Set Goals', icon: Target },
  { label: 'Define Habits', icon: Zap },
  { label: 'Choose Timeline', icon: Calendar },
]

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-8 md:mb-12">

      {/* Mobile: segmented progress + current step */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="flex gap-1.5 mb-3">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= current
                  ? 'bg-gradient-to-r from-[#AD46FF] to-[#00D3F3]'
                  : 'bg-gray-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          Step {current + 1} of {steps.length} ·{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{steps[current].label}</span>
        </p>
      </div>

      {/* Desktop: pills */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, i) => {
          const Icon = step.icon
          const active = i === current
          const done = i < current
          return (
            <div key={step.label} className="flex items-center">
              <div
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? 'text-white shadow-md bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]'
                    : done
                      ? 'text-violet-500 bg-violet-50 dark:text-violet-300 dark:bg-violet-500/10'
                      : 'text-gray-400 border border-gray-200 dark:border-white/10'
                }`}
              >
                <Icon size={14} />
                <span>{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px mx-1 ${done ? 'bg-violet-300 dark:bg-violet-500/50' : 'bg-gray-200 dark:bg-white/10'}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
