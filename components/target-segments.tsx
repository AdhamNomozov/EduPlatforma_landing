"use client"

import { GraduationCap, Building2, School, Building, ArrowRight } from "lucide-react"

export function TargetSegments() {
  const scrollToPricing = (tierId: string) => {
    const element = document.getElementById(tierId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Highlight target tier for 2 seconds
      element.classList.add("highlight-glow")
      setTimeout(() => {
        element.classList.remove("highlight-glow")
      }, 2000)
    }
  }

  const segments = [
    {
      icon: GraduationCap,
      title: "Repititorlar, kichik o'quv markazlar",
      description: "Onlayn kurslar va repetitorlar uchun",
      students: "50-200 o'quvchi",
      iconGradient: "from-blue-500 to-blue-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-400",
      pricingId: "pricing-basic", // Links to pricing tier
    },
    {
      icon: Building2,
      title: "O'quv markazlari",
      description: "Til va kasbiy o'qitish",
      students: "200-500 o'quvchi",
      iconGradient: "from-orange-500 to-orange-600",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-400",
      featured: true,
      pricingId: "pricing-professional", // Links to pricing tier
    },
    {
      icon: School,
      title: "Xususiy maktab va texnikumlar",
      description: "Umumiy ta'lim maktablari",
      students: "500-2000 o'quvchi",
      iconGradient: "from-green-500 to-green-600",
      iconBg: "bg-gradient-to-br from-green-500 to-green-400",
      pricingId: "pricing-premium", // Links to pricing tier
    },
    {
      icon: Building,
      title: "Universitet va yirik tashkilotlar",
      description: "Yirik tashkilotlar va holding kompaniyalar",
      students: "3000+ o'quvchi",
      iconGradient: "from-purple-500 to-purple-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-400",
      pricingId: "pricing-enterprise", // Links to pricing tier
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Kimlar uchun mos?</h2>
          <p className="text-lg text-gray-600">Har xil ta'lim muassasalari uchun</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-250 relative ${
                segment.featured
                  ? "border-2 border-orange-500 scale-105 shadow-[0_12px_40px_rgba(249,115,22,0.15)] z-10"
                  : "border-gray-200 hover:-translate-y-1.5"
              }`}
            >
              {segment.featured && (
                <div
                  className="absolute -top-0 -right-0 bg-orange-500 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg"
                  style={{
                    borderRadius: "0 16px 0 6px",
                  }}
                >
                  ENG MASHHUR
                </div>
              )}

              <div className="mb-6">
                <div className={`w-20 h-20 ${segment.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <segment.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-[22px] font-bold text-gray-900 mb-2">{segment.title}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">{segment.students}</p>
              <p className="text-sm text-gray-600 mb-6">{segment.description}</p>

              <div className="border-t border-gray-200 mb-6" />

              <button
                onClick={() => scrollToPricing(segment.pricingId)}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group transition-colors"
              >
                Narxlarni ko'rish
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
