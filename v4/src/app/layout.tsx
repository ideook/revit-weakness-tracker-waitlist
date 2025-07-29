import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bimspark.com'),
  title: 'BIMSpark - AI-Powered Revit Analytics',
  description: 'Transform your Revit workflow with intelligent analytics. Join the waitlist for early access to BIMSpark.',
  keywords: ['BIM', 'Revit', 'AI', 'Analytics', 'Architecture', 'Construction'],
  authors: [{ name: 'BIMSpark Team' }],
  creator: 'BIMSpark',
  publisher: 'BIMSpark',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bimspark.com',
    title: 'BIMSpark - AI-Powered Revit Analytics',
    description: 'Transform your Revit workflow with intelligent analytics. Join the waitlist for early access to BIMSpark.',
    siteName: 'BIMSpark',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIMSpark - AI-Powered Revit Analytics',
    description: 'Transform your Revit workflow with intelligent analytics. Join the waitlist for early access to BIMSpark.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00D9FF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <SmoothScroll />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}