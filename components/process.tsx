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
    <section ref={containerRef} id="jarayon" className="py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tezkor va sifatli tizim</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Platformani joriy qilish <span className="text-blue-600">bosqichlari</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Bizning jarayonimiz shaffoflik va tezlikka asoslangan. Har bir bosqichda siz bilan birgamiz.
          </p>
        </div>

        <div className="relative">
          {/* Animated Progress Line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-[2px] bg-slate-100 -z-0">
            <motion.div 
              style={{ scaleX }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`relative group bg-white p-8 rounded-[40px] border transition-all duration-500 ${
                  step.highlight 
                  ? "border-orange-200 shadow-2xl shadow-orange-100 scale-105" 
                  : "border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-200"
                }`}
              >
                {/* Step Number Backdrop */}
                <span className="absolute top-4 right-8 text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none">
                  0{index + 1}
                </span>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:rotate-6 transition-transform duration-500`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold py-2 px-4 bg-slate-50 rounded-full text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Clock className="w-3.5 h-3.5" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-20 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[35px] p-1 shadow-2xl">
              <div className="bg-white rounded-[32px] px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Loyihani jami muddati</p>
                    <h4 className="text-3xl font-black text-slate-900">10-15 <span className="text-slate-400 font-medium">ish kuni</span></h4>
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-slate-100 hidden md:block" />
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {i === 4 ? "+35" : "UX"}
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
