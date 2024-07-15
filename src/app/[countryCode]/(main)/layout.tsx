import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { Inter } from 'next/font/google'
import { cn } from '@lib/utils'
import "../../../styles/globals.css"
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

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <body className={cn(
      'antialiased',
      fontHeading.variable,
      fontBody.variable
    )}>
      <Nav />
      {props.children}
      <Footer />
    </body>
  )
}
