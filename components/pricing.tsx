"use client"

import { Check, Sparkles, Zap, ShieldCheck, Building2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "15M",
    description: "Yangi boshlayotgan o'quv markazlari uchun.",
    features: ["50 tagacha talaba", "3 ta asosiy kurs", "Tayyor Web sayt", "Telegram bot integratsiyasi", "30 kunlik texnik qo'llab-quvvatlash"],
    icon: Zap,
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: "25M",
    description: "O'rta va yirik o'quv markazlari uchun ideal tanlov.",
    features: [
      "200 tagacha talaba",
      "10 ta kurs va darsliklar",
      "AI Chatbot (24/7 Assistant)",
      "To'lov tizimlari (Payme, Click)",
      "90 kunlik VIP support",
      "Batafsil analitika va CRM",
    ],
    icon: ShieldCheck,
    mostPopular: true,
  },
  {
    name: "Business",
    id: "tier-business",
    price: "50M",
    description: "Kengayayotgan maktablar va filiallar uchun.",
    features: [
      "1000 tagacha talaba",
      "Cheksiz kurslar",
      "SMS xabarnomalar integratsiyasi",
      "Ota-onalar uchun maxsus panel",
      "24/7 shaxsiy menejer",
      "Maxsus API integratsiyalari",
    ],
    icon: Building2,
    mostPopular: false,
  },
]

export function Pricing() {
  return (
    <section id="narxlar" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[13px] font-bold uppercase tracking-widest shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Shaffof va bir martalik to'lov</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Sizga mos <span className="text-blue-600">tarifni</span> tanlang
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg italic">
            * Narxlar loyihaning murakkabligi va qo'shimcha integratsiyalarga qarab o'zgarishi mumkin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[40px] border transition-all duration-500 hover:translate-y-[-10px] ${
                tier.mostPopular
                  ? "bg-blue-600 border-blue-600 shadow-2xl shadow-blue-400/30 text-white scale-105 z-20"
                  : "bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[11px] font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                  Eng ommabop
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.mostPopular ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  <tier.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-black mb-2 ${tier.mostPopular ? "text-white" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-medium ${tier.mostPopular ? "text-blue-100" : "text-slate-500"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-5xl font-black ${tier.mostPopular ? "text-white" : "text-slate-900"}`}>
                  {tier.price}
                </span>
                <span className={`text-lg font-bold ${tier.mostPopular ? "text-blue-200" : "text-slate-400"}`}>
                  so'mdan
                </span>
              </div>
              
              <div className={`text-[10px] font-black uppercase tracking-widest mb-8 pb-4 border-b ${
                tier.mostPopular ? "border-white/10 text-blue-200" : "border-slate-100 text-slate-400"
              }`}>
                Bir martalik investitsiya
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.mostPopular ? "text-white" : "text-blue-600"
                    }`} />
                    <span className={`text-sm font-semibold ${tier.mostPopular ? "text-blue-50" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                  tier.mostPopular
                    ? "bg-white text-blue-600 hover:bg-blue-50 hover:scale-[1.02]"
                    : "bg-slate-900 text-white hover:bg-blue-600 hover:scale-[1.02] shadow-lg shadow-slate-200"
                }`}
                asChild
              >
                <a href="https://t.me/eduplatforma_bot" target="_blank">
                   Demo so'rash
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Card */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-12 bg-slate-50 border border-slate-100 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Building2 className="w-9 h-9 text-slate-400" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-black text-slate-900 mb-1">Enterprise</h4>
              <p className="text-slate-500 font-medium">Yirik tashkilotlar va universitetlar uchun maxsus yechimlar.</p>
            </div>
          </div>
          <Button variant="outline" className="h-14 px-10 rounded-2xl border-2 font-black uppercase tracking-widest border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all" asChild>
            <a href="https://t.me/eduplatforma_bot">Aloqaga chiqish</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
