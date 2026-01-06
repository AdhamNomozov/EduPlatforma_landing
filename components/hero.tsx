"use client"

import { Button } from "@/components/ui/button"
import { Play, Check, Shield, Clock, Users, ChevronDown, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const mockData = {
  students: 156,
  completion: 87,
  activeHours: 2340,
  topStudents: [
    { name: "Malika Karimova", avatar: "M", progress: 98, color: "from-yellow-400 to-yellow-600" },
    { name: "Jamshid Aliyev", avatar: "J", progress: 95, color: "from-gray-300 to-gray-500" },
    { name: "Sardor Rahimov", avatar: "S", progress: 93, color: "from-orange-400 to-orange-600" },
  ],
  courses: [
    { name: "IELTS Speaking", progress: 92, color: "text-blue-500", borderColor: "border-blue-500" },
    { name: "Grammar Advanced", progress: 85, color: "text-purple-500", borderColor: "border-purple-500" },
    { name: "Business English", progress: 78, color: "text-green-500", borderColor: "border-green-500" },
  ],
}

export function Hero() {
  const [studentsCount, setStudentsCount] = useState(0)
  const [completionCount, setCompletionCount] = useState(0)
  const [hoursCount, setHoursCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const studentInterval = duration / mockData.students
    const completionInterval = duration / mockData.completion
    const hoursInterval = duration / mockData.activeHours

    let studentCounter = 0
    const studentTimer = setInterval(() => {
      studentCounter += 1
      setStudentsCount(studentCounter)
      if (studentCounter >= mockData.students) clearInterval(studentTimer)
    }, studentInterval)

    let completionCounter = 0
    const completionTimer = setInterval(() => {
      completionCounter += 1
      setCompletionCount(completionCounter)
      if (completionCounter >= mockData.completion) clearInterval(completionTimer)
    }, completionInterval)

    let hoursCounter = 0
    const hoursTimer = setInterval(() => {
      hoursCounter += 10
      setHoursCount(hoursCounter)
      if (hoursCounter >= mockData.activeHours) clearInterval(hoursTimer)
    }, hoursInterval / 234)

    return () => {
      clearInterval(studentTimer)
      clearInterval(completionTimer)
      clearInterval(hoursTimer)
    }
  }, [])

  return (
    <section className="min-h-[90vh] py-32 relative overflow-hidden flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white">
        {/* Top gradient - blue */}
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-100"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Bottom-right gradient - purple */}
        <div
          className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(168, 85, 247, 0.06) 0%, rgba(168, 85, 247, 0.02) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Mesh grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.01) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.01) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[45%_50%] gap-[5%] items-center">
          {/* LEFT SIDE - Content */}
          <div className="space-y-10 max-w-xl">
            <div className="inline-flex items-center gap-2.5 backdrop-blur-md bg-white/80 border border-gray-200 px-4 py-2.5 rounded-full text-sm shadow-lg shadow-blue-500/5 w-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">IT Park rezidenti</span>
              <Shield className="w-4 h-4 text-blue-600" />
            </div>

            <div className="space-y-3">
              <h1
                className="text-[52px] leading-[1.1] font-medium tracking-tight text-balance text-gray-800"
                style={{ letterSpacing: "-0.02em" }}
              >
                Ta'lim biznesingiz uchun
              </h1>
              <h1
                className="text-[68px] leading-[1.1] font-bold tracking-tight text-balance bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent relative"
                style={{
                  letterSpacing: "-0.02em",
                  textShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                }}
              >
                professional LMS tizimi
              </h1>
            </div>

            <div className="flex items-center gap-8 text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-base font-medium">Tezkor joriy qilish (7 kun)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-base font-medium">24/7 texnik yordam</span>
              </div>
            </div>

            <div className="space-y-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-[60px] px-10 rounded-[14px] shadow-[0_8px_24px_rgba(59,130,246,0.25)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.35)] hover:scale-[1.02] transition-all duration-200"
                asChild
              >
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" fill="currentColor" />
                  Demo so'rash
                </a>
              </Button>

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>20+ mijoz</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>7 kun</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>Bepul konsultatsiya</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - MacBook Pro mockup */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{
                transform: "perspective(1400px) rotateY(-12deg) rotateX(4deg) scale(0.92)",
                transition: "transform 400ms ease-out",
              }}
              whileHover={{
                scale: 0.94,
                rotateY: -8,
                rotateX: 2,
                transition: { duration: 0.4 },
              }}
            >
              {/* MacBook body - Space Gray aluminum */}
              <div
                className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[20px] p-3"
                style={{
                  boxShadow: `
                    0 25px 70px rgba(0,0,0,0.12),
                    0 45px 100px rgba(59,130,246,0.15),
                    0 10px 30px rgba(0,0,0,0.08)
                  `,
                }}
              >
                {/* Screen with rounded corners */}
                <div className="bg-black rounded-[12px] overflow-hidden border-[8px] border-gray-900 relative">
                  {/* Screen glare effect */}
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
                    }}
                  />

                  {/* Browser chrome */}
                  <div className="h-10 bg-white border-b border-gray-200 flex items-center px-3 gap-3 relative z-10">
                    {/* macOS Traffic Lights */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 max-w-md bg-gray-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-sm text-gray-600 truncate">eduplatforma.uz/dashboard</span>
                    </div>

                    {/* User Badge */}
                    <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-2 border border-gray-200">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <span className="text-xs text-gray-700 font-medium">Azizbek (Director)</span>
                    </div>
                  </div>

                  {/* Dashboard content - simplified to fit laptop screen */}
                  <div className="p-6 space-y-5 bg-gradient-to-br from-gray-50 to-white">
                    {/* Top Stats - Keep */}
                    <div className="grid grid-cols-3 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <div className="text-xs text-gray-500 mb-1">Jami talabalar</div>
                        <div className="text-3xl font-bold text-blue-600">{studentsCount}</div>
                        <div className="text-xs text-green-600 mt-1">+12%</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <div className="text-xs text-gray-500 mb-1">O'rtacha o'zlashtirish</div>
                        <div className="text-3xl font-bold text-emerald-600">{completionCount}%</div>
                        <div className="text-xs text-green-600 mt-1">+5%</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <div className="text-xs text-gray-500 mb-1">Faol vaqt</div>
                        <div className="text-3xl font-bold text-purple-600">{hoursCount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500 mt-1">Bu oy</div>
                      </motion.div>
                    </div>

                    {/* Bottom section - Leaderboard + Course completion */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Leaderboard */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Eng yaxshi talabalar</h4>
                        <div className="space-y-2.5">
                          {mockData.topStudents.map((student, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <span className="text-base">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</span>
                              <span className="text-gray-700 flex-1 truncate">{student.name}</span>
                              <span className="font-semibold text-gray-900">{student.progress}%</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Course completion */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                      >
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Kurs o'zlashtirish</h4>
                        <div className="space-y-3">
                          {mockData.courses.map((course, index) => (
                            <div key={index} className="flex items-center gap-3">
                              {/* Circular progress ring */}
                              <svg className="w-10 h-10 transform -rotate-90">
                                <circle
                                  cx="20"
                                  cy="20"
                                  r="16"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  className="text-gray-200"
                                />
                                <motion.circle
                                  cx="20"
                                  cy="20"
                                  r="16"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  fill="none"
                                  strokeDasharray={`${2 * Math.PI * 16}`}
                                  initial={{ strokeDashoffset: 2 * Math.PI * 16 }}
                                  animate={{
                                    strokeDashoffset: 2 * Math.PI * 16 * (1 - course.progress / 100),
                                  }}
                                  transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                                  className={course.color}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium text-gray-700 truncate">{course.name}</div>
                                <div className="text-xs text-gray-500">{course.progress}% bajarilgan</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle floating animation */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
      >
        <span className="text-xs font-medium">Scroll down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
