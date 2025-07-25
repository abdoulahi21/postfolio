import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdou Lahi Diallo - Full-Stack Developer",
  description:
    "Personal portfolio of Diallo, a passionate full-stack developer specializing in modern web technologies.",
  keywords: "full-stack developer, web developer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Abdou Lahi Diallo" }],
  openGraph: {
    title: "Abdou Lahi Diallo - Full-Stack Developer",
    description:
      "Personal portfolio of Diallo, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
