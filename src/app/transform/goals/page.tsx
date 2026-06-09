'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Star,
  Trophy,
  Target
} from 'lucide-react'

export default function GoalsPage() {
  const router = useRouter()

  const [goals, setGoals] = useState({
    weightLoss: '',
    buildMuscle: '',
    fitnessLevel: '',
    confidence: '',
  })

  const selectOption = (
    key: string,
    value: string
  ) => {
    setGoals((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleContinue = () => {
    localStorage.setItem(
      'goals',
      JSON.stringify(goals)
    )

    router.push('/transform/habits')
  }

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back */}

        <button
          onClick={() => router.push('/transform')}
          className="flex items-center gap-2 text-sm text-gray-500 mb-10"
        >
          <ArrowLeft size={16} />
          Back to Upload
        </button>

        {/* Progress */}

        <div className="flex justify-center gap-3 mb-14 flex-wrap">

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Upload Photo
          </div>

          <div className="px-4 py-2 rounded-full text-white text-sm bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3]">
            Set Goals
          </div>

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Define Habits
          </div>

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Choose Timeline
          </div>

        </div>

        {/* Heading */}

        <div className="text-center mb-12">

          <h1 className="font-serif text-5xl mb-3">
            What Are Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Goals?
            </span>
          </h1>

          <p className="text-gray-400">
            Choose the transformations you want to see
            in your future self.
          </p>

        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl border border-gray-100 p-8 space-y-6">

          <GoalRow
            icon={<Target size={18} />}
            title="Weight Loss"
            options={['-5kg', '-10kg', '-15kg', '-20kg']}
            selected={goals.weightLoss}
            onSelect={(v) =>
              selectOption('weightLoss', v)
            }
          />

          <GoalRow
            icon={<Dumbbell size={18} />}
            title="Build Muscle"
            options={['+10%', '+15%', '+20%', '+25%']}
            selected={goals.buildMuscle}
            onSelect={(v) =>
              selectOption('buildMuscle', v)
            }
          />

          <GoalRow
            icon={<Trophy size={18} />}
            title="Fitness Level"
            options={[
              'Beginner',
              'Intermediate',
              'Advanced',
              'Elite',
            ]}
            selected={goals.fitnessLevel}
            onSelect={(v) =>
              selectOption('fitnessLevel', v)
            }
          />

          <GoalRow
            icon={<Star size={18} />}
            title="Confidence"
            options={['7', '8', '9', '10']}
            selected={goals.confidence}
            onSelect={(v) =>
              selectOption('confidence', v)
            }
          />

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-10">

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-full bg-white border"
          >
            Back
          </button>

          <button
            onClick={handleContinue}
            className="px-8 py-3 rounded-full text-white flex items-center gap-2"
            style={{
              background:
                'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          >
            Continue to Habits
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </main>
  )
}

function GoalRow({
  icon,
  title,
  options,
  selected,
  onSelect,
}: any) {
  return (
    <div className="border rounded-2xl p-5">

      <div className="flex items-center gap-2 mb-4 font-medium">
        {icon}
        {title}
      </div>

      <div className="grid grid-cols-4 gap-3">

        {options.map((option: string) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`py-3 rounded-xl border text-sm transition-all
            ${
              selected === option
                ? 'bg-violet-500 text-white border-violet-500'
                : 'bg-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}