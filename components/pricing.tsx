"use client"

import { Check, Sparkles, Zap, ShieldCheck, Building2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "15M",
    description: "Yangi boshlayotgan o'quv markazlari uchun professional start.",
    features: [
      "50 tagacha talaba", 
      "3 ta asosiy kurs", 
      "Tayyor Web sayt", 
      "Telegram bot integratsiyasi", 
      "30 kunlik texnik support"
    ],
    icon: Zap,
    mostPopular: false,
    buttonText: "Demo so'rash",
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: "25M",
    description: "O'rta va yirik markazlar uchun eng mukammal yechim.",
    features: [
      "200 tagacha talaba",
      "10 ta kurs va darsliklar",
      "AI chatbot integratsiyasi",
      "To'lov tizimlari (Payme, Click)",
      "90 kunlik VIP support",
      "Batafsil analitika paneli",
    ],
    icon: ShieldCheck,
    mostPopular: true,
    buttonText: "Demo so'rash",
  },
  {
    name: "Premium",
    id: "tier-premium",
    price: "50M",
    description: "Maktablar va yirik o'quv zanjirlari uchun.",
    features: [
      "1000 tagacha talaba",
      "Cheksiz kurslar",
      "SMS xabarnomalar",
      "Maxsus API integratsiyasi",
      "24/7 shaxsiy menejer",
      "Ota-onalar uchun alohida panel",
    ],
    icon: Globe,
    mostPopular: false,
    buttonText: "Demo so'rash",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "80M+",
    description: "Yirik tashkilotlar uchun maxsus ishlanmalar.",
    features: [
      "Cheksiz talabalar",
      "White label (Shaxsiy brend)",
      "Dedikatsiyalangan server",
      "SLA kafolati",
      "Maxsus funksional ishlanmalar",
      "LMS mobil ilova (alohida)",
    ],
    icon: Building2,
    mostPopular: false,
    buttonText: "Demo so'rash",
  },
]

export function Pricing() {
  return (
    <section id="narxlar" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[13px] font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Shaffof va bir martalik to'lov</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Sizga mos <span className="text-blue-600">tarifni</span> tanlang
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[40px] border transition-all duration-500 hover:translate-y-[-8px] ${
                tier.mostPopular
                  ? "bg-blue-600 border-blue-600 shadow-2xl shadow-blue-400/30 text-white scale-105 z-20"
                  : "bg-white border-slate-100 shadow-xl shadow-slate-200/40 hover:border-blue-200"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
                  Eng ommabop
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.mostPopular ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-black mb-1 ${tier.mostPopular ? "text-white" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <p className={`text-[11px] font-bold uppercase tracking-wider ${tier.mostPopular ? "text-blue-100" : "text-blue-600"}`}>
                  {tier.name === "Starter" ? "Online ta'lim" : tier.name === "Professional" ? "O'quv markazlari" : tier.name === "Premium" ? "Maktablar uchun" : "Yirik tashkilotlar"}
                </p>
              </div>

              <div className="mb-2 flex items-baseline gap-1">
                <span className={`text-4xl font-black ${tier.mostPopular ? "text-white" : "text-slate-900"}`}>
                  {tier.price}
                </span>
                <span className={`text-sm font-bold ${tier.mostPopular ? "text-blue-200" : "text-slate-400"}`}>
                  so'mdan
                </span>
              </div>
              
              <div className={`text-[10px] font-black uppercase tracking-widest mb-8 ${
                tier.mostPopular ? "text-blue-200" : "text-slate-400"
              }`}>
                Bir martalik investitsiya
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.mostPopular ? "text-white" : "text-blue-600"
                    }`} />
                    <span className={`text-sm font-semibold tracking-tight ${tier.mostPopular ? "text-blue-50" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  tier.mostPopular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200"
                }`}
                asChild
              >
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                   {tier.buttonText}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-slate-400 text-sm font-medium">
          * Narxlar loyihaning murakkabligi va qo'shimcha integratsiyalarga qarab o'zgarishi mumkin.
        </p>
      </div>
    </section>
  )
}
