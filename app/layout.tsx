import type React from "react"
import type { Metadata } from "next"
// O'qishga eng qulay va zamonaviy shrift
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  // Barcha vaziyatlar uchun qalinlik darajalari
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "EDUPLATFORMA.uz — Professional LMS platformasi",
  description: "O'zbekistonda ta'lim markazlari va maktablar uchun zamonaviy LMS tizimlarini joriy qilish",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/logo_edu.png",
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
        className={`${jakarta.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-600 selection:text-white`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[120px] opacity-40" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/20 rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-[0%] left-[10%] w-[45%] h-[45%] bg-sky-100/20 rounded-full blur-[110px] opacity-40" />
        </div>

        <div className="relative z-0 flex flex-col min-h-screen">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}
