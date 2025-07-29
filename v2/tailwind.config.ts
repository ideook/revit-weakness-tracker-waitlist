import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors based on PRD
        background: {
          primary: '#0D0D0D',
          secondary: '#1A1A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
          muted: '#AAAAAA',
        },
        accent: {
          primary: '#00C49A',
          secondary: '#00B4FF',
          tertiary: '#FF4081',
        },
        heatmap: {
          start: '#FFDD00',
          end: '#FF5722',
        },
        border: {
          default: '#444444',
          focus: '#00C49A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 196, 154, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 196, 154, 0.8)',
            transform: 'scale(1.02)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      backgroundImage: {
        'gradient-heatmap': 'linear-gradient(135deg, #FFDD00 0%, #FF5722 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00C49A 0%, #00B4FF 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config