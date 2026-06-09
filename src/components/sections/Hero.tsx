// src/components/sections/Hero.tsx

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">

      {/* Eyebrow pill */}
      <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 mb-8">
        <span className="text-blue-400 text-sm">✦</span>
        <p className="text-xs uppercase tracking-widest text-gray-400">
          HOW WOULD YOU LOOK IF YOU LOOSE 10 KG
        </p>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight mb-6">
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
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        See a realistic version of who you'll become — built from your goals, habits,
        and ambitions. Then let that future self pull you forward, every single day.
      </p>

      {/* CTA Button */}
      <Link
        href="/transform"
        className="inline-block bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:scale-105 transition-all duration-200"
      >
        Start Your Transformation →
      </Link>

      {/* Feature pills */}
      <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
        {[
          { icon: '🧠', label: 'Realistic AI Preview' },
          { icon: '🎯', label: 'Goal-Based Transformation' },
          { icon: '🔥', label: 'Built For Motivation' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-sm text-gray-600 bg-white shadow-sm"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}