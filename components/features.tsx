"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  UserCheck as UserIcon, // Build xatosi oldini olish uchun alias
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
import { Button } from "@/components/ui/button"

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

  return (
    <section id="xususiyatlar" className="py-32 relative overflow-hidden bg-transparent">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Har bir foydalanuvchi uchun professional yechim</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Kuchli imkoniyatlar
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Custom Tabs Design */}
          <div className="flex flex-wrap justify-center p-2 mb-16 bg-slate-100/50 backdrop-blur-md border border-slate-200 rounded-[24px] gap-2 max-w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-3.5 rounded-[18px] text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-md scale-[1.02]"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-blue-600" : "text-slate-400"}`} />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features[activeTab as keyof typeof features].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-slate-50 text-slate-600 group-hover:bg-blue-600 group-hover:text-white`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {feature.desc}
                  </p>

                  {/* Decorative faint icon in background */}
                  <feature.icon className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-100/50 -z-10 group-hover:text-blue-50/50 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
