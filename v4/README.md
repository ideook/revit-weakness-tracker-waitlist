# BIMSpark Waitlist

A modern, dark-themed waitlist landing page for BIMSpark - AI-Powered Revit Analytics.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework with dark mode support
- **Inter & Space Grotesk** - Modern geometric sans-serif fonts

## Features

- 🌙 Dark mode design with neon accents
- ⚡ Modern, tech-savvy styling
- 🎨 Custom color palette with neon blue, purple, green, and pink accents
- 📱 Responsive design
- 🔒 Privacy-first (no analytics/tracking)
- ⚡ Single page application structure
- 📧 Integrated waitlist form with webhook submission
- 🎭 Glass morphism effects and smooth animations
- ✨ Loading states and user feedback

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env.local
# Edit .env.local and replace 'your_webhook_password_here' with the actual password
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx      # Root layout with fonts and metadata
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── ui/            # UI components
│   ├── WaitlistForm.tsx # Waitlist form with webhook integration
│   ├── Hero.tsx       # Hero section component
│   └── [other components...]
├── lib/               # Utility functions
│   └── utils.ts       # className merging utilities
└── styles/
    └── globals.css    # Global styles and CSS variables
```

## Color Palette

- **Neon Blue**: #00D9FF
- **Neon Purple**: #8B5FFF  
- **Neon Green**: #00FF88
- **Neon Pink**: #FF006B

## Waitlist Integration

The waitlist form integrates with a webhook endpoint for collecting email addresses:

- **Endpoint**: `https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165`
- **Method**: POST
- **Authentication**: Basic Auth (username: `ideook`)
- **Payload**: `{ "email": "user@example.com" }`

### Features:
- Email validation
- Rate limiting (5-second cooldown)
- Loading states with animations
- Success/error feedback
- Privacy-focused design

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint