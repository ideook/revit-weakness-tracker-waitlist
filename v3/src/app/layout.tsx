import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'BIMSpark - Where BIM meets insight, speed, and fun',
  description: 'BIM projects are finally fun. Join the waitlist for the productivity platform that makes BIM work productive, insightful, and engaging.',
  keywords: ['BIM', 'Revit', 'productivity', 'analytics', 'workflow', 'architecture', 'engineering'],
  authors: [{ name: 'BIMSpark Team' }],
  openGraph: {
    title: 'BIMSpark - Where BIM meets insight, speed, and fun',
    description: 'BIM projects are finally fun. Join the waitlist for the productivity platform that makes BIM work productive, insightful, and engaging.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIMSpark - Where BIM meets insight, speed, and fun',
    description: 'BIM projects are finally fun. Join the waitlist for the productivity platform that makes BIM work productive, insightful, and engaging.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}