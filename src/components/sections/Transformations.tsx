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

  const prev = () => setCurrent((c) => (c - 1 + people.length) % people.length)
  const next = () => setCurrent((c) => (c + 1) % people.length)

  // Mobile: 1 card, Desktop: 3 cards
  const mobileCard = people[current]
  const desktopCards = [
    people[current % people.length],
    people[(current + 1) % people.length],
    people[(current + 2) % people.length],
  ]

  return (
    <section
      id="transformations"
      className="pb-20 md:pb-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#f3f0ff] dark:from-ink-950 dark:to-[#130f22]"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── MOBILE CAROUSEL (1 card) ── */}
        <div className="flex lg:hidden items-center gap-3 max-w-lg mx-auto">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-300 text-lg active:scale-95 transition-all"
          >
            ‹
          </button>

          {/* Single Card */}
          <div className="flex-1 min-w-0 bg-white dark:bg-ink-900 rounded-[20px] border border-indigo-200 dark:border-indigo-500/30 shadow-lg shadow-indigo-100 dark:shadow-indigo-950/50 overflow-hidden">
            <div className="h-[220px] flex overflow-hidden rounded-t-[20px]">
              <img
                src={mobileCard.before}
                alt={`${mobileCard.name} before`}
                className="w-1/2 h-full object-cover object-top"
              />
              <img
                src={mobileCard.after}
                alt={`${mobileCard.name} after`}
                className="w-1/2 h-full object-cover object-top"
              />
            </div>
            <div className="px-4 py-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{mobileCard.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">AI-generated preview</p>
              </div>
              <span
                className="text-xs font-medium px-2.5 py-1.5 rounded-full border whitespace-nowrap flex-shrink-0 bg-gradient-to-br from-sky-100 to-violet-100 border-indigo-200 text-indigo-600 dark:from-sky-500/10 dark:to-violet-500/15 dark:border-indigo-400/30 dark:text-indigo-300"
              >
                {mobileCard.result}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-300 text-lg active:scale-95 transition-all"
          >
            ›
          </button>
        </div>

        {/* Mobile dots */}
        <div className="flex lg:hidden justify-center gap-1.5 mt-4">
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show transformation ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 bg-gradient-to-br from-[#AD46FF] to-[#00D3F3]'
                  : 'w-1.5 bg-gray-200 dark:bg-white/15'
              }`}
            />
          ))}
        </div>

        {/* ── DESKTOP CAROUSEL (3 cards) ── */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-300 text-xl hover:bg-gray-50 dark:hover:bg-ink-800 hover:shadow-md transition-all duration-200"
          >
            ‹
          </button>

          {/* 3 Cards */}
          <div className="flex-1 grid grid-cols-3 gap-5">
            {desktopCards.map((person, i) => (
              <div
                key={person.name + i}
                className={`
                  bg-white dark:bg-ink-900 rounded-[24px] border overflow-hidden
                  transition-all duration-300
                  ${i === 1
                    ? 'border-indigo-200 dark:border-indigo-500/30 shadow-xl shadow-indigo-100 dark:shadow-indigo-950/50 scale-105'
                    : 'border-gray-100 dark:border-white/10 shadow-sm opacity-80'
                  }
                `}
              >
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
                <div className="px-5 py-4 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{person.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">AI-generated preview</p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full border whitespace-nowrap flex-shrink-0 bg-gradient-to-br from-sky-100 to-violet-100 border-indigo-200 text-indigo-600 dark:from-sky-500/10 dark:to-violet-500/15 dark:border-indigo-400/30 dark:text-indigo-300"
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
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-300 text-xl hover:bg-gray-50 dark:hover:bg-ink-800 hover:shadow-md transition-all duration-200"
          >
            ›
          </button>
        </div>

        {/* ── SOCIAL PROOF ── */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border-t border-gray-100 dark:border-white/10 pt-6 md:pt-8">

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">4.9</span>
            <span className="text-gray-400 text-sm">rated by 12,400+ users</span>
          </div>

          <div className="w-px h-8 bg-gray-200 dark:bg-white/10 hidden md:block" />

          <p className="text-gray-500 dark:text-gray-400 italic text-sm text-center">
            "I saw the man I'd become - and I refused to disappoint him."
            <br />
            <span className="font-medium not-italic text-gray-600 dark:text-gray-300">Jordan B.</span>
          </p>

          <div className="w-px h-8 bg-gray-200 dark:bg-white/10 hidden md:block" />

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-indigo-400">🛡</span>
            Private. Encrypted. Never sold.
          </div>

        </div>
      </div>
    </section>
  )
}