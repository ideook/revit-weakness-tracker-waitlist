# BIMSpark Waitlist Website

A modern, responsive waitlist website for BIMSpark - the BIM productivity platform that makes BIM work fun.

## 🚀 Features

- **Modern Next.js 15** with App Router and TypeScript
- **Tailwind CSS** with custom dark theme configuration
- **Framer Motion** animations and interactions
- **Responsive Design** optimized for all devices
- **Form Handling** with React Hook Form
- **API Integration** ready for n8n webhook
- **Performance Optimized** with lazy loading and code splitting
- **Accessibility** compliant with WCAG guidelines

## 🎨 Design System

Based on the PRD requirements, the site features:

- **Dark Theme**: Deep black (#0D0D0D) and graphite (#1A1A1A) backgrounds
- **Accent Colors**: Neon tones (#00C49A, #00B4FF, #FF4081)
- **Typography**: Space Grotesk and Inter fonts
- **Animations**: Smooth transitions and hover effects
- **Components**: Puzzle visualizations, heatmaps, and interactive elements

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── UserStorySection.tsx
│   │   ├── WaitlistSection.tsx
│   │   └── TrustSection.tsx
│   └── ui/                # Reusable UI components
│       ├── AnimatedSection.tsx
│       ├── WaitlistForm.tsx
│       ├── PuzzleVisualization.tsx
│       └── HeatmapVisualization.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
├── types/                 # TypeScript type definitions
└── ...
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the environment example file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your API password:

```env
NEXT_PUBLIC_API_PASSWORD=your_actual_password
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📡 API Integration

The waitlist form integrates with your n8n webhook:

- **Endpoint**: `https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165`
- **Method**: POST
- **Auth**: Basic Auth (username: `ideook`)
- **Body**: `{ "email": "user@email.com" }`

## 🎯 Key Components

### Hero Section
- Animated puzzle visualization
- Gradient text effects
- Smooth scroll interactions

### Feature Section
- Interactive visualizations (puzzle, heatmap, plugins)
- Hover animations
- Responsive grid layout

### User Stories
- Quote cards with testimonials
- Animated entrance effects
- Responsive design

### Waitlist Form
- Email validation
- Loading states
- Success/error handling
- Framer Motion animations

### Trust Section
- Security highlights
- Privacy assurances
- Enterprise-focused messaging

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  background: {
    primary: '#0D0D0D',
    secondary: '#1A1A1A',
  },
  accent: {
    primary: '#00C49A',
    secondary: '#00B4FF',
    tertiary: '#FF4081',
  },
  // ...
}
```

### Content
Modify constants in `src/lib/constants.ts`:

```typescript
export const HERO_SLOGANS = [
  "Your custom slogan here",
  // ...
]
```

### Animations
Customize animations in component files using Framer Motion or extend the Tailwind animation utilities.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Proper touch targets and interactions
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators

## 🚀 Deployment

This project is ready for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

### Vercel Deployment

```bash
npx vercel --prod
```

### Environment Variables

Make sure to set `NEXT_PUBLIC_API_PASSWORD` in your deployment environment.

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Meets Google's performance standards
- **Bundle Size**: Optimized with dynamic imports
- **Loading**: Lazy loading for images and components

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

This project is proprietary to BIMSpark.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.