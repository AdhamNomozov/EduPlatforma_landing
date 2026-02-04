"use client"

import { Button } from "@/components/ui/button"
// Ikonkani alias bilan import qilamiz (Users -> UsersIcon)
import { Send, Phone, Shield, Clock, Users as UsersIcon } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0052FF]">
      {/* Orqa fondagi zamonaviy gradient va effektlar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-800 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Ta'lim markazingizni <br /> 
            <span className="text-blue-200">yangi bosqichga</span> olib chiqing
          </h2>

          <p className="text-lg md:text-xl text-blue-50/80 mb-12 max-w-2xl mx-auto">
            Bepul konsultatsiya va demo-tur olish uchun hoziroq bog'laning. Bizning mutaxassislar sizga yordam berishga tayyor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto gap-3 h-14 px-10 bg-white text-[#0052FF] hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 rounded-2xl font-bold shadow-xl shadow-blue-900/20"
            >
              <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5 fill-current" />
                @eduplatforma_bot ga yozing
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto gap-3 h-14 px-10 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold transition-all duration-300"
            >
              <a href="tel:+998997462200">
                <Phone className="w-5 h-5" />
                +998 99 746 22 00
              </a>
            </Button>
          </div>

          {/* Ishonch ko'rsatkichlari */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="p-2 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-blue-200" />
              </div>
              <span className="text-sm font-medium">Xavfsiz tizim</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="p-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5 text-blue-200" />
              </div>
              <span className="text-sm font-medium">24/7 Qo'llab-quvvatlash</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="p-2 bg-white/10 rounded-lg">
                {/* Bu yerda Users o'rniga UsersIcon ishlatildi */}
                <UsersIcon className="w-5 h-5 text-blue-200" />
              </div>
              <span className="text-sm font-medium">35+ Markazlar ishonchi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
