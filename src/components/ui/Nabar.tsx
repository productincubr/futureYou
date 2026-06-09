'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  'How It Works',
  'Transformations',
  'Science',
  'Success Stories',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-xl font-semibold text-black"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Future
          </span>

          <span
            className="text-xl font-semibold"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            You
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink key={item} label={item} />
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/transform"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            boxShadow: '0 4px 15px rgba(124,58,237,0.35)',
          }}
        >
          Start Your Transformation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-5 bg-gray-600 rounded transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-gray-600 rounded transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-0.5 w-5 bg-gray-600 rounded transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">

          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm text-gray-600 hover:text-black transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <Link
            href="/transform"
            className="text-center px-5 py-2.5 text-sm font-medium text-white rounded-full"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            }}
            onClick={() => setOpen(false)}
          >
            Start Your Transformation
          </Link>

        </div>
      </div>
    </nav>
  )
}

type NavLinkProps = {
  label: string
}

function NavLink({ label }: NavLinkProps) {
  const href = `#${label.toLowerCase().replace(/ /g, '-')}`

  return (
    <a
      href={href}
      className="relative text-sm text-gray-500 font-medium hover:text-black transition-colors duration-200 group"
    >
      {label}

      <span
        className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        }}
      />
    </a>
  )
}