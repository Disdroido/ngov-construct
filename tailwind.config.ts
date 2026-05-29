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
      }
    }
  },
  plugins: []
} satisfies Config
