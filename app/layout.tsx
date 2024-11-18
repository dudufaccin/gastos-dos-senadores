import type { Metadata } from 'next'
import { Spline_Sans } from 'next/font/google'
import './globals.css'

const splineSans = Spline_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gastos Senadores Brasileiros',
  description: 'Consumindo uma API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${splineSans.className} antialiased`}>{children} </body>
    </html>
  )
}
