"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      id: "pricing-basic", // Added ID for scroll target
      name: "Boshlang'ich",
      segment: "Online ta'lim uchun", // Added segment label
      price: "15M",
      description: "Onlayn kurslar va repetitorlar",
      features: ["50 tagacha talaba", "3 ta kurs", "Telegram bot", "30 kun support", "Mobil ilova"],
      buttonText: "Demo so'rash",
      buttonVariant: "outline" as const,
    },
    {
      id: "pricing-professional", // Added ID for scroll target
      name: "Professional",
      segment: "O'quv markazlari uchun", // Added segment label
      price: "20M",
      description: "Til va kasbiy o'qitish muassasalari",
      features: [
        "200 tagacha talaba",
        "10 ta kurs",
        "AI chatbot + Telegram",
        "To'lov integratsiya",
        "90 kun support",
        "Batafsil analitika",
      ],
      featured: true,
      buttonText: "Demo so'rash",
      buttonVariant: "default" as const,
    },
    {
      id: "pricing-premium", // Added ID for scroll target (new tier)
      name: "Premium",
      segment: "Maktablar uchun", // Added segment label
      price: "25M",
      description: "Umumiy ta'lim maktablari",
      features: [
        "1000 tagacha talaba",
        "Cheksiz kurslar",
        "24/7 support",
        "SMS integratsiya",
        "Maxsus integratsiyalar",
        "API kirish",
      ],
      buttonText: "Demo so'rash",
      buttonVariant: "outline" as const,
    },
    {
      id: "pricing-enterprise", // Added ID for scroll target (renamed)
      name: "Enterprise",
      segment: "Korporativ uchun", // Added segment label
      price: "50M+",
      description: "Yirik tashkilotlar va holding",
      features: ["Cheksiz talabalar", "Maxsus ishlanmalar", "White label", "Dedikatsiyalangan server", "SLA kafolati"],
      buttonText: "Bog'lanish",
      buttonVariant: "secondary" as const,
    },
  ]

  return (
    <section id="narxlar" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Shaffof narxlar</h2>
          <p className="text-lg text-gray-600">Bir martalik to'lov. Hech qanday yashirin to'lovlar yo'q.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              id={plan.id} // Added ID for scroll target
              className={`bg-white rounded-2xl p-8 border flex flex-col transition-all duration-300 relative scroll-mt-24 ${
                plan.featured
                  ? "border-2 border-blue-600 scale-105 shadow-[0_16px_48px_rgba(59,130,246,0.20)]"
                  : "border-gray-200 hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {plan.featured && (
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-[0_-4px_12px_rgba(59,130,246,0.2)]"
                  style={{ borderRadius: "8px 8px 0 0" }}
                >
                  ENG TANLANGAN
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-900 mb-1 mt-2">{plan.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">{plan.segment}</p>

              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-[48px] font-bold text-blue-600 leading-none">{plan.price}</span>
                </div>
                <div className="text-base text-gray-500 mt-1">so'm dan</div>
                <div className="text-sm text-gray-400">bir martalik</div>
              </div>

              <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">{plan.description}</p>

              <Button
                className={`w-full mb-8 h-[52px] text-[17px] font-semibold rounded-xl ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl"
                    : plan.buttonVariant === "outline"
                      ? "border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-900"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.buttonText}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? "bg-blue-600" : "bg-gray-400"
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
