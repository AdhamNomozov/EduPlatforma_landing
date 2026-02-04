"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "LMS tizimini joriy qilish qancha vaqt oladi?",
      answer: "O'rtacha 1-4 hafta ichida to'liq ishga tushiriladi. Bu muddatga texnik tayyorgarlik, tizimni o'rnatish, individual sozlash va xodimlarni o'qitish bosqichlari kiradi.",
    },
    {
      question: "Texnik bilim talab qilinadimi?",
      answer: "Mutlaqo yo'q. Platforma foydalanuvchi uchun maksimal darajada sodda qilib yaratilgan. Biz sizning jamoangizga barcha funksiyalardan foydalanishni o'rgatamiz va doimiy konsultatsiya beramiz.",
    },
    {
      question: "Ma'lumotlarimiz xavfsizligi qanday ta'minlanadi?",
      answer: "Barcha ma'lumotlar SSL shifrlash va zamonaviy xavfsizlik protokollari bilan himoyalangan. Ma'lumotlar faqat sizga tegishli serverlarda saqlanadi va uchinchi shaxslarga berilmaydi.",
    },
    {
      question: "Qo'llab-quvvatlash xizmati qanday ishlaydi?",
      answer: "Sizga maxsus menejer biriktiriladi. 24/7 texnik yordam, o'zbek tilidagi qo'llab-quvvatlash va tizimdagi har qanday masalada tezkor javob berish kafolatlanadi.",
    },
    {
      question: "Nima uchun obuna emas, bir martalik to'lov?",
      answer: "Biz shaffoflik tarafdorimiz. Bir marta to'lov qilasiz va platforma butunlay sizning mulkingizga aylanadi. Faqatgina texnik server xarajatlari (oyiga taxminan 200 ming so'm) alohida to'lanadi.",
    },
  ]

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-[130px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-semibold mb-6 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>Savollaringiz bormi?</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Tez-tez so'raladigan savollar
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-300 ${
                openIndex === index 
                ? "bg-white border-blue-200 shadow-xl shadow-blue-500/5" 
                : "bg-white/50 border-slate-200 hover:border-blue-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left p-6 md:p-8"
              >
                <span className={`text-lg font-bold transition-colors ${
                  openIndex === index ? "text-blue-600" : "text-slate-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-xl transition-all ${
                  openIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="h-px bg-slate-100 mb-6" />
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 mb-6">Savolingizga javob topmadingizmi?</p>
          <a 
            href="https://t.me/eduplatforma_bot" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all hover:scale-105 shadow-xl shadow-slate-200"
          >
            <MessageCircle className="w-5 h-5" />
            Mutaxassis bilan bog'lanish
          </a>
        </motion.div>
      </div>
    </section>
  )
}
