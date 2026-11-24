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
        // Deep-green palette from the approved homepage draft
        // (default #0e3733 family; dark variant #071e1b).
        // Keys stay `navy`/`accent` so every existing class keeps working.
        navy: {
          50: '#eef6f2',
          100: '#d7e8df',
          200: '#b0d2c2',
          300: '#7fb8a6',
          400: '#4a9a82',
          500: '#2e7d68',
          600: '#1d5f4e',
          700: '#154a3d',
          800: '#0e3733',
          900: '#071e1b',
          950: '#04100e',
        },
        accent: {
          50: '#fdf6ec',
          100: '#fae9cf',
          200: '#f5d3a0',
          300: '#f0b269',
          400: '#e8a44c',
          500: '#d18a2e',
          600: '#a86a1d',
          700: '#7c4d14',
          800: '#5e3a0e',
          900: '#3d2508',
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
      },
    },
  },
  plugins: [],
}
export default config
