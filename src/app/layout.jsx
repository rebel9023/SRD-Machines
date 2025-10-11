import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SRD Machines - The Future of Manufacturing',
  description: 'SRD Machines specializes in cutting-edge machinery, precision-driven solutions that redefine innovation, strength, and reliability.',
  keywords: 'machinery, manufacturing, CNC, automation, grinding machines, turning machines',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
