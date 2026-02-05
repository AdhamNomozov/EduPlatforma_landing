import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

// Shrift konfiguratsiyasi - o'qishga qulaylik uchun maksimal optimallashgan
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "EDUPLATFORMA.uz — Professional LMS platformasi",
  description: "O'zbekistonda ta'lim markazlari va maktablar uchun zamonaviy LMS tizimlarini joriy qilish",
  metadataBase: new URL('https://eduplatforma.uz'),
  icons: {
    icon: "/logo_edu.png",
    apple: "/logo_edu.png",
  },
  openGraph: {
    title: "EDUPLATFORMA.uz — Professional LMS platformasi",
    description: "Ta'lim tizimini raqamlashtirish bo'yicha professional yechimlar",
    images: ["/logo_edu.png"],
  },
}

// Viewport alohida obyekt sifatida (Next.js 14+ standarti)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563eb",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`
          ${jakarta.variable} 
          font-jakarta 
          antialiased 
          bg-white 
          text-slate-900 
          selection:bg-blue-600 
          selection:text-white
        `}
      >
        {/* Orqa fon effektlari - yuqori darajadagi vizualizatsiya */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[120px] opacity-50" />
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-[-10%] left-[15%] w-[55%] h-[55%] bg-sky-100/30 rounded-full blur-[110px] opacity-50" />
        </div>

        {/* Asosiy kontent o'rami */}
        <main className="relative z-0 flex flex-col min-h-screen">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}
