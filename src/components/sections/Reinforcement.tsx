// src/components/sections/DailyReinforcement.tsx
'use client'

import { Monitor, Smartphone, Scan, Dumbbell, BookOpen, Home } from 'lucide-react'

const places = [
  {
    label: 'On your desk.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: Monitor,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80',
  },
  {
    label: 'On your Phone.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    label: 'On your Mirror.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: Scan,
    image: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&q=80',
  },
  {
    label: 'During Workout.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    label: 'Inside your journal.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  },
  {
    label: 'In your room.',
    desc: 'A printed poster of your future self — quietly anchoring every decision you make at work.',
    Icon: Home,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
  },
]

export default function DailyReinforcement() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1">
            <span className="text-indigo-400 text-xs">✦</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Daily Reinforcement</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center leading-tight mb-4">
          Your Future Self Shouldn't
          <br />
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #a855f7, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Live Inside an App.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm text-center max-w-md mx-auto mb-12 leading-relaxed">
          Put your transformation where your eyes naturally go — your phone, mirror, desk,
          journal, and daily routine.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {places.map((place) => {
            const Icon = place.Icon
            return (
              <div key={place.label} className="flex flex-col gap-3">

                {/* Image */}
                <div className="rounded-2xl overflow-hidden w-full h-[200px] bg-gray-100">
                  <img
                    src={place.image}
                    alt={place.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80'
                    }}
                  />
                </div>

                {/* Icon + label + desc */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #ede9fe, #dbeafe)' }}
                  >
                    <Icon size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{place.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{place.desc}</p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}