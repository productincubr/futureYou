'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Dumbbell, Star, Trophy, Target } from 'lucide-react'
import { useTransformStore } from '@/store/transformStore'
import StepIndicator from '@/components/transform/StepIndicator'

export default function GoalsPage() {
  const router = useRouter()
  const { goals, setGoals, photoPreview } = useTransformStore()

  // ✅ Fix 1: useEffect ke andar router call karo
  useEffect(() => {
    if (!photoPreview) {
      router.replace('/transform')
    }
  }, [photoPreview, router])

  const selectOption = (key: string, value: string) => {
    setGoals({ [key]: value })
  }

  const allSelected = goals.weightLoss && goals.buildMuscle && goals.fitnessLevel && goals.confidence

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-ink-950 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => router.push('/transform')} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-8 sm:mb-10">
          <ArrowLeft size={16} /> Back to Upload
        </button>

        <StepIndicator current={1} />

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl mb-3 text-gray-900 dark:text-white">
            What Are Your{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg,#AD46FF,#00D3F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Goals?
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">Choose the transformations you want to see in your future self.</p>
        </div>

        <div className="bg-white dark:bg-ink-900 rounded-3xl border border-gray-100 dark:border-white/10 p-4 sm:p-8 space-y-4 sm:space-y-6">
          <GoalRow
            icon={<Target size={18} />}
            title="Weight Loss"
            options={['-5kg', '-10kg', '-15kg', '-20kg']}
            selected={goals.weightLoss}
            onSelect={(v: string) => selectOption('weightLoss', v)}
          />
          <GoalRow
            icon={<Dumbbell size={18} />}
            title="Build Muscle"
            options={['+10%', '+15%', '+20%', '+25%']}
            selected={goals.buildMuscle}
            onSelect={(v: string) => selectOption('buildMuscle', v)}
          />
          <GoalRow
            icon={<Trophy size={18} />}
            title="Fitness Level"
            options={['Beginner', 'Intermediate', 'Advanced', 'Elite']}
            selected={goals.fitnessLevel}
            onSelect={(v: string) => selectOption('fitnessLevel', v)}
          />
          <GoalRow
            icon={<Star size={18} />}
            title="Confidence"
            options={['7', '8', '9', '10']}
            selected={goals.confidence}
            onSelect={(v: string) => selectOption('confidence', v)}
          />
        </div>

        <div className="flex justify-between gap-3 mt-8 sm:mt-10">
          <button
            onClick={() => router.back()}
            className="px-5 sm:px-6 py-3 rounded-full bg-white dark:bg-ink-900 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-300"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push('/transform/habits')}
            disabled={!allSelected}
            className={`px-5 sm:px-8 py-3 rounded-full flex items-center gap-2 text-sm sm:text-base transition-opacity ${
              allSelected
                ? 'text-white bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-white/10 dark:text-gray-500'
            }`}
          >
            Continue to Habits <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

// ✅ Fix 2: 'any' hataya, proper TypeScript types diye
interface GoalRowProps {
  icon: React.ReactNode
  title: string
  options: string[]
  selected: string
  onSelect: (v: string) => void
}

function GoalRow({ icon, title, options, selected, onSelect }: GoalRowProps) {
  return (
    <div className="border border-gray-100 dark:border-white/10 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4 font-medium text-gray-800 dark:text-gray-100">
        {icon}
        {title}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`py-3 rounded-xl border text-sm font-medium transition-all ${
              selected === option
                ? 'text-white border-transparent bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]'
                : 'bg-white border-gray-200 text-gray-600 hover:border-violet-200 dark:bg-ink-800 dark:border-white/10 dark:text-gray-300 dark:hover:border-violet-400/40'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
