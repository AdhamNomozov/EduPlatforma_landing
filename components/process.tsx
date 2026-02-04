"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileCheck, Settings, Rocket, Clock, CheckCircle, Sparkles } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Maslahat",
      description: "Bepul konsultatsiya va ehtiyojlaringizni aniqlash",
      duration: "1-2 kun",
      color: "blue"
    },
    {
      icon: FileCheck,
      title: "Rejalashtirish",
      description: "Loyihani rejalashtirish va texnik tayyorgarlik",
      duration: "1-3 kun",
      color: "indigo"
    },
    {
      icon: Settings,
      title: "Joriy qilish",
      description: "Platformani o'rnatish, sozlash va integratsiya",
      duration: "7-10 kun",
      highlight: true,
      color: "orange"
    },
    {
      icon: Rocket,
      title: "Ishga tushirish",
      description: "Jamoani o'qitish va to'liq start berish",
      duration: "2-3 kun",
      color: "emerald"
    },
  ]

  return (
    <section id="jarayon" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Decorative - Section'ga chuqurlik beradi */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Oddiy va samarali yo'l</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Qanday ishlaydi?
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className={`
                  w-[104px] h-[104px] rounded-[32px] flex items-center justify-center mb-8
                  transition-all duration-500 relative
                  ${step.highlight 
                    ? "bg-orange-500 text-white shadow-2xl shadow-orange-200 scale-110" 
                    : "bg-white text-slate-400 border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:border-blue-200 group-hover:text-blue-500"}
                `}>
                  <step.icon className={`w-10 h-10 ${step.highlight ? "animate-bounce" : ""}`} />
                  
                  {/* Step Number Badge */}
                  <div className={`
                    absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white shadow-lg
                    ${step.highlight ? "bg-slate-900 text-white" : "bg-white text-slate-900"}
                  `}>
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 px-4">
                  {step.description}
                </p>

                <div className={`
                  inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-colors
                  ${step.highlight 
                    ? "bg-orange-100 text-orange-700" 
                    : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"}
                `}>
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Summary Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 flex justify-center"
          >
            <div className="relative p-[1px] rounded-[32px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 shadow-2xl shadow-indigo-200">
              <div className="bg-white rounded-[31px] px-10 py-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Loyihani joriy qilish muddati</p>
                  <h4 className="text-3xl font-black text-slate-900">10-15 <span className="text-slate-400 font-medium">ish kuni</span></h4>
                </div>
                <div className="hidden md:block w-[1px] h-12 bg-slate-100 mx-4" />
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                      {i === 4 ? "+35" : <Users className="w-4 h-4 text-slate-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
