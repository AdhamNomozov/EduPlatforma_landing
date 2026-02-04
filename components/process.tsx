import { MessageSquare, FileCheck, Settings, Rocket, Clock, CheckCircle } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Maslahat",
      description: "Bepul konsultatsiya va ehtiyojlaringizni aniqlash",
      duration: "1-2 kun",
    },
    {
      icon: FileCheck,
      title: "Rejalashtirish",
      description: "Loyihani rejalashtirish va tayyorgarlik",
      duration: "1-3 kun",
    },
    {
      icon: Settings,
      title: "Joriy qilish",
      description: "Platformani o'rnatish va sozlash",
      duration: "7-10 kun",
      highlight: true,
    },
    {
      icon: Rocket,
      title: "Ishga tushirish",
      description: "O'qitish va to'liq qo'llab-quvvatlash",
      duration: "2-3 kun",
    },
  ]

  return (
    <section id="jarayon" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Qanday ishlaydi?</h2>
          <p className="text-lg text-gray-600">Oddiy 4 bosqichda sizning LMS platformangiz tayyor</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-7 left-0 right-0 h-[3px] bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300 text-2xl font-bold ${
                      step.highlight
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_8px_24px_rgba(249,115,22,0.25)] animate-pulse"
                        : "bg-white border-[3px] border-gray-200 text-gray-900"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {step.highlight && <div className="text-2xl mb-2">🚀</div>}

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  <div
                    className={`flex items-center gap-2 text-[13px] font-medium px-3 py-1 rounded-full ${
                      step.highlight ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-green-50 border border-green-200 text-green-800 px-8 py-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <div>
                  <div className="text-xs uppercase tracking-wide font-semibold mb-0.5">Jami muddat</div>
                  <div className="text-xl font-bold">10-15 kun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
