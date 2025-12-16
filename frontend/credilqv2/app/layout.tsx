import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'credilq - Financial Platform for Small Businesses',
  description: 'Manage your money, unlock your potential. Track payments, assess credit, and get funded all in one platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}