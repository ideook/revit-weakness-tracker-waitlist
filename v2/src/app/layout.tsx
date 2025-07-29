import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00C49A',
}

export const metadata: Metadata = {
  title: 'BIMSpark - Where BIM meets insight, speed, and fun',
  description: 'Join the waitlist for BIMSpark, the productivity platform that makes BIM work fun. Get personalized insights, command heatmaps, and discover new workflows.',
  keywords: ['BIM', 'Revit', 'productivity', 'analytics', 'architecture', 'engineering'],
  authors: [{ name: 'BIMSpark Team' }],
  creator: 'BIMSpark',
  publisher: 'BIMSpark',
  robots: 'index, follow',
  openGraph: {
    title: 'BIMSpark - Where BIM meets insight, speed, and fun',
    description: 'Join the waitlist for BIMSpark, the productivity platform that makes BIM work fun.',
    url: 'https://bimspark.com',
    siteName: 'BIMSpark',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIMSpark - Where BIM meets insight, speed, and fun',
    description: 'Join the waitlist for BIMSpark, the productivity platform that makes BIM work fun.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}