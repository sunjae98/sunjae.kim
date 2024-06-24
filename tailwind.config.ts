import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text-normal': '#A29FB3',
      },
      maxWidth: {
        content: '75rem',
      },
      keyframes: {
        orbit1: {
          '0%': {
            transform: 'rotate(0deg) translateX(130%) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(130%) rotate(-360deg)',
          },
        },
        orbit2: {
          '0%': {
            transform: 'rotate(72deg) translateX(130%) rotate(-72deg)',
          },
          '100%': {
            transform: 'rotate(432deg) translateX(130%) rotate(-432deg)',
          },
        },
        orbit3: {
          '0%': {
            transform: 'rotate(144deg) translateX(130%) rotate(-144deg)',
          },
          '100%': {
            transform: 'rotate(504deg) translateX(130%) rotate(-504deg)',
          },
        },
        orbit4: {
          '0%': {
            transform: 'rotate(216deg) translateX(130%) rotate(-216deg)',
          },
          '100%': {
            transform: 'rotate(576deg) translateX(130%) rotate(-576deg)',
          },
        },
        orbit5: {
          '0%': {
            transform: 'rotate(288deg) translateX(130%) rotate(-288deg)',
          },
          '100%': {
            transform: 'rotate(648deg) translateX(130%) rotate(-648deg)',
          },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        orbit1: 'orbit1 16s linear infinite',
        orbit2: 'orbit2 16s linear infinite',
        orbit3: 'orbit3 16s linear infinite',
        orbit4: 'orbit4 16s linear infinite',
        orbit5: 'orbit5 16s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
