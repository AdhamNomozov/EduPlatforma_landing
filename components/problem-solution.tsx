"use client"

import { motion } from "framer-motion"
import { X, Check, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    "Qog'oz bilan ishlash va vaqt yo'qotish",
    "Talabalar harakati nazoratini yo'qotish",
    "O'qituvchilar uchun ko'p texnik muammolar",
    "Ma'lumotlarni tahlil qilishning iloji yo'q",
  ]

  const solutions = [
    "Barcha jarayonlar 100% avtomatik",
    "Real vaqtda monitoring va nazorat",
    "Sodda va qulay UX/UI interfeys",
    "Kuchli analitika va AI hisobotlar",
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Transformatsiya vaqti keldi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Eski usullardan <span className="text-blue-600">voz keching</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto relative">
          {/* Markaziy bog'lovchi chiziq (faqat desktop uchun) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 bg-white rounded-full shadow-xl border flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-10 rounded-[32px] bg-slate-50 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <AlertCircle className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Eski usul</h3>
                <p className="text-slate-500 text-sm">Samarasiz va qiyin boshqaruv</p>
              </div>
            </div>

            <ul className="space-y-5">
              {problems.map((problem, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <span className="text-slate-600 font-medium">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-10 rounded-[32px] bg-blue-600 border border-blue-700 shadow-2xl shadow-blue-600/20"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-24 h-24 text-white" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EduPlatforma</h3>
                <p className="text-blue-100 text-sm">Zamonaviy va yengil yechim</p>
              </div>
            </div>

            <ul className="space-y-5">
              {solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white font-semibold">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
