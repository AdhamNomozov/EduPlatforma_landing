"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { 
  MessageSquare, 
  FileCheck, 
  Settings, 
  Rocket, 
  Clock, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react"

export function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const steps = [
    {
      icon: MessageSquare,
      title: "Konsultatsiya",
      desc: "Ehtiyojlaringizni tahlil qilamiz va individual yechim taklif etamiz",
      duration: "1-2 kun",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: FileCheck,
      title: "Rejalashtirish",
      desc: "Texnik topshiriq va platforma arxitekturasini tasdiqlaymiz",
      duration: "1-3 kun",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Joriy qilish",
      desc: "Serverlarni sozlash va platformani brendingizga moslash",
      duration: "7-10 kun",
      color: "from-orange-500 to-amber-400",
      highlight: true
    },
    {
      icon: Rocket,
      title: "Ishga tushirish",
      desc: "Jamoani o'qitish va tizimni to'liq start berish",
      duration: "2-3 kun",
      color: "from-emerald-500 to-teal-400"
    }
  ]

  return (
    <section ref={containerRef} id="jarayon" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[13px] font-bold uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tezkor va sifatli tizim</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Platformani joriy qilish <span className="text-blue-600">bosqichlari</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Bizning jarayonimiz shaffoflik va tezlikka asoslangan. Har bir bosqichda siz bilan birgamiz.
          </p>
        </div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[3px] bg-slate-100 -z-0">
            <motion.div 
              style={{ scaleX }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-500 origin-left shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group bg-white p-8 rounded-[40px] border transition-all duration-500 ${
                  step.highlight 
                  ? "border-orange-200 shadow-2xl shadow-orange-100 ring-4 ring-orange-50/50" 
                  : "border-slate-100 shadow-xl shadow-slate-200/40 hover:border-blue-200 hover:shadow-blue-100/50"
                }`}
              >
                {/* RAQAMLAR TUZATILDI: Endi aniqroq (opacity-10) va kattaroq */}
                <span className="absolute top-6 right-8 text-7xl font-black text-slate-900 opacity-[0.08] group-hover:opacity-[0.15] group-hover:text-blue-600 transition-all duration-500 select-none">
                  0{index + 1}
                </span>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold py-2.5 px-4 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="bg-slate-900 rounded-[40px] p-10 md:p-12 relative overflow-hidden shadow-2xl shadow-slate-900/20">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-[28px] flex items-center justify-center shadow-2xl shadow-blue-600/40">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-2">Loyihani jami muddati</p>
                    <h4 className="text-4xl font-black text-white leading-none">
                      10-15 <span className="text-slate-500 text-2xl font-bold">ish kuni</span>
                    </h4>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-3">
                   <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-[11px] font-black text-white">
                        {i === 4 ? "+35" : "LMS"}
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs font-bold italic tracking-wide">Muvaffaqiyatli joriy qilingan loyihalar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
