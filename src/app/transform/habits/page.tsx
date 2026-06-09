'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Activity,
  Moon,
  Droplets,
  Beef,
  Salad,
  Sparkles,
  BookOpen,
} from 'lucide-react'

export default function HabitsPage() {
  const router = useRouter()

  const [selectedHabits, setSelectedHabits] = useState<string[]>([])

  const toggleHabit = (habit: string) => {
    if (selectedHabits.includes(habit)) {
      setSelectedHabits(
        selectedHabits.filter((h) => h !== habit)
      )
    } else {
      setSelectedHabits([...selectedHabits, habit])
    }
  }

  const handleContinue = () => {
    localStorage.setItem(
      'habits',
      JSON.stringify(selectedHabits)
    )

    router.push('/transform/timeline')
  }

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back */}

        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm text-gray-500 mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        {/* Progress */}

        <div className="flex justify-center gap-3 mb-14 flex-wrap">

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Upload Photo
          </div>

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Set Goals
          </div>

          <div className="px-4 py-2 rounded-full text-white text-sm bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3]">
            Define Habits
          </div>

          <div className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-sm">
            Choose Timeline
          </div>

        </div>

        {/* Heading */}

        <div className="text-center mb-12">

          <h1 className="font-serif text-5xl mb-3">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Daily Habits
            </span>
          </h1>

          <p className="text-gray-400">
            Select the habits that will get you to your goal.
            Pick 3–5 for best results.
          </p>

        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl border border-gray-100 p-8">

          {/* FITNESS */}

          <SectionTitle title="FITNESS" />

          <div className="grid md:grid-cols-2 gap-4 mb-8">

            <HabitCard
              icon={<Dumbbell size={18} />}
              label="Workout 5x/week"
              selected={selectedHabits.includes('Workout 5x/week')}
              onClick={() => toggleHabit('Workout 5x/week')}
            />

            <HabitCard
              icon={<Activity size={18} />}
              label="30min cardio daily"
              selected={selectedHabits.includes('30min cardio daily')}
              onClick={() => toggleHabit('30min cardio daily')}
            />

          </div>

          {/* RECOVERY */}

          <SectionTitle title="RECOVERY" />

          <div className="grid md:grid-cols-2 gap-4 mb-8">

            <HabitCard
              icon={<Moon size={18} />}
              label="Sleep 8 hours"
              selected={selectedHabits.includes('Sleep 8 hours')}
              onClick={() => toggleHabit('Sleep 8 hours')}
            />

          </div>

          {/* NUTRITION */}

          <SectionTitle title="NUTRITION" />

          <div className="grid md:grid-cols-2 gap-4 mb-8">

            <HabitCard
              icon={<Droplets size={18} />}
              label="Drink 3L water daily"
              selected={selectedHabits.includes('Drink 3L water daily')}
              onClick={() =>
                toggleHabit('Drink 3L water daily')
              }
            />

            <HabitCard
              icon={<Beef size={18} />}
              label="150g protein/day"
              selected={selectedHabits.includes('150g protein/day')}
              onClick={() =>
                toggleHabit('150g protein/day')
              }
            />

            <HabitCard
              icon={<Salad size={18} />}
              label="5 servings veggies"
              selected={selectedHabits.includes('5 servings veggies')}
              onClick={() =>
                toggleHabit('5 servings veggies')
              }
            />

          </div>

          {/* MINDFULNESS */}

          <SectionTitle title="MINDFULNESS" />

          <div className="grid md:grid-cols-2 gap-4">

            <HabitCard
              icon={<Sparkles size={18} />}
              label="Daily meditation"
              selected={selectedHabits.includes('Daily meditation')}
              onClick={() =>
                toggleHabit('Daily meditation')
              }
            />

            <HabitCard
              icon={<BookOpen size={18} />}
              label="Morning journaling"
              selected={selectedHabits.includes('Morning journaling')}
              onClick={() =>
                toggleHabit('Morning journaling')
              }
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-10">

          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-full border bg-white"
          >
            Back
          </button>

          <button
            onClick={handleContinue}
            disabled={selectedHabits.length < 1}
            className="px-8 py-3 rounded-full text-white flex items-center gap-2"
            style={{
              background:
                selectedHabits.length
                  ? 'linear-gradient(135deg,#AD46FF,#00D3F3)'
                  : '#E5E7EB',
              color:
                selectedHabits.length
                  ? '#fff'
                  : '#9CA3AF',
            }}
          >
            Continue to Timeline
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </main>
  )
}

/* -------------------------------- */

function SectionTitle({
  title,
}: {
  title: string
}) {
  return (
    <p className="text-xs tracking-widest text-gray-400 mb-4 font-semibold">
      {title}
    </p>
  )
}

function HabitCard({
  icon,
  label,
  selected,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`
        border rounded-2xl p-4
        flex items-center gap-3
        transition-all duration-200

        ${
          selected
            ? 'border-violet-400 bg-violet-50'
            : 'border-gray-100 bg-white'
        }
      `}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg,#ede9fe,#dbeafe)',
        }}
      >
        {icon}
      </div>

      <span className="text-sm font-medium text-gray-700">
        {label}
      </span>
    </button>
  )
}