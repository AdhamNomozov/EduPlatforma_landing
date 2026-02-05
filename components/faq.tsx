"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // BU YERDA MASSIV ANIQLANDI
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
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Tez-tez so'raladigan savollar
          </h2>
          <p className="text-slate-500 font-medium tracking-tight">Platforma haqida batafsil ma'lumot oling</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? "border-blue-500 bg-blue-50/30" : "border-slate-100 bg-slate-50/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left outline-none"
              >
                <span className={`font-bold text-lg leading-snug ${openIndex === index ? "text-blue-700" : "text-slate-800"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors ${openIndex === index ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base font-medium border-t border-blue-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
