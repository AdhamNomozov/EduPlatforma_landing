"use client"

import { motion } from "framer-motion"
// Users ikonkasini UsersIcon nomi bilan import qilamiz
import { Award, Users as UsersIcon, Headphones, TrendingUp, Sparkles } from "lucide-react"

export function WhyUs() {
  const reasons = [
    {
      icon: Award,
      number: "6+",
      title: "yillik tajriba",
      description: "O'zbekiston bozorida professional xizmat ko'rsatish",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: UsersIcon, // Endi xatolik bermaydi
      number: "35+",
      title: "mamnun mijoz",
      description: "Butun O'zbekiston bo'ylab ishonchli hamkorlik",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Headphones,
      number: "24/7",
      title: "qo'llab-quvvatlash",
      description: "O'zbek tilida tezkor va sifatli texnik yordam",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: TrendingUp,
      number: "∞",
      title: "doimiy yangilanish",
      description: "Eng so'nggi texnologiyalar va yangi funksiyalar",
      gradient: "from-slate-700 to-slate-900",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Nega aynan biz?</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Muvaffaqiyatli LMS tajribasi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className={`text-5xl font-black mb-4 bg-gradient-to-br ${reason.gradient} bg-clip-text text-transparent`}>
                {reason.number}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 capitalize">
                {reason.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <reason.icon className="w-16 h-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
