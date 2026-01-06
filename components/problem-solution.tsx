import { X, Check, Sparkles, Frown, Smile } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Muammo yoki yechim?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Eski usullardan zamonaviy platformaga o'ting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Problem side */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Frown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Muammo</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-base text-gray-700 leading-relaxed">Qog'oz bilan ishlash va vaqt yo'qotish</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-base text-gray-700 leading-relaxed">Talabalar harakati nazoratini yo'qotish</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-base text-gray-700 leading-relaxed">
                  O'qituvchilar uchun ko'p texnik muammolar
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-base text-gray-700 leading-relaxed">
                  Ma'lumotlarni tahlil qilishning iloji yo'q
                </span>
              </div>
            </div>
          </div>

          {/* Solution side */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl shadow-blue-500/10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl -z-10 blur-xl opacity-50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Yechim</h3>
              <Sparkles className="w-5 h-5 text-orange-500 ml-auto" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-900 leading-relaxed">Barcha jarayonlar avtomatik</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-900 leading-relaxed">
                  Real vaqtda monitoring va nazorat
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-900 leading-relaxed">Sodda va qulay interfeys</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-900 leading-relaxed">
                  Kuchli analitika va hisobotlar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
