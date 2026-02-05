"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  UserCheck as UserIcon,
  Settings,
  BookOpen,
  BarChart3,
  Shield,
  MessageSquare,
  Video,
  Award,
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react"

export function Features() {
  const [activeTab, setActiveTab] = useState("teachers")

  const tabs = [
    { id: "teachers", label: "O'qituvchilar", icon: GraduationCap },
    { id: "students", label: "Talabalar", icon: UserIcon },
    { id: "admins", label: "Adminlar", icon: Settings },
  ]

  const features = {
    teachers: [
      { icon: BookOpen, title: "Kurslarni yaratish", desc: "Kurslarni osongina yaratish va tahrirlash imkoniyati", color: "blue" },
      { icon: CheckCircle, title: "Avtomatik baholash", desc: "Testlarni avtomatik baholash va natijalarni hisoblash", color: "emerald" },
      { icon: BarChart3, title: "Progress monitoring", desc: "Talabalar progressini real vaqtda kuzatish", color: "violet" },
      { icon: Video, title: "Media yuklash", desc: "Video darslar va materiallar uchun cheksiz joy", color: "orange" },
    ],
    students: [
      { icon: UserIcon, title: "Qulay interfeys", desc: "Sodda va tushunarli interfeys orqali o'rganish", color: "blue" },
      { icon: BarChart3, title: "Progress ko'rish", desc: "O'z natijalaringizni real vaqtda kuzatish", color: "emerald" },
      { icon: MessageSquare, title: "Muloqot", desc: "O'qituvchilar bilan bevosita aloqa va chat", color: "violet" },
      { icon: Award, title: "Sertifikatlar", desc: "Kurs tugagandan so'ng avtomatik sertifikat olish", color: "orange" },
    ],
    admins: [
      { icon: Settings, title: "Nazorat paneli", desc: "To'liq tizim nazorati va kengaytirilgan sozlamalar", color: "blue" },
      { icon: UserIcon, title: "Foydalanuvchilar", desc: "Barcha foydalanuvchilarni qulay boshqarish", color: "emerald" },
      { icon: BarChart3, title: "Hisobotlar", desc: "Batafsil statistika va moliyaviy tahlillar", color: "violet" },
      { icon: Shield, title: "Xavfsizlik", desc: "Ma'lumotlar xavfsizligi va kirish darajalari", color: "orange" },
    ],
  }

  // Ranglar uchun mapping - Ikonkalarni aniq ko'rsatish uchun
  const colorMap = {
    blue: "bg-blue-50 text-blue-600 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    violet: "bg-violet-50 text-violet-600 ring-violet-100",
    orange: "bg-orange-50 text-orange-600 ring-orange-100",
  }

  return (
    <section id="xususiyatlar" className="py-32 relative overflow-hidden bg-white">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20 -z-0" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Professional LMS Imkoniyatlari</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Kuchli <span className="text-blue-600">imkoniyatlar</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-xl mx-auto italic">
            Har bir foydalanuvchi roli uchun maxsus ishlab chiqilgan funksionallik
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Modern Tab Switcher */}
          <div className="flex flex-wrap justify-center p-2 mb-12 bg-white/50 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-[32px] gap-2 max-w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-slate-400"}`} />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features[activeTab as keyof typeof features].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white border border-slate-100 p-10 rounded-[44px] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                >
                  {/* KONSTASTLI IKONKA: bg-slate-50 dan rangli soft bg ga o'tildi */}
                  <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center mb-8 ring-8 ring-opacity-30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg ${colorMap[feature.color as keyof typeof colorMap]}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-bold text-sm">
                    {feature.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Batafsil ma'lumot <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Background Watermark Icon */}
                  <feature.icon className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-50 opacity-20 -z-10 group-hover:text-blue-50 transition-all duration-700 rotate-12" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
