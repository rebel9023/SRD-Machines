'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import Popup from '../components/Popup'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowWelcome(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>SRD Machines - The Future of Manufacturing</title>
        <meta name="description" content="SRD Machines specializes in cutting-edge machinery, precision-driven solutions that redefine innovation, strength, and reliability." />
        <meta name="keywords" content="machinery, manufacturing, CNC, automation, grinding machines, turning machines" />
        
        {/* Favicon links */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="shortcut icon" href="/images/icon.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Popup 
          isOpen={showWelcome} 
          onClose={() => setShowWelcome(false)} 
          message="Welcome to SRD Machines"
          autoCloseDelay={3000}
        />
      </body>
    </html>
  )
}
