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
      { icon: BookOpen, title: "Kurslarni yaratish", desc: "Kurslarni osongina yaratish va tahrirlash imkoniyati" },
      { icon: CheckCircle, title: "Avtomatik baholash", desc: "Testlarni avtomatik baholash va natijalarni hisoblash" },
      { icon: BarChart3, title: "Progress monitoring", desc: "Talabalar progressini real vaqtda kuzatish" },
      { icon: Video, title: "Media yuklash", desc: "Video darslar va materiallar uchun cheksiz joy" },
    ],
    students: [
      { icon: UserIcon, title: "Qulay interfeys", desc: "Sodda va tushunarli interfeys orqali o'rganish" },
      { icon: BarChart3, title: "Progress ko'rish", desc: "O'z natijalaringizni real vaqtda kuzatish" },
      { icon: MessageSquare, title: "Muloqot", desc: "O'qituvchilar bilan bevosita aloqa va chat" },
      { icon: Award, title: "Sertifikatlar", desc: "Kurs tugagandan so'ng avtomatik sertifikat olish" },
    ],
    admins: [
      { icon: Settings, title: "Nazorat paneli", desc: "To'liq tizim nazorati va kengaytirilgan sozlamalar" },
      { icon: UserIcon, title: "Foydalanuvchilar", desc: "Barcha foydalanuvchilarni qulay boshqarish" },
      { icon: BarChart3, title: "Hisobotlar", desc: "Batafsil statistika va moliyaviy tahlillar" },
      { icon: Shield, title: "Xavfsizlik", desc: "Ma'lumotlar xavfsizligi va kirish darajalari" },
    ],
  }

  return (
    <section id="xususiyatlar" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Har bir foydalanuvchi uchun professional yechim</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Kuchli <span className="text-blue-600">imkoniyatlar</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* O'sha sizga yoqqan toza Tab switcher */}
          <div className="flex justify-center p-1 bg-slate-50 border border-slate-100 rounded-[24px] mb-12 max-w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-[20px] text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features[activeTab as keyof typeof features].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 p-8 rounded-[32px] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  {/* Toza va kontrastli ikonka foni */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                  
                  {/* O'ng tomondagi xira ikonka butunlay olib tashlandi */}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
