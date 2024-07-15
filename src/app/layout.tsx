import { Metadata } from "next"
import "styles/globals.css"
import { Inter } from 'next/font/google'
import { cn } from '@lib/utils'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={cn(
      'antialiased',
      fontHeading.variable,
      fontBody.variable
    )}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
