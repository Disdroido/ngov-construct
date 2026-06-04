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
        ink: {
          DEFAULT: '#0f1830',
          2: '#2a3142',
          soft: '#5b6373',
          mute: '#8a8f9b'
        },
        navy: {
          DEFAULT: '#0F2240',
          dark: '#091a32',
          deep: '#051022'
        },
        red: {
          DEFAULT: '#E42929',
          dark: '#b81e1e',
          soft: '#f7d4d4'
        },
        paper: '#ffffff',
        'off-white': '#fdfdfd',
        'warm-2': '#f1f0eb',
        'warm-3': '#e5e3dc',
        rule: {
          DEFAULT: '#d3cfc3',
          soft: '#e3dfd3'
        }
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        content: '1400px'
      },
      clipPath: {
        'hero-right': 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 14%)',
        'why-image': 'polygon(0 0, 92% 0, 100% 14%, 100% 100%, 8% 100%, 0 86%)',
        'corner-tl': 'polygon(0 0, 100% 0, 0 100%)',
        'corner-tr': 'polygon(100% 0, 100% 100%, 0 0)',
        'tile-cut-l': 'polygon(0 0, 100% 0, 0 100%)',
        'tile-cut-r': 'polygon(100% 0, 100% 100%, 0 0)',
      },
      animation: {
        'fade-in': 'fade 0.25s ease',
        'rise': 'rise 0.35s cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        rise: {
          from: { transform: 'translateY(18px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'masonry': 'cubic-bezier(.2,.7,.2,1)',
      },
    }
  },
  plugins: [
    function({ addUtilities, theme }) {
      const clipPathUtilities = {
        '.clip-hero': { clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 14%)' },
        '.clip-why-img': { clipPath: 'polygon(0 0, 92% 0, 100% 14%, 100% 100%, 8% 100%, 0 86%)' },
        '.clip-corner-tl': { clipPath: 'polygon(0 0, 100% 0, 0 100%)' },
        '.clip-corner-tr': { clipPath: 'polygon(100% 0, 100% 100%, 0 0)' },
        '.clip-tile-cut-l': { clipPath: 'polygon(0 0, 100% 0, 0 100%)' },
        '.clip-tile-cut-r': { clipPath: 'polygon(100% 0, 100% 100%, 0 0)' },
      }
      addUtilities(clipPathUtilities)
    }
  ]
} satisfies Config
