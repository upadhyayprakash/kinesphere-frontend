import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/store/provider'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'KineSphere - More Than Recovery, A Movement for Life',
  description:
    'Comprehensive rehabilitation, sports & strength training services for pain-free living and optimal performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  )
}
