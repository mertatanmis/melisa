/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        lg: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        xl: ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
        '3xl': ['2rem', { lineHeight: '2.5rem' }],      // 32px
        // Add more sizes as needed
      },
      colors: {
        corporate: {
          DEFAULT: '#1A365D',
          50: '#F5F7FA',
          100: '#E4E9F2',
          200: '#C9D4E6',
          300: '#A3B9D9',
          400: '#7D9BCC',
          500: '#577CBF',
          600: '#3B5F9B',
          700: '#2C4875',
          800: '#1A365D',
          900: '#0D1B2E'
        },
        neutral: {
          DEFAULT: '#E5E7EB',
          50: '#FAFAFA',
          100: '#F4F5F7',
          200: '#E5E7EB',
          300: '#D2D6DC',
          400: '#9FA6B2',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        accent: {
          DEFAULT: '#C5A059',
          50: '#F9F5EB',
          100: '#F0E8D0',
          200: '#E0CD9A',
          300: '#D1B365',
          400: '#C5A059',
          500: '#A6843C',
          600: '#856930',
          700: '#634E24',
          800: '#423418',
          900: '#211A0C'
        },
        navy: {
          DEFAULT: '#070143',
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#7389AE',
          500: '#567CAB',
          600: '#44617A',
          700: '#334257',
          800: '#222F37',
          900: '#111C25',
        },
        body: {
          DEFAULT: '#5d5851',
        },
      }
    }
  },
  plugins: []
}
