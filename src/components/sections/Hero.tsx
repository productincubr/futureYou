// src/components/sections/Hero.tsx

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">

      {/* Eyebrow pill */}
      <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
        <span className="text-blue-400 text-sm">✦</span>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
          HOW WOULD YOU LOOK IF YOU LOOSE 10 KG
        </p>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-[32px] sm:text-4xl md:text-5xl font-semibold leading-tight mb-6 text-gray-900 dark:text-white">
        Generate Your{' '}
        <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent italic">
          Future Self.
        </span>
        <br />
        Get Motivated.{' '}
        <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent italic">
          Live It.
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        See a realistic version of who you'll become — built from your goals, habits,
        and ambitions. Then let that future self pull you forward, every single day.
      </p>

      {/* CTA Button */}
      <Link
        href="/transform"
        className="inline-block bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 text-white font-semibold px-8 sm:px-10 py-4 rounded-full text-base shadow-lg shadow-purple-200 dark:shadow-purple-900/40 hover:shadow-purple-300 dark:hover:shadow-purple-800/60 hover:scale-105 transition-all duration-200"
      >
        Start Your Transformation →
      </Link>

      {/* Feature pills */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-8 sm:mt-10 flex-wrap">
        {[
          { icon: '🧠', label: 'Realistic AI Preview' },
          { icon: '🎯', label: 'Goal-Based Transformation' },
          { icon: '🔥', label: 'Built For Motivation' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-ink-900 shadow-sm"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}
