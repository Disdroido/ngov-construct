import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A1A2E',
          light: '#2D2D44'
        },
        orange: {
          DEFAULT: '#E85D04',
          light: '#F47A2C'
        },
        steel: {
          DEFAULT: '#388ECC',
          light: '#5BA3D9'
        },
        'warm-gray': {
          DEFAULT: '#F5F5F0'
        },
        'near-black': {
          DEFAULT: '#0A0A0A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        space: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
