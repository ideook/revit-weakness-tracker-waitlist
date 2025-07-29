import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-neon-blue/60',
    'from-neon-green/60', 
    'from-neon-purple/60',
    'from-neon-pink/60',
    'to-neon-blue',
    'to-neon-green',
    'to-neon-purple',
    'to-neon-pink',
    'from-neon-blue',
    'from-neon-green',
    'from-neon-purple',
    'from-neon-pink',
    'from-neon-blue/10',
    'from-neon-green/10',
    'from-neon-purple/10',
    'from-neon-pink/10',
    'from-neon-blue/20',
    'from-neon-green/20',
    'from-neon-purple/20',
    'from-neon-pink/20',
    'from-neon-blue/30',
    'from-neon-green/30',
    'from-neon-purple/30',
    'from-neon-pink/30',
    'text-neon-blue',
    'text-neon-green',
    'text-neon-purple',
    'text-neon-pink',
    'bg-neon-blue',
    'bg-neon-green',
    'bg-neon-purple',
    'bg-neon-pink',
    'bg-neon-blue/30',
    'bg-neon-green/30',
    'bg-neon-purple/30',
    'bg-neon-pink/30',
    'bg-neon-blue/50',
    'bg-neon-green/50',
    'bg-neon-purple/50',
    'bg-neon-pink/50',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // BIMSpark specific neon accent colors
        neon: {
          blue: '#00D9FF',
          purple: '#8B5FFF',
          green: '#00FF88',
          pink: '#FF006B',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 217, 255, 0.5), 0 0 10px rgba(0, 217, 255, 0.3), 0 0 15px rgba(0, 217, 255, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(0, 217, 255, 0.8), 0 0 20px rgba(0, 217, 255, 0.6), 0 0 30px rgba(0, 217, 255, 0.4)' 
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 217, 255, 0.3), 0 0 10px rgba(139, 95, 255, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(0, 217, 255, 0.6), 0 0 30px rgba(139, 95, 255, 0.4)' 
          },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'slideInLeft': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideInRight': {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config