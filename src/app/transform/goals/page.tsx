'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Dumbbell, Star, Trophy, Target } from 'lucide-react'
import { useTransformStore } from '@/store/transformStore'

export default function GoalsPage() {
  const router = useRouter()
  const { goals, setGoals, photoPreview } = useTransformStore()

  // Guard — agar photo nahi hai toh wapas bhejo
  if (typeof window !== 'undefined' && !photoPreview) {
    router.replace('/transform')
    return null
  }

  const selectOption = (key: string, value: string) => {
    setGoals({ [key]: value })
  }

  const allSelected = goals.weightLoss && goals.buildMuscle && goals.fitnessLevel && goals.confidence

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => router.push('/transform')} className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <ArrowLeft size={16} /> Back to Upload
        </button>

        <StepIndicator current={1} />

        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-3">
            What Are Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Goals?
            </span>
          </h1>
          <p className="text-gray-400">Choose the transformations you want to see in your future self.</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-8 space-y-6">
          <GoalRow icon={<Target size={18} />} title="Weight Loss" options={['-5kg', '-10kg', '-15kg', '-20kg']} selected={goals.weightLoss} onSelect={(v) => selectOption('weightLoss', v)} />
          <GoalRow icon={<Dumbbell size={18} />} title="Build Muscle" options={['+10%', '+15%', '+20%', '+25%']} selected={goals.buildMuscle} onSelect={(v) => selectOption('buildMuscle', v)} />
          <GoalRow icon={<Trophy size={18} />} title="Fitness Level" options={['Beginner', 'Intermediate', 'Advanced', 'Elite']} selected={goals.fitnessLevel} onSelect={(v) => selectOption('fitnessLevel', v)} />
          <GoalRow icon={<Star size={18} />} title="Confidence" options={['7', '8', '9', '10']} selected={goals.confidence} onSelect={(v) => selectOption('confidence', v)} />
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={() => router.back()} className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-500">
            Back
          </button>
          <button
            onClick={() => router.push('/transform/habits')}
            disabled={!allSelected}
            className="px-8 py-3 rounded-full text-white flex items-center gap-2"
            style={{
              background: allSelected ? 'linear-gradient(135deg,#AD46FF,#00D3F3)' : '#E5E7EB',
              color: allSelected ? '#fff' : '#9CA3AF',
              cursor: allSelected ? 'pointer' : 'not-allowed',
            }}
          >
            Continue to Habits <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

function GoalRow({ icon, title, options, selected, onSelect }: any) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4 font-medium text-gray-800">{icon}{title}</div>
      <div className="grid grid-cols-4 gap-3">
        {options.map((option: string) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`py-3 rounded-xl border text-sm font-medium transition-all ${
              selected === option
                ? 'text-white border-transparent'
                : 'bg-white border-gray-200 text-gray-600 hover:border-violet-300'
            }`}
            style={selected === option ? { background: 'linear-gradient(135deg,#AD46FF,#00D3F3)' } : {}}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
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