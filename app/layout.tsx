import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oracle Admin Panel',
  description: 'Hierarchical Management System for Oracle PMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
} 