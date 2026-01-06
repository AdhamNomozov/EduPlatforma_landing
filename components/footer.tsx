import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-20">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <span className="font-bold text-xl text-gray-900">EDUPLATFORMA.uz</span>
            </div>
            <p className="text-[15px] text-gray-600 mb-6 max-w-xs leading-relaxed">Professional LMS yechimlar</p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all text-gray-700"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all text-gray-700"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all text-gray-700"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all text-gray-700"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-4">Xizmatlar</h3>
            <ul className="space-y-3.5 text-base text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  LMS joriy qilish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Integratsiya
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  O'qitish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Qo'llab-quvvatlash
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-4">Kompaniya</h3>
            <ul className="space-y-3.5 text-base text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Jamoa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:translate-x-0.5 inline-block transition-all duration-200"
                >
                  Kontaktlar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-4">Aloqa</h3>
            <ul className="space-y-3.5 text-base text-gray-700">
              <li>Telegram: @eduplatforma_bot</li>
              <li>Tel: +998 90 123 45 67</li>
              <li>Email: info@eduplatforma.uz</li>
              <li>Toshkent, O'zbekiston</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 EDUPLATFORMA.uz. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Maxfiylik siyosati
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
