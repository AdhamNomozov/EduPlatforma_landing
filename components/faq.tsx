"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, HelpCircle, MessageCircle, Sparkles } from "lucide-react"

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
      {/* Background Ornaments */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Savollarga javoblar</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Ko'p so'raladigan <br className="hidden md:block" />
            <span className="text-blue-600">savollar</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group overflow-hidden rounded-[32px] border transition-all duration-500 ${
                openIndex === index 
                ? "bg-white border-blue-100 shadow-2xl shadow-blue-500/10" 
                : "bg-slate-50/50 border-slate-100 hover:bg-white hover:border-blue-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between text-left p-6 md:p-8 outline-none"
              >
                <div className="flex gap-4 md:gap-6">
                   <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                     openIndex === index ? "border-blue-600 bg-blue-600" : "border-slate-300"
                   }`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-white transition-transform duration-500 ${
                        openIndex === index ? "scale-100" : "scale-0"
                      }`} />
                   </div>
                   <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                     openIndex === index ? "text-blue-600" : "text-slate-800"
                   }`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`mt-1 flex-shrink-0 transition-transform duration-500 ${
                  openIndex === index ? "rotate-90 text-blue-600" : "text-slate-400"
                }`}>
                  <ChevronRight className="w-6 h-6" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pl-16 md:pl-20">
                      <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Floating Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 w-full max-w-2xl relative overflow-hidden shadow-2xl shadow-slate-900/20">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Yana savollaringiz bormi?</h4>
                  <p className="text-slate-400">Mutaxassislarimiz sizga yordam berishga tayyor.</p>
                </div>
                <a 
                  href="https://t.me/eduplatforma_bot" 
                  target="_blank"
                  className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Telegram orqali yozish
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
