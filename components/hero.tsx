"use client"

import { Button } from "@/components/ui/button"
// Ikonkalarni aniq va xatosiz import qilish
import { 
  Play, 
  Check, 
  Shield, 
  Clock, 
  Users as UsersIcon, // "Users" so'zi bilan ziddiyat bo'lmasligi uchun alias ishlatamiz
  ChevronDown, 
  Lock, 
  Sparkles 
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const mockData = {
  students: 156,
  completion: 87,
  activeHours: 2340,
  topStudents: [
    { name: "Malika Karimova", progress: 98 },
    { name: "Jamshid Aliyev", progress: 95 },
    { name: "Sardor Rahimov", progress: 93 },
  ],
  courses: [
    { name: "Speaking", progress: 92, color: "text-blue-500" },
    { name: "Listening", progress: 85, color: "text-purple-500" },
    { name: "Writing", progress: 78, color: "text-green-500" },
  ],
}

export function Hero() {
  const [counts, setCounts] = useState({ students: 0, completion: 0, hours: 0 })

  useEffect(() => {
    const duration = 2000
    const frameRate = 1000 / 60
    const totalFrames = duration / frameRate

    let frame = 0
    const timer = setInterval(() => {
      frame++
      const progress = Math.min(frame / totalFrames, 1) // 1 dan oshib ketmasligini ta'minlash
      setCounts({
        students: Math.floor(mockData.students * progress),
        completion: Math.floor(mockData.completion * progress),
        hours: Math.floor(mockData.activeHours * progress),
      })
      if (frame >= totalFrames) clearInterval(timer)
    }, frameRate)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 border border-blue-100 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Yangi avlod LMS platformasi</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Ta'limni <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                raqamlashtiring
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              O'quv markazingizni 7 kun ichida to'liq onlayn tizimga o'tkazing. 
              Nazorat, analitika va sifat bitta platformada.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200" asChild>
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Bepul demo olish
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-2 hover:bg-slate-50" asChild>
                <a href="#xususiyatlar">Xususiyatlar</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-blue-500" />
                <span>35+ Markazlar</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Xavfsiz tizim</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: MacBook Mockup */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full scale-75" />
              
              <div className="relative bg-slate-800 rounded-[32px] p-3 shadow-2xl border border-slate-700/50">
                <div className="bg-black rounded-[24px] overflow-hidden border-8 border-slate-900">
                  {/* Browser UI */}
                  <div className="h-10 bg-slate-100 border-b flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-md h-6 px-3 flex items-center text-[10px] text-slate-400">
                      <Lock className="w-3 h-3 mr-2" /> eduplatforma.uz/dashboard
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="bg-slate-50 p-6 space-y-6 aspect-[16/10]">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Talabalar", val: counts.students, color: "text-blue-600" },
                        { label: "Natija", val: counts.completion + "%", color: "text-emerald-600" },
                        { label: "Faol soat", val: counts.hours, color: "text-purple-600" }
                      ].map((s, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                          <div className="text-[9px] uppercase font-bold text-slate-400 mb-1">{s.label}</div>
                          <div className={`text-xl font-bold ${s.color}`}>{s.val}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-[10px] font-bold mb-3">Top Talabalar</div>
                        {mockData.topStudents.map((st, i) => (
                          <div key={i} className="flex items-center justify-between text-[10px] mb-2">
                            <span className="text-slate-600">{st.name}</span>
                            <span className="font-bold">{st.progress}%</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-[10px] font-bold mb-3">Kurslar</div>
                        {mockData.courses.slice(0, 2).map((c, i) => (
                          <div key={i} className="space-y-1 mb-2">
                            <div className="flex justify-between text-[9px]">
                              <span>{c.name}</span>
                              <span>{c.progress}%</span>
                            </div>
                            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                              <div className={`h-full bg-current ${c.color}`} style={{ width: `${c.progress}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
