'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Download,
  Share2,
  Sparkles,
  Target,
  Dumbbell,
  Trophy,
  Star,
} from 'lucide-react'

export default function ResultPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Back */}

        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm text-gray-500 mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        {/* Badge */}

        <div className="flex justify-center mb-5">
          <div
            className="
            px-4 py-2
            rounded-full
            text-white
            text-xs
            font-medium
          "
            style={{
              background:
                'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          >
            ✨ YOUR FUTURE SELF
          </div>
        </div>

        {/* Heading */}

        <div className="text-center">

          <h1 className="font-serif text-5xl mb-3">
            This Is Who You'll{' '}
            <span
              className="italic"
              style={{
                background:
                  'linear-gradient(135deg,#AD46FF,#00D3F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Become
            </span>
          </h1>

          <p className="text-gray-400 mb-10">
            In 3 months, this could be you.
          </p>

        </div>

        {/* Images */}

        <div
          className="
            grid
            md:grid-cols-3
            overflow-hidden
            rounded-3xl
            shadow-lg
            mb-8
          "
        >

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80"
            alt="Before"
            className="h-[500px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80"
            alt="Current"
            className="h-[500px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
            alt="Future"
            className="h-[500px] w-full object-cover"
          />

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-4 mb-10">

          <StatCard
            icon={<Target size={18} />}
            value="-15kg"
            label="Weight Loss"
          />

          <StatCard
            icon={<Dumbbell size={18} />}
            value="+20%"
            label="Build Muscle"
          />

          <StatCard
            icon={<Trophy size={18} />}
            value="Advanced"
            label="Fitness Level"
          />

          <StatCard
            icon={<Star size={18} />}
            value="9"
            label="Confidence"
          />

        </div>

        {/* CTA */}

        <div className="flex flex-col items-center">

          <button
            className="
              px-10 py-4
              rounded-full
              text-white
              font-semibold
              flex
              items-center
              gap-2
              shadow-lg
            "
            style={{
              background:
                'linear-gradient(135deg,#AD46FF,#00D3F3)',
            }}
          >
            <Download size={18} />
            Download My Future Self
          </button>

          <button
            className="
              mt-4
              flex
              items-center
              gap-2
              text-gray-500
            "
          >
            <Share2 size={16} />
            Share with Friends
          </button>

          <p className="text-xs text-gray-300 mt-6">
            Keep this visible. What gets seen repeatedly
            becomes part of your identity.
          </p>

        </div>

      </div>

    </main>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">

      <div className="flex justify-center mb-2 text-violet-500">
        {icon}
      </div>

      <p
        className="font-semibold text-lg"
        style={{
          background:
            'linear-gradient(135deg,#AD46FF,#00D3F3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {value}
      </p>

      <p className="text-xs text-gray-400 mt-1">
        {label}
      </p>

    </div>
  )
}