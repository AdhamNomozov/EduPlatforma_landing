"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, ShieldCheck, Crown, Building2 } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Boshlang'ich",
      segment: "Online ta'lim",
      price: "15M",
      icon: <Zap className="w-5 h-5" />,
      description: "Onlayn kurslar va yakka tartibdagi repetitorlar uchun",
      features: ["50 tagacha talaba", "3 ta kurs", "Web sayt", "Telegram bot", "30 kun support"],
      variant: "basic"
    },
    {
      name: "Professional",
      segment: "O'quv markazlari",
      price: "25M",
      icon: <ShieldCheck className="w-5 h-5" />,
      description: "Til va kasbiy o'qitish muassasalari uchun mukammal",
      features: ["200 tagacha talaba", "10 ta kurs", "AI chatbot integratsiyasi", "To'lov tizimlari", "90 kun support", "Batafsil analitika"],
      featured: true,
      variant: "pro"
    },
    {
      name: "Premium",
      segment: "Maktablar uchun",
      price: "50M",
      icon: <Crown className="w-5 h-5" />,
      description: "Umumiy ta'lim maktablari uchun to'liq raqamli yechim",
      features: ["1000 tagacha talaba", "Cheksiz kurslar", "SMS integratsiya", "Maxsus API kirish", "24/7 support", "Ota-onalar paneli"],
      variant: "premium"
    },
    {
      name: "Enterprise",
      segment: "Yirik tashkilotlar",
      price: "80M+",
      icon: <Building2 className="w-5 h-5" />,
      description: "Universitetlar va korporativ ta'lim tizimlari uchun",
      features: ["Cheksiz talabalar", "White label (Shaxsiy brend)", "Dedikatsiyalangan server", "SLA kafolati", "Maxsus ishlanmalar"],
      variant: "enterprise"
    },
  ]

  return (
    <section id="narxlar" className="py-32 relative overflow-hidden bg-transparent">
      {/* Orqa fondagi vizual effektlar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Shaffof va bir martalik to'lov</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Sizga mos tarifni tanlang
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[32px] transition-all duration-500 group ${
                plan.featured 
                ? "bg-blue-600 text-white shadow-2xl shadow-blue-200 scale-105 z-10" 
                : "bg-white/70 backdrop-blur-md border border-slate-200 hover:border-blue-300 hover:shadow-xl shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Eng ommabop
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.featured ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  {plan.icon}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${plan.featured ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-wider ${plan.featured ? "text-blue-100" : "text-blue-600"}`}>
                  {plan.segment}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${plan.featured ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-medium ${plan.featured ? "text-blue-100" : "text-slate-400"}`}>
                    so'm dan
                  </span>
                </div>
                <p className={`text-[10px] uppercase font-bold mt-2 tracking-widest ${plan.featured ? "text-blue-200" : "text-slate-400"}`}>
                  Bir martalik investitsiya
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 rounded-full p-0.5 ${plan.featured ? "bg-blue-400/30" : "bg-blue-50"}`}>
                      <Check className={`w-3 h-3 ${plan.featured ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <span className={`text-sm font-medium ${plan.featured ? "text-blue-50" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full h-14 rounded-2xl font-bold transition-all duration-300 ${
                  plan.featured 
                  ? "bg-white text-blue-600 hover:bg-blue-50 hover:scale-[1.02] shadow-lg" 
                  : "bg-slate-900 text-white hover:bg-blue-600 hover:scale-[1.02]"
                }`}
              >
                <a href="https://t.me/eduplatforma_bot">
                  Demo so'rash
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-slate-400 text-sm font-medium"
        >
          * Narxlar loyihaning murakkabligi va qo'shimcha integratsiyalarga qarab o'zgarishi mumkin.
        </motion.p>
      </div>
    </section>
  )
}
