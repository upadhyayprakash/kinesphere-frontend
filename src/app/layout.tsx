import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/store/provider'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'KineSphere - More Than Recovery, A Movement for Life',
  description:
    'Comprehensive rehabilitation, sports & strength training services for pain-free living and optimal performance.',
  icons: {
    icon: [{ url: '/favicon.svg' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.svg' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'KineSphere',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#38B6FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <StoreProvider>
            {children}
            <ChatWidget />
            <Toaster position="top-center" />
          </StoreProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
