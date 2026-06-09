'use client'

import { useState, useRef } from 'react'
import { Upload, ShieldCheck, ArrowRight, Target, Zap, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

// ── SVG Illustrations (inline, no external deps) ──────────────────────────────

function BrainIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="52" fill="#EEF2FF" />
      {/* head silhouette */}
      <ellipse cx="60" cy="68" rx="22" ry="26" fill="#C7D2FE" />
      <ellipse cx="60" cy="52" rx="20" ry="22" fill="#A5B4FC" />
      {/* brain folds */}
      <path d="M46 48 Q52 42 58 48 Q64 42 70 48" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M44 54 Q50 48 56 54 Q62 48 68 54 Q74 48 78 54" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M46 60 Q52 54 58 60 Q64 54 70 60" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* glow dots */}
      <circle cx="52" cy="44" r="3" fill="#818CF8" opacity="0.7"/>
      <circle cx="68" cy="44" r="3" fill="#818CF8" opacity="0.7"/>
      <circle cx="60" cy="38" r="2" fill="#A78BFA" opacity="0.6"/>
      {/* sparkles */}
      <circle cx="88" cy="32" r="3" fill="#C4B5FD" opacity="0.8"/>
      <circle cx="92" cy="42" r="2" fill="#A5B4FC" opacity="0.6"/>
      <circle cx="30" cy="38" r="2.5" fill="#C4B5FD" opacity="0.7"/>
    </svg>
  )
}

function IdentityIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="52" fill="#F5F3FF" />
      {/* two overlapping head silhouettes */}
      <ellipse cx="50" cy="70" rx="18" ry="22" fill="#DDD6FE" opacity="0.8"/>
      <ellipse cx="50" cy="56" rx="16" ry="18" fill="#C4B5FD" opacity="0.9"/>
      <ellipse cx="72" cy="70" rx="18" ry="22" fill="#C4B5FD" opacity="0.6"/>
      <ellipse cx="72" cy="56" rx="16" ry="18" fill="#A78BFA" opacity="0.7"/>
      {/* mirror/reflection line */}
      <line x1="61" y1="38" x2="61" y2="88" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
      {/* checkmark on right head */}
      <circle cx="76" cy="42" r="8" fill="#7C3AED" opacity="0.9"/>
      <path d="M72 42 L75 45 L80 39" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* dots */}
      <circle cx="34" cy="44" r="3" fill="#DDD6FE" opacity="0.8"/>
      <circle cx="30" cy="55" r="2" fill="#C4B5FD" opacity="0.6"/>
      <circle cx="90" cy="80" r="2.5" fill="#DDD6FE" opacity="0.7"/>
    </svg>
  )
}

function PsychologyIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="60" cy="60" r="52" fill="#FFF7ED" />
      {/* head silhouette warm tone */}
      <ellipse cx="60" cy="70" rx="22" ry="24" fill="#FED7AA" />
      <ellipse cx="60" cy="54" rx="20" ry="20" fill="#FDBA74" />
      {/* goal/star inside */}
      <circle cx="60" cy="52" r="10" fill="#F97316" opacity="0.3"/>
      <path d="M60 44 L62 50 H68 L63 54 L65 60 L60 56 L55 60 L57 54 L52 50 H58 Z" fill="#F97316" opacity="0.8"/>
      {/* upward arrow */}
      <path d="M54 80 Q60 68 66 80" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M60 68 L60 62" stroke="#FB923C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M57 65 L60 62 L63 65" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* sparkles */}
      <circle cx="85" cy="35" r="3" fill="#FED7AA" opacity="0.9"/>
      <circle cx="90" cy="46" r="2" fill="#FDBA74" opacity="0.7"/>
      <circle cx="32" cy="40" r="2.5" fill="#FED7AA" opacity="0.8"/>
      <circle cx="28" cy="52" r="2" fill="#FDBA74" opacity="0.6"/>
    </svg>
  )
}

// ── Step Progress Bar ─────────────────────────────────────────────────────────

const steps = [
  { label: 'Upload Photo', icon: Upload },
  { label: 'Set Goals', icon: Target },
  { label: 'Define Habits', icon: Zap },
  { label: 'Choose Timeline', icon: Calendar },
]

function StepBar({ current = 0 }: { current?: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, i) => {
        const Icon = step.icon
        const active = i === current
        const done = i < current
        return (
          <div key={i} className="flex items-center">
            <div
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                active
                  ? 'text-white shadow-md'
                  : done
                  ? 'text-violet-500 bg-violet-50'
                  : 'text-gray-400 bg-transparent'
              }`}
              style={
                active
                  ? { background: 'linear-gradient(135deg,#a855f7,#6366f1)' }
                  : {}
              }
            >
              <Icon size={13} />
              <span>{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-px mx-1 ${done ? 'bg-violet-300' : 'bg-gray-200'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Info Cards (right panel) ──────────────────────────────────────────────────

const infoCards = [
  {
    num: '1',
    title: 'Visual Priming',
    desc: 'Seeing your future self activates embodied content in your brain.',
    illustration: <BrainIllustration />,
    gradient: 'from-indigo-50 to-blue-50',
    accent: '#6366F1',
  },
  {
    num: '2',
    title: 'Identity Reinforcement',
    desc: 'Daily exposure helps you make decisions aligned with your future self.',
    illustration: <IdentityIllustration />,
    gradient: 'from-violet-50 to-purple-50',
    accent: '#7C3AED',
  },
  {
    num: '3',
    title: 'Future Self Psychology',
    desc: 'See your future self and see how ready to achieve their goals.',
    illustration: <PsychologyIllustration />,
    gradient: 'from-orange-50 to-amber-50',
    accent: '#F97316',
  },
]

// ── Main Component ────────────────────────────────────────────────────────────

export default function UploadCard() {
  const router = useRouter()

  const [photo, setPhoto] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    setPhoto(file)
    setPreview(URL.createObjectURL(file))
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleContinue = () => {
    if (!photo) return
    router.push('/transform/goals')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">

      {/* Back to Home */}
      <div className="px-8 -pt">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowRight size={14} className="rotate-180" />
          Back to Home
        </button>
      </div>

      {/* Step bar */}
      <div className="px-8 ">
        <StepBar current={0} />
      </div>

      {/* Heading */}
      <div className="text-center px-8 mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 text-gray-900">
          Upload Your{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg,#a855f7,#6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Current Photo
          </span>
        </h1>
        <p className="text-gray-400 text-sm">
          A clear, well-lit photo of your face works best. We encrypt everything.
        </p>
      </div>

      {/* Main content */}
      <div className="flex-1 px-8 pb-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-start">

          {/* ── Left: Upload Card ── */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-md p-6 flex flex-col gap-5">

            {/* Drop zone */}
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={`
                rounded-2xl border-2 border-dashed cursor-pointer
                flex flex-col items-center justify-center py-14
                transition-all select-none
                ${dragging ? 'border-violet-400 bg-violet-50' : 'border-gray-200 bg-gray-50'}
              `}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                />
              ) : (
                <>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg,#a855f7,#6366f1)' }}
                  >
                    <Upload size={22} className="text-white" />
                  </div>
                  <p className="font-medium text-gray-700 text-sm">
                    Drop your photo here or click to browse
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5">PNG, JPG up to 10MB</p>
                </>
              )}
            </div>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) handleFile(file)
              }}
            />

            {/* Privacy notice */}
            <div className="flex items-start gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#ede9fe,#dbeafe)' }}
              >
                <ShieldCheck size={16} className="text-violet-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700">100% Private &amp; Encrypted</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your photo is never stored or shared.
                  Processed locally with end-to-end encryption.
                </p>
              </div>
            </div>

            {/* Continue button */}
            <div className="flex justify-end">
              <button
                onClick={handleContinue}
                disabled={!photo}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: photo
                    ? 'linear-gradient(135deg,#a855f7,#6366f1)'
                    : '#E5E7EB',
                  color: photo ? '#fff' : '#9CA3AF',
                  cursor: photo ? 'pointer' : 'not-allowed',
                }}
              >
                Continue to Goals →
              </button>
            </div>
          </div>

          {/* ── Right: Info Cards ── */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.num}
                className={`bg-gradient-to-b ${card.gradient} rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-start`}
              >
                {/* Number badge */}
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3"
                  style={{ background: card.accent }}
                >
                  {card.num}
                </div>

                {/* Title */}
                <p className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
                  {card.title}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {card.desc}
                </p>

                {/* Illustration */}
                <div className="w-full aspect-square max-w-[110px] mx-auto mt-auto">
                  {card.illustration}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Research bar */}
      <div className="py-5 text-center px-8">
        <p className="text-xs text-gray-500">
          <span
            className="font-semibold"
            style={{
              background: 'linear-gradient(135deg,#a855f7,#6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Research shows:
          </span>{' '}
          Visualizing your future self increases persistence, improves habits, and helps you stick to your goals long-term.
        </p>
      </div>

    </div>
  )
}