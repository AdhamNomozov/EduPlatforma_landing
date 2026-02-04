import { Button } from "@/components/ui/button"
import { Send, Phone, Shield, Clock, Users } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-blue-600">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2
            className="text-[56px] font-bold tracking-tight mb-6 text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Bugun boshlaymizmi?
          </h2>

          <p className="text-[22px] mb-12 text-white/90">Bepul konsultatsiya va demo olish uchun</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
            <Button
              size="lg"
              className="gap-2 text-lg h-[60px] px-10 bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all rounded-xl"
            >
              <Send className="w-6 h-6" />
              @eduplatforma_bot ga yozing
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg h-[60px] px-10 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl"
            >
              <Phone className="w-6 h-6" />
              +998 99 746 22 00
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Xavfsiz</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Tez javob</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>35+ mijoz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
