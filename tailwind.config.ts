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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#F0F2F5',
        black: '#040200',
        secondary: '#2ecc71', 
        primary: {
          100: '#66beaf',
          200: '#4db3a1',
          300: '#1a9e86',
          400: '#1a9e86',
          500: '#009379', // Primary color
          600: '#00846d',
          700: '#007661',
          800: '#006755',
          900: '#005849',
        },
      },
      utilities: {
        flexCenter: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
  plugins: [],
}
export default config
