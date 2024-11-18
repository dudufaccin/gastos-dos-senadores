import type { Metadata } from 'next'
import './globals.css'

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
      <body className={'antialiased'}>{children} </body>
    </html>
  )
}
