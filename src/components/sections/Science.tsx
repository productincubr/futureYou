// src/components/sections/Science.tsx
import {
    Eye,
    Brain,
    Zap,
    Target,
    Sparkles,
    Icon,
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
    <section id="science" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── LEFT COLUMN ── */}
        <div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 mb-6">
            <span className="text-indigo-400 text-xs">✦</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">The Science</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-normal mb-5">
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
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
            Neuroscience shows the brain doesn't distinguish sharply between
            vividly imagined experience and lived experience. When you see a
            believable future self repeatedly, your identity quietly shifts — and
            behavior follows identity.
          </p>

          {/* Quote card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10 max-w-sm">
            <span className="text-indigo-300 text-2xl font-serif leading-none">"</span>
            <p className="text-gray-700 text-sm leading-relaxed mt-1 font-medium">
              Mental imagery activates the same neural circuits as the real
              behavior. Visualization isn't decoration — it's rehearsal.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              – Dr. A. Moreno, Cognitive Neuroscientist
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-10">
            {[
              { val: '+87%', lbl: 'Motivation lift' },
              { val: '+74%', lbl: 'Habit consistency' },
              { val: '9.2/10', lbl: 'Confidence score' },
            ].map((s) => (
              <div key={s.lbl}>
                <p
                  className="text-2xl font-bold font-serif"
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
          <div className="rounded-2xl overflow-hidden w-full h-[400px]">
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
      className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4"
    >
      <span className="text-xs text-gray-300 w-5">
        {step.num}
      </span>

      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg,#F3E8FF,#DBEAFE)",
        }}
      >
        <Icon
          size={18}
          strokeWidth={2}
          className="text-violet-500"
        />
      </div>

      <div>
        <p className="text-sm font-semibold">
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