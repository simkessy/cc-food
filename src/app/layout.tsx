import 'dotenv/config'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { signIn } from 'next-auth/react';

import GoogleButton from 'react-google-button';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cc-food',
  description: 'WeHungry Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>
      <GoogleButton className='mx-auto mt-16'/>
      <Analytics />
    </html>
  )
}
