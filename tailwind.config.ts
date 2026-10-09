import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark-mode surfaces
        ink: {
          950: '#09090f',
          900: '#111119',
          800: '#1a1a25',
          700: '#262633',
        },
      },
    },
  },
  plugins: [],
}

export default config
