# BIMSpark Waitlist Website

A modern, responsive waitlist landing page for BIMSpark - an AI-powered Revit plugin that detects weaknesses in building models and provides actionable insights.

## Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Waitlist Integration**: Seamless API integration for collecting email signups
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Production Ready**: Configured for deployment on Vercel with proper error handling

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: Custom React components with reusable UI elements
- **API**: RESTful API routes with comprehensive error handling
- **Deployment**: Vercel (configured) / Netlify compatible

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- API password for n8n webhook integration

## Getting Started

### 1. Clone and Install

```bash
git clone <repository-url>
cd revit-weakness-tracker-waitlist-v3
npm install
```

### 2. Environment Setup

Copy the environment template:
```bash
cp .env.example .env.local
```

Edit `.env.local` and replace the placeholder with your actual API password:
```env
API_PASSWORD=your_actual_api_password_here
```

### 3. Development

Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### 4. Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run build:verify` - Run all checks and build (recommended before deployment)
- `npm run preview` - Build and start production server locally
- `npm run clean` - Clean build cache and dependencies

## Project Structure

```
src/
├── app/
│   ├── api/waitlist/route.ts    # API endpoint for waitlist submissions
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main landing page
├── components/
│   ├── WaitlistForm.tsx         # Waitlist signup form component
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── lib/
│   ├── api.ts                   # API client utilities
│   └── utils.ts                 # Utility functions
└── types/
    └── index.ts                 # TypeScript type definitions
```

## API Integration

The waitlist form integrates with an n8n webhook endpoint:
- **Endpoint**: `https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165`
- **Authentication**: Basic Auth (username: `ideook`, password: from environment)
- **Method**: POST
- **Payload**: `{ "email": "user@example.com" }`

### Error Handling

The API includes comprehensive error handling for:
- Invalid email formats
- Duplicate email addresses
- Authentication failures
- Rate limiting
- Server errors
- Network issues

## Deployment

### Vercel (Recommended)

1. **Connect Repository**: Import your project to Vercel
2. **Set Environment Variables**: Add `API_PASSWORD` in Vercel dashboard
3. **Deploy**: Vercel will automatically detect Next.js and deploy

Environment variables in Vercel:
- `API_PASSWORD`: Your n8n webhook password

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build:verify
   ```

2. **Start production server**:
   ```bash
   npm run start
   ```

### Netlify

For Netlify deployment, add a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[headers]]
  for = "/api/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, POST, PUT, DELETE, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type, Authorization"
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_PASSWORD` | Password for n8n webhook authentication | Yes |
| `NODE_ENV` | Environment mode (development/production) | No |

### Vercel Configuration

The `vercel.json` file includes:
- Build configuration
- Environment variable mapping
- Function runtime settings
- CORS headers
- API route rewrites

## Security Considerations

- API password is stored securely in environment variables
- CORS headers are configured for API routes
- Input validation on both client and server side
- Error messages don't expose sensitive information
- Basic Auth implementation for webhook security

## Performance Features

- **Static Generation**: Pages are statically generated for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **Caching**: Proper cache headers for static assets
- **Compression**: Automatic gzip compression

## Monitoring and Analytics

To add analytics, integrate with your preferred service:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

Add the tracking code to `src/app/layout.tsx`.

## Troubleshooting

### Common Issues

1. **Build Errors**: Run `npm run type-check` to identify TypeScript issues
2. **API Errors**: Verify `API_PASSWORD` environment variable is set
3. **Styling Issues**: Ensure Tailwind CSS is properly configured
4. **Form Not Working**: Check browser console for API response errors

### Debug Mode

Enable debug logging by adding to `.env.local`:
```env
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run build:verify` to ensure everything works
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For issues or questions, contact the development team.