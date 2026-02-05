"use client"

import { motion } from "framer-motion"
import { GraduationCap, Building2, School, Building, ArrowRight, Sparkles } from "lucide-react"

export function TargetSegments() {
  const scrollToPricing = (tierId: string) => {
    const element = document.getElementById(tierId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      
      element.classList.add("highlight-glow")
      setTimeout(() => {
        element.classList.remove("highlight-glow")
      }, 2000)
    }
  }

  const segments = [
    {
      icon: GraduationCap,
      title: "Repetitorlar",
      students: "50-500 o'quvchi",
      desc: "Onlayn kurslar va kichik jamoalar uchun moslashuvchan yechim.",
      color: "blue",
      pricingId: "pricing-basic",
    },
    {
      icon: Building2,
      title: "O'quv markazlari",
      students: "500-1500 o'quvchi",
      desc: "Til markazlari va kasbiy ta'lim muassasalari uchun professional boshqaruv.",
      color: "orange",
      featured: true,
      pricingId: "pricing-professional",
    },
    {
      icon: School,
      title: "Maktab, Litseylar",
      students: "1000-3000 o'quvchi",
      desc: "Umumiy ta'lim va xususiy maktablar uchun to'liq raqamli ekotizim.",
      color: "emerald",
      pricingId: "pricing-premium",
    },
    {
      icon: Building,
      title: "Universitet, Kompaniyalar",
      students: "10000+ o'quvchi",
      desc: "Yirik tashkilotlar uchun maxsus integratsiyalar va yuqori quvvatli serverlar.",
      color: "purple",
      pricingId: "pricing-enterprise",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-bold mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Sizga mos keladigan segmentni tanlang</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Kimlar uchun mos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[40px] bg-white border transition-all duration-500 group overflow-hidden ${
                segment.featured
                  ? "border-orange-200 shadow-2xl shadow-orange-100 scale-105 z-10"
                  : "border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200 hover:-translate-y-2"
              }`}
            >
              {segment.featured && (
                <div className="absolute top-6 right-6">
                  <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                    Mashhur
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6 shadow-lg ${
                segment.featured ? "bg-orange-500 text-white" : "bg-slate-50 text-slate-600 group-hover:bg-blue-600 group-hover:text-white"
              }`}>
                <segment.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{segment.title}</h3>
              <p className="text-blue-600 font-bold text-sm mb-4">{segment.students}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {segment.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-50">
                <button
                  onClick={() => scrollToPricing(segment.pricingId)}
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/btn"
                >
                  Narxlarni ko'rish
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Backglow on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
