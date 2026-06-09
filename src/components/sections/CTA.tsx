import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-[#f8f8f8]" />

      {/* Curved Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
      >
        <path
          d="M0 180 C 300 120 500 250 1440 150"
          stroke="#D9C7FF"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 260 C 400 180 700 320 1440 220"
          stroke="#D9C7FF"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 340 C 300 260 800 420 1440 300"
          stroke="#D9C7FF"
          strokeWidth="2"
          fill="none"
        />

        <path
          d="M0 420 C 350 330 900 500 1440 380"
          stroke="#D9C7FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#E7DFFF]" />

      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#E7DFFF]" />

      {/* Content */}

      <div className="relative max-w-5xl mx-auto text-center">

        <h2 className="font-display text-[48px] md:text-[72px] leading-none text-[#101828]">
          The Person You Want To Become
          <br />

          <span className="cta-gradient italic">
            Already Exists.
          </span>
        </h2>

        <p className="mt-8 text-[#667085] text-lg">
          They're waiting on the other side of the version of you that
          decides today.
        </p>


            <Link
            href="/transform"
            className="cta-btn inline-flex items-center gap-2 mt-10 px-4 py-2 rounded-full text-lg font-medium text-white hover:scale-105 transition-all duration-300 "
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

        <p className="mt-4 text-sm text-[#98A2B3]">
          No credit card · Preview in 60 seconds
        </p>

      </div>
    </section>
  );
}