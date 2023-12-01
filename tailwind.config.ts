import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 49%, 100%': { color: '#f6f6f6', textShadow: '0px 2px 1px rgba(0,0,0,0.6)' },
          '60%, 99%': { color: 'transparent', textShadow: 'none' },
        }
      },
      animation: {
        blink: 'blink 1.2s infinite',
      }
    },
  },
  plugins: [],
}
export default config
