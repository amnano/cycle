// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: ['class', 'media'],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c1ff',
          300: '#66a2ff',
          400: '#3383ff',
          500: '#1a4fff',
          600: '#0036cc',
          700: '#002999',
          800: '#001c66',
          900: '#000e33',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      maxWidth: {
        reading: '65ch',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        200: '200ms',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.8',
            a: {
              color: theme('colors.primary.500'),
              textDecoration: 'none',
              transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              letterSpacing: '-0.05em',
              fontWeight: '700',
            },
            h1: {
              letterSpacing: '-0.05em',
            },
            h2: {
              letterSpacing: '-0.05em',
            },
            h3: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            code: {
              color: theme('colors.primary.500'),
            },
            'pre code': {
              color: 'inherit',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.neutral.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
