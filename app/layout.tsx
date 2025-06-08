import type React from "react"
import type { Metadata } from "next"
import { Poppins, Work_Sans } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Laboratoire AlAnouar - Analyses médicales à Marrakech",
  description:
    "Laboratoire d'analyses médicales à Marrakech offrant des services complets avec des résultats rapides et fiables, garantissant votre santé et bien-être.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" translate="no">
      <body className={`${poppins.variable} ${workSans.variable}`}>{children}</body>
    </html>
  )
}
