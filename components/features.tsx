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
  Sparkles
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

  // Ranglar va kontrast uchun mapping
  const colorMap = {
    blue: "bg-blue-600 text-white shadow-blue-200",
    emerald: "bg-emerald-600 text-white shadow-emerald-200",
    violet: "bg-violet-600 text-white shadow-violet-200",
    orange: "bg-orange-600 text-white shadow-orange-200",
  }

  return (
    <section id="xususiyatlar" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional yechimlar</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Kuchli <span className="text-blue-600">imkoniyatlar</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs switch */}
          <div className="flex flex-wrap justify-center p-1.5 mb-12 bg-slate-50 border border-slate-100 rounded-[28px] gap-1 max-w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-[22px] text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features[activeTab as keyof typeof features].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-100 p-8 rounded-[32px] hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
                >
                  {/* KONSTASTLI IKONKA: bg-white o'rniga to'q ranglar ishlatildi */}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-6 shadow-lg transition-transform group-hover:scale-110 ${colorMap[feature.color as keyof typeof colorMap]}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>

                  {/* MUAMMO HAL QILINDI: O'ng tomondagi xira ikonka o'rniga nozik gradient glow qo'shildi */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full bg-blue-600`} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
