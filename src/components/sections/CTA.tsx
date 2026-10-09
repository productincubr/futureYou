import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-[#f8f8f8] dark:bg-ink-900" />

      {/* Curved Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20 text-[#D9C7FF] dark:text-violet-500"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
      >
        <path
          d="M0 180 C 300 120 500 250 1440 150"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 260 C 400 180 700 320 1440 220"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 340 C 300 260 800 420 1440 300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 420 C 350 330 900 500 1440 380"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#E7DFFF] dark:bg-violet-500/15" />

      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#E7DFFF] dark:bg-violet-500/15" />

      {/* Content */}

      <div className="relative isolate max-w-5xl mx-auto text-center">

        <h2 className="font-display text-[40px] sm:text-[56px] md:text-[72px] leading-none text-[#101828] dark:text-white">
          The Person You Want To Become
          <br />

          <span className="cta-gradient italic">
            Already Exists.
          </span>
        </h2>

        <p className="mt-6 md:mt-8 text-[#667085] dark:text-gray-400 text-base md:text-lg">
          They're waiting on the other side of the version of you that
          decides today.
        </p>


            <Link
            href="/transform"
            className="cta-btn relative inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full text-base md:text-lg font-medium text-white hover:scale-105 transition-all duration-300 "
            style={{
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              }}
            >
            Generate My Future Self

            <ArrowRight
                size={18}
                strokeWidth={2.5}
            />
            </Link>

        <p className="mt-4 text-sm text-[#98A2B3] dark:text-gray-500">
          No credit card · Preview in 60 seconds
        </p>

      </div>
    </section>
  );
}
