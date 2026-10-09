'use client'

import { useSyncExternalStore } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

// Theme lives on <html class="dark">; layout.tsx sets it before paint.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getIsDark = () => document.documentElement.classList.contains('dark')
const noopSubscribe = () => () => {}

const stars = [
  { top: '22%', left: '18%', size: 3, delay: 0.05 },
  { top: '58%', left: '30%', size: 2, delay: 0.12 },
  { top: '34%', left: '42%', size: 2, delay: 0.2 },
]

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getIsDark, () => false)
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false)

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = !isDark
    const apply = () => {
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {}
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) {
      apply()
      return
    }

    // Circular reveal of the new theme, growing out from the toggle
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(apply)
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`group relative inline-flex h-8 w-[60px] flex-shrink-0 items-center rounded-full p-1 outline-none ring-violet-400/60 focus-visible:ring-2 ${className}`}
    >
      {/* Light track */}
      <span
        className="absolute inset-0 rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-100 via-orange-50 to-sky-100 transition-opacity duration-500"
        style={{ opacity: mounted && isDark ? 0 : 1 }}
      />
      {/* Dark track */}
      <span
        className="absolute inset-0 overflow-hidden rounded-full border border-violet-500/30 bg-gradient-to-r from-[#1e1b4b] via-[#1a1033] to-[#0c1a33] transition-opacity duration-500"
        style={{ opacity: mounted && isDark ? 1 : 0 }}
      >
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            initial={false}
            animate={
              mounted && isDark
                ? { opacity: [0, 1, 0.5, 1], scale: [0, 1.4, 1] }
                : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.6, delay: isDark ? s.delay + 0.15 : 0 }}
          />
        ))}
      </span>

      {/* Knob */}
      <motion.span
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full shadow-md"
        initial={false}
        animate={{
          x: mounted && isDark ? 28 : 0,
          backgroundColor: mounted && isDark ? '#e0e7ff' : '#fbbf24',
          boxShadow:
            mounted && isDark
              ? '0 0 12px 2px rgba(167,139,250,0.55)'
              : '0 0 12px 2px rgba(251,191,36,0.55)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        whileTap={{ scale: 0.85 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <Moon size={14} strokeWidth={2.5} className="fill-indigo-500 text-indigo-600" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <Sun size={14} strokeWidth={2.5} className="text-white transition-transform duration-700 group-hover:rotate-90" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
