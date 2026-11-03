import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0052cc',
          600: '#003d99',
          700: '#002966',
          800: '#001a44',
          900: '#001133',
          950: '#000a1f',
        },
        orange: {
          50: '#fff5f0',
          100: '#ffe6d6',
          200: '#ffccad',
          300: '#ffb385',
          400: '#ff995c',
          500: '#FF6B35',
          600: '#e6512b',
          700: '#cc3820',
          800: '#b32016',
          900: '#99120d',
        },
        beige: {
          50: '#fdfaf6',
          100: '#f9f1e7',
          200: '#f3e3cf',
          300: '#edd5b7',
          400: '#e7c79f',
          500: '#D4A574',
          600: '#bf8f5f',
          700: '#aa794a',
          800: '#8f6338',
          900: '#744d26',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
export default config
