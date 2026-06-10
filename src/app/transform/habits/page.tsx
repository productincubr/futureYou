'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Dumbbell, Activity, Moon, Droplets, Beef, Salad, Sparkles, BookOpen } from 'lucide-react'
import { useTransformStore } from '@/store/transformStore'

export default function HabitsPage() {
  const router = useRouter()
  const { habits, setHabits, photoPreview } = useTransformStore()

  if (typeof window !== 'undefined' && !photoPreview) {
    router.replace('/transform')
    return null
  }

  const toggleHabit = (habit: string) => {
    if (habits.includes(habit)) {
      setHabits(habits.filter((h) => h !== habit))
    } else {
      setHabits([...habits, habit])
    }
  }

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <button onClick={() => router.push('/')} className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <ArrowLeft size={16} /> Back to Home
        </button>

        <StepIndicator current={2} />

        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-3">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] bg-clip-text text-transparent italic">
              Daily Habits
            </span>
          </h1>
          <p className="text-gray-400">Select the habits that will get you to your goal. Pick 3–5 for best results.</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <SectionTitle title="FITNESS" />
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <HabitCard icon={<Dumbbell size={18} />} label="Workout 5x/week" selected={habits.includes('Workout 5x/week')} onClick={() => toggleHabit('Workout 5x/week')} />
            <HabitCard icon={<Activity size={18} />} label="30min cardio daily" selected={habits.includes('30min cardio daily')} onClick={() => toggleHabit('30min cardio daily')} />
          </div>

          <SectionTitle title="RECOVERY" />
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <HabitCard icon={<Moon size={18} />} label="Sleep 8 hours" selected={habits.includes('Sleep 8 hours')} onClick={() => toggleHabit('Sleep 8 hours')} />
          </div>

          <SectionTitle title="NUTRITION" />
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <HabitCard icon={<Droplets size={18} />} label="Drink 3L water daily" selected={habits.includes('Drink 3L water daily')} onClick={() => toggleHabit('Drink 3L water daily')} />
            <HabitCard icon={<Beef size={18} />} label="150g protein/day" selected={habits.includes('150g protein/day')} onClick={() => toggleHabit('150g protein/day')} />
            <HabitCard icon={<Salad size={18} />} label="5 servings veggies" selected={habits.includes('5 servings veggies')} onClick={() => toggleHabit('5 servings veggies')} />
          </div>

          <SectionTitle title="MINDFULNESS" />
          <div className="grid md:grid-cols-2 gap-4">
            <HabitCard icon={<Sparkles size={18} />} label="Daily meditation" selected={habits.includes('Daily meditation')} onClick={() => toggleHabit('Daily meditation')} />
            <HabitCard icon={<BookOpen size={18} />} label="Morning journaling" selected={habits.includes('Morning journaling')} onClick={() => toggleHabit('Morning journaling')} />
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={() => router.back()} className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-500">
            Back
          </button>
          <button
            onClick={() => router.push('/transform/timeline')}
            disabled={habits.length < 1}
            className="px-8 py-3 rounded-full text-white flex items-center gap-2"
            style={{
              background: habits.length ? 'linear-gradient(135deg,#AD46FF,#00D3F3)' : '#E5E7EB',
              color: habits.length ? '#fff' : '#9CA3AF',
              cursor: habits.length ? 'pointer' : 'not-allowed',
            }}
          >
            Continue to Timeline <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

function SectionTitle({ title }: { title: string }) {
  return <p className="text-xs tracking-widest text-gray-400 mb-4 font-semibold">{title}</p>
}

function HabitCard({ icon, label, selected, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`border rounded-2xl p-4 flex items-center gap-3 transition-all duration-200 w-full text-left ${
        selected ? 'border-violet-400 bg-violet-50' : 'border-gray-100 bg-white hover:border-violet-200'
      }`}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg,#ede9fe,#dbeafe)' }}
      >
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
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