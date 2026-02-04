import { Award, Users, Headphones, TrendingUp } from "lucide-react"

export function WhyUs() {
  const reasons = [
    {
      icon: Award,
      number: "6+",
      title: "yillik tajriba",
      description: "O'zbekiston bozorida professional xizmat",
      gradient: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/20",
      iconSize: 48,
    },
    {
      icon: Users,
      number: "35+",
      title: "mamnun mijoz",
      description: "Butun O'zbekiston bo'ylab ishonchli hamkorlik",
      gradient: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/20",
      iconSize: 48,
    },
    {
      icon: Headphones,
      number: "24/7",
      title: "qo'llab-quvvatlash",
      description: "O'zbek tilida tez va sifatli yordam",
      gradient: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/20",
      iconSize: 48,
    },
    {
      icon: TrendingUp,
      number: "∞",
      title: "doimiy yangilanish",
      description: "Eng so'nggi texnologiyalar va funksiyalar",
      gradient: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/20",
      iconSize: 48,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Nega bizni tanlaysizlar?</h2>
          <p className="text-lg text-gray-600">O'zbekistondagi etakchi LMS joriy qilish xizmati</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-2xl p-6 hover:scale-103 hover:${reason.shadowColor} hover:shadow-xl transition-all duration-300 flex gap-4`}
            >
              <div
                className={`w-[70px] h-[70px] bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div
                  className={`text-[48px] font-extrabold leading-none mb-1 bg-gradient-to-br ${reason.gradient} bg-clip-text text-transparent`}
                >
                  {reason.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
