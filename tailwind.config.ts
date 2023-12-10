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
        fullWhite: '#FFFFFF',
        white: '#F0F2F5',
        black: '#040200',
        grayBg: '#FAFAFA',
        grayBorder: '#E0E0E0',
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

      boxShadow: {
        'sm': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        'md': 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        // Customize the 'sm' (small) shadow value as needed
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
