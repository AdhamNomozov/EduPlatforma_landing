"use client"

import { useState } from "react"
import {
  GraduationCap,
  UserCheck,
  Settings,
  BookOpen,
  BarChart3,
  Shield,
  MessageSquare,
  Video,
  Award,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Features() {
  const [activeTab, setActiveTab] = useState("teachers")

  const tabs = [
    { id: "teachers", label: "O'qituvchilar uchun", icon: GraduationCap },
    { id: "students", label: "Talabalar uchun", icon: UserCheck },
    { id: "admins", label: "Administratorlar uchun", icon: Settings },
  ]

  const features = {
    teachers: [
      {
        icon: BookOpen,
        title: "Kurslarni yaratish",
        description: "Kurslarni osongina yaratish va tahrirlash imkoniyati",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: CheckCircle,
        title: "Avtomatik baholash",
        description: "Testlarni avtomatik baholash tizimi",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        icon: BarChart3,
        title: "Progress monitoring",
        description: "Talabalar progressini real vaqtda kuzatish",
        gradient: "from-violet-500 to-violet-600",
      },
      {
        icon: Video,
        title: "Media yuklash",
        description: "Video darslar va materiallar yuklash",
        gradient: "from-orange-500 to-orange-600",
      },
    ],
    students: [
      {
        icon: UserCheck,
        title: "Qulay interfeys",
        description: "Sodda va tushunarli interfeys orqali o'rganish",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: BarChart3,
        title: "Progress ko'rish",
        description: "O'z natijalaringizni real vaqtda kuzatish",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        icon: MessageSquare,
        title: "Muloqot",
        description: "O'qituvchilar bilan bevosita aloqa",
        gradient: "from-violet-500 to-violet-600",
      },
      {
        icon: Award,
        title: "Sertifikatlar",
        description: "Kurs tugagandan so'ng sertifikat olish",
        gradient: "from-orange-500 to-orange-600",
      },
    ],
    admins: [
      {
        icon: Settings,
        title: "Nazorat paneli",
        description: "To'liq tizim nazorati va sozlamalar",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: UserCheck,
        title: "Foydalanuvchilar",
        description: "Barcha foydalanuvchilarni boshqarish",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        icon: BarChart3,
        title: "Hisobotlar",
        description: "Batafsil statistika va tahlillar",
        gradient: "from-violet-500 to-violet-600",
      },
      {
        icon: Shield,
        title: "Xavfsizlik",
        description: "Tizim xavfsizligi va sozlamalar",
        gradient: "from-orange-500 to-orange-600",
      },
    ],
  }

  return (
    <section id="xususiyatlar" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Kuchli imkoniyatlar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Har bir foydalanuvchi uchun maxsus xususiyatlar
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                    : "hover:bg-blue-50 border-gray-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features[activeTab as keyof typeof features].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
