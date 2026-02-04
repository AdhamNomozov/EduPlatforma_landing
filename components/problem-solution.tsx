"use client"

import { motion } from "framer-motion"
import { X, Check, Sparkles, AlertCircle, CheckCircle2, ArrowRight, Zap, TrendingUp, ShieldCheck, Clock } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    { text: "Qog'oz bilan ishlash va vaqt yo'qotish", icon: <Clock className="w-4 h-4" /> },
    { text: "Talabalar harakati nazoratini yo'qotish", icon: <AlertCircle className="w-4 h-4" /> },
    { text: "O'qituvchilar uchun texnik muammolar", icon: <X className="w-4 h-4" /> },
    { text: "Ma'lumotlarni tahlil qilish imkoniyati yo'qligi", icon: <Zap className="w-4 h-4" /> },
  ]

  const solutions = [
    { text: "Barcha jarayonlar 100% avtomatik", icon: <Zap className="w-4 h-4" /> },
    { text: "Real vaqtda monitoring va nazorat", icon: <TrendingUp className="w-4 h-4" /> },
    { text: "Sodda va qulay UX/UI interfeys", icon: <CheckCircle2 className="w-4 h-4" /> },
    { text: "Kuchli analitika va AI hisobotlar", icon: <ShieldCheck className="w-4 h-4" /> },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Orqa fondagi tekstura va nurlar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Sizning o'sishingizga nima to'sqinlik qilyapti?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            Eski usullardan <span className="text-blue-600">voz kechish</span> <br /> 
            vaqti keldi
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto relative">
          
          {/* Markaziy bog'lovchi element (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full shadow-2xl border border-slate-100 items-center justify-center">
             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <ArrowRight className="w-6 h-6 text-white" />
             </div>
          </div>

          {/* PROBLEM CARD (Eski usul) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[40px] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden group"
          >
            {/* Xira qizil nur */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shadow-inner">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Eski usul</h3>
                  <p className="text-slate-500 font-medium">Samarasiz va qimmat boshqaruv</p>
                </div>
              </div>

              <div className="space-y-6">
                {problems.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-red-100 hover:bg-red-50/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SOLUTION CARD (EduPlatforma) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[40px] bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-900/20 flex flex-col justify-between overflow-hidden group"
          >
            {/* Moviy nur effekti */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">EduPlatforma</h3>
                  <p className="text-blue-300/70 font-medium">Zamonaviy raqamli ekotizim</p>
                </div>
                <Sparkles className="w-6 h-6 text-amber-400 ml-auto animate-bounce" />
              </div>

              <div className="space-y-6">
                {solutions.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/30">
                      {item.icon}
                    </div>
                    <span className="text-blue-50 font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
