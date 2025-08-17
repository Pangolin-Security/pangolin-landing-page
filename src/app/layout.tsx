import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pangolin Security - AI-Native Cybersecurity Platform',
  description: 'Stop breaches before they happen with Pangolin Security\'s AI-powered cybersecurity platform. Autonomous defense that adapts faster than threats evolve.',
  keywords: 'cybersecurity, AI security, threat detection, breach prevention, endpoint protection, zero trust, pangolin security',
  authors: [{ name: 'Pangolin Security' }],
  creator: 'Pangolin Security',
  publisher: 'Pangolin Security',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pangolinsecurity.com',
    title: 'Pangolin Security - We Stop Breaches. You Stay Protected.',
    description: 'AI-native cybersecurity platform that stops breaches before they happen. Trusted by Fortune 500 companies worldwide.',
    siteName: 'Pangolin Security',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pangolin Security - AI-Native Cybersecurity Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pangolin Security - We Stop Breaches',
    description: 'AI-native cybersecurity platform that adapts faster than threats evolve.',
    images: ['/og-image.png'],
    creator: '@pangolinsec',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8b5cf6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}