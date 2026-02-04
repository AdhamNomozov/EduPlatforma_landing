import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react" // Vercel standartiga moslandi
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EDUPLATFORMA.uz — Professional LMS platformasi",
  description: "O'zbekistonda ta'lim markazlari va maktablar uchun zamonaviy LMS tizimlarini joriy qilish",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/logo_edu.png", // Siz yuklagan yangi logotipga bog'landi
    apple: "/logo_edu.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body 
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700`}
      >
        {/* Global fon elementlari - Professionalizm beruvchi qatlam */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Mesh Gradient dog'lari */}
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px] opacity-40" />
          <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-50/50 rounded-full blur-[110px] opacity-50" />
          
          {/* Nozik Grid pattern (Klassik SaaS ko'rinishi uchun) */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
        </div>

        {/* Kontent */}
        <div className="relative z-0 flex flex-col min-h-screen">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}
