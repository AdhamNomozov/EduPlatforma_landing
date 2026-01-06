"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "LMS tizimini joriy qilish qancha vaqt oladi?",
      answer:
        "O'rtacha 2-4 hafta ichida to'liq ishga tushiriladi. Bu muddatga tayyorgarlik, o'rnatish, sozlash va o'qitish kiradi.",
    },
    {
      question: "Texnik bilim talab qilinadimi?",
      answer:
        "Yo'q, tizim juda sodda va qulay. Biz sizning jamoangizni to'liq o'qitamiz va doimiy qo'llab-quvvatlaymiz.",
    },
    {
      question: "Ma'lumotlarimiz xavfsizmi?",
      answer:
        "Ha, biz zamonaviy xavfsizlik standartlaridan foydalanamiz. Barcha ma'lumotlar shifrlangan va xavfsiz serverlarda saqlanadi.",
    },
    {
      question: "Qo'llab-quvvatlash xizmati qandaydir?",
      answer: "24/7 texnik yordam, o'zbek tilida qo'llab-quvvatlash, tez javob berish va muammolarni hal qilish.",
    },
    {
      question: "Narx nima uchun bir martalik?",
      answer:
        "Biz shaffoflikqa ishonamiz. Bir martalik to'lovdan keyin tizim sizniki. Faqat server xarajatlari alohida (oyiga 500-800 ming so'm).",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Tez-tez so'raladigan savollar</h2>
          <p className="text-lg text-gray-600">Sizni qiziqtirgan savollar javoblari</p>
        </div>

        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-12 border border-gray-100">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 last:border-b-0 ${
                  index === 0 && openIndex === 0 ? "border-t-2 border-t-blue-600" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left py-6 hover:bg-gray-50 px-2 rounded-lg transition-colors duration-150 group"
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-250 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-gray-700 leading-[1.7] pb-6 px-2 max-w-[90%]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
