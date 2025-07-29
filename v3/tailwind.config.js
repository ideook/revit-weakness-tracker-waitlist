/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BIMSpark brand colors from PRD
        primary: {
          blue: '#0077FF',
          mint: '#00C49A',
        },
        background: {
          white: '#FFFFFF',
          gray: '#FAFAFA',
        },
        text: {
          primary: '#222222',
          secondary: '#888888',
        },
        highlight: {
          blue: '#F1F5FF',
          mint: '#F3FBF8',
        },
        border: {
          default: '#DDD',
          focus: '#0077FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'relaxed-plus': '1.7',
        'loose-plus': '1.8',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-bright': 'pulseBright 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseBright: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 119, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 119, 255, 0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}