// src/components/sections/Science.tsx
import {
    Eye,
    Brain,
    Zap,
    Target,
    Sparkles,
  } from "lucide-react";

export default function Science() {
    const steps = [
        {
          num: "01",
          icon: Eye,
          title: "You Visualize",
          desc: "Your future self appears in vivid, photoreal detail.",
        },
        {
          num: "02",
          icon: Brain,
          title: "Your Brain Believes",
          desc: "Repeated exposure rewires self-perception.",
        },
        {
          num: "03",
          icon: Zap,
          title: "Neural Pathways Form",
          desc: "Identity-level beliefs harden into reflex.",
        },
        {
          num: "04",
          icon: Target,
          title: "You Take Action",
          desc: "Behavior auto-aligns with the new self-image.",
        },
        {
          num: "05",
          icon: Sparkles,
          title: "You Become It",
          desc: "The future self collapses into the present self.",
        },
      ];

  return (
    <section id="science" className="py-16 md:py-24 px-4 sm:px-6 bg-white dark:bg-ink-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 mb-6">
            <span className="text-indigo-400 text-xs">✦</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">The Science</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight md:leading-normal mb-5 text-gray-900 dark:text-white">
            Why It Works{' '}
            <br />
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              In Your Brain.
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Neuroscience shows the brain doesn't distinguish sharply between
            vividly imagined experience and lived experience. When you see a
            believable future self repeatedly, your identity quietly shifts — and
            behavior follows identity.
          </p>

          {/* Quote card */}
          <div className="bg-gray-50 dark:bg-ink-900 border border-gray-100 dark:border-white/10 rounded-2xl p-5 sm:p-6 mb-10 max-w-sm">
            <span className="text-indigo-300 text-2xl font-serif leading-none">"</span>
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mt-1 font-medium">
              Mental imagery activates the same neural circuits as the real
              behavior. Visualization isn't decoration — it's rehearsal.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              – Dr. A. Moreno, Cognitive Neuroscientist
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-10">
            {[
              { val: '+87%', lbl: 'Motivation lift' },
              { val: '+74%', lbl: 'Habit consistency' },
              { val: '9.2/10', lbl: 'Confidence score' },
            ].map((s) => (
              <div key={s.lbl}>
                <p
                  className="text-xl sm:text-2xl font-bold font-serif"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.val}
                </p>
                <p className="text-xs text-gray-400 mt-1">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-4">

          {/* Brain image */}
          <div className="rounded-2xl overflow-hidden w-full h-[240px] sm:h-[320px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80"
              alt="Brain neural visualization"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Steps list */}
          <div className="flex flex-col gap-3 mt-2">
          {steps.map((step) => {
  const Icon = step.icon;

  return (
    <div
      key={step.num}
      className="flex items-center gap-3 sm:gap-4 bg-white dark:bg-ink-900 border border-gray-100 dark:border-white/10 rounded-2xl px-4 sm:px-5 py-4"
    >
      <span className="text-xs text-gray-300 dark:text-gray-500 w-5 flex-shrink-0">
        {step.num}
      </span>

      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#F3E8FF] to-[#DBEAFE] dark:from-violet-500/20 dark:to-blue-500/15"
      >
        <Icon
          size={18}
          strokeWidth={2}
          className="text-violet-500 dark:text-violet-300"
        />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {step.title}
        </p>

        <p className="text-xs text-gray-400">
          {step.desc}
        </p>
      </div>
    </div>
  );
})}
          </div>
        </div>

      </div>
    </section>
  )
}
