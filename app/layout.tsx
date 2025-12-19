import type { Metadata } from 'next'
import { Instrument_Serif, Inter, Fragment_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { clsx } from 'clsx'

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lanecarHeadline = localFont({
  src: '../public/fonts/LanecarHeadline.woff2',
  variable: '--font-headline',
  display: 'swap',
})

const fragment = Fragment_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hanzo Studio Clone',
  description: 'Unlimited Design for Solid Startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(
        inter.className, 
        inter.variable, 
        instrumentSerif.variable, 
        fragment.variable,
        lanecarHeadline.variable,
        'bg-bg-primary text-text-primary antialiased'
      )}>
        {children}
      </body>
    </html>
  )
}
