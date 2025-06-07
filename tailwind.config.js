/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          DEFAULT: '#38b6ff',
          light: '#5cc5ff',
          dark: '#2d92cc',
        },
        dark: {
          DEFAULT: '#121315',
          100: '#1a1c1e',
          200: '#22252a',
          300: '#2d3033',
        },
        light: {
          DEFAULT: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
        },
      },
      textColor: {
        dark: {
          primary: '#ffffff',
          secondary: '#94a3b8',
          disabled: '#64748b',
        },
        light: {
          primary: '#0f172a',
          secondary: '#334155',
          disabled: '#64748b',
        },
      },
      borderColor: {
        dark: {
          DEFAULT: '#1f2937',
          hover: '#38b6ff80',
        },
        light: {
          DEFAULT: '#e2e8f0',
          hover: '#38b6ff80',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
