import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CamePro',
  description: 'The Camellia Project. ',
  generator: 'Embark on an epic adventure in a breathtaking world where strategy, skill, and storytelling converge. 100% free to play.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
