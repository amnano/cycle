// @ts-check
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import("tailwindcss/types").Config } */
const config = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-lora)', ...fontFamily.serif],
      },
      colors: {
        primary: {
          50: '#fdf6f6',
          100: '#fce8e8',
          200: '#fad6d6',
          300: '#f5b5b5',
          400: '#ee9393',
          500: '#e57070',
          600: '#d14f4f',
          700: '#b03a3a',
          800: '#933434',
          900: '#7a2f2f',
          950: '#411616',
        },
        beige: {
          50: '#fbf9f6',
          100: '#f5efe4',
          200: '#ebe0cf',
          300: '#dcc7ac',
          400: '#c9aa84',
          500: '#bd946a',
          600: '#b07c58',
          700: '#93654a',
          800: '#775242',
          900: '#624438',
        },
        gray: colors.gray,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            'h1, h2, h3, h4': {
              fontFamily: `var(--font-lora), ${fontFamily.serif.join(', ')}`,
              fontWeight: '600',
            },
            p: {
              fontSize: '1.075rem',
              lineHeight: '1.75',
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.5em',
              height: '0.125em',
              top: '0.875em',
              left: 0,
              borderRadius: '999px',
            },
          },
        },
        lg: {
          css: {
            p: {
              fontSize: '1.125rem',
            },
          },
        },
      }),
    },
  },
  plugins: [forms, typography],
}

export default config
