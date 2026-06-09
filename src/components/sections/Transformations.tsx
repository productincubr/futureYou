'use client'

import { useState } from 'react'

const people = [
  {
    name: 'Marcus, 34',
    result: '-12kg in 6 months',
    before: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
  },
  {
    name: 'Elena, 28',
    result: 'Built strength in 9 months',
    before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  },
  {
    name: 'Daniel, 41',
    result: 'Rebuild identity in 8 months',
    before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
  },
  {
    name: 'James, 29',
    result: '-8kg in 4 months',
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
  },
]

export default function Transformations() {
  const [current, setCurrent] = useState(0)

  // Show 3 cards at a time
  const visible = [
    people[current % people.length],
    people[(current + 1) % people.length],
    people[(current + 2) % people.length],
  ]

  const prev = () => setCurrent((c) => (c - 1 + people.length) % people.length)
  const next = () => setCurrent((c) => (c + 1) % people.length)

  return (
    <section
      id="transformations"
      className="pb-24 px-6"
      style={{ background: 'linear-gradient(to bottom, #fff 0%, #f3f0ff 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Carousel wrapper */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:shadow-md transition-all duration-200 z-10"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-3 gap-5">
            {visible.map((person, i) => (
              <div
                key={person.name + i}
                className={`
                  bg-white rounded-[24px] border overflow-hidden
                  transition-all duration-300
                  ${i === 1
                    ? 'border-indigo-200 shadow-xl shadow-indigo-100 scale-105'
                    : 'border-gray-100 shadow-sm opacity-80'
                  }
                `}
              >
                {/* Before / After split image */}
                <div className="h-[260px] flex overflow-hidden rounded-t-[24px]">
                  <img
                    src={person.before}
                    alt={`${person.name} before`}
                    className="w-1/2 h-full object-cover object-top"
                  />
                  <img
                    src={person.after}
                    alt={`${person.name} after`}
                    className="w-1/2 h-full object-cover object-top"
                  />
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{person.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">AI-generated preview</p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      background: 'linear-gradient(135deg, #e0f2fe, #ede9fe)',
                      borderColor: '#c7d2fe',
                      color: '#4f46e5',
                    }}
                  >
                    {person.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:shadow-md transition-all duration-200 z-10"
          >
            ›
          </button>

        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-8">

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-medium text-gray-800 text-sm">4.9</span>
            <span className="text-gray-400 text-sm">rated by 12,400+ users</span>
          </div>

          <div className="w-px h-8 bg-gray-200 hidden lg:block" />

          <p className="text-gray-500 italic text-sm text-center">
            "I saw the man I'd become - and I refused to disappoint him."<br />
            <span className="font-medium not-italic text-gray-600">Jordan B.</span>
          </p>

          <div className="w-px h-8 bg-gray-200 hidden lg:block" />

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-indigo-400">🛡</span>
            Private. Encrypted. Never sold.
          </div>

        </div>
      </div>
    </section>
  )
}