"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Send, Globe, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Xizmatlar",
      links: [
        { label: "LMS joriy qilish", href: "#jarayon" },
        { label: "Integratsiya", href: "#xususiyatlar" },
        { label: "O'qitish", href: "#" },
      ],
    },
    {
      title: "Kompaniya",
      links: [
        { label: "Biz haqimizda", href: "#" },
        { label: "Jamoa", href: "#" },
        { label: "Kontaktlar", href: "#faq" },
      ],
    },
  ]

  return (
    <footer className="relative bg-white border-t border-slate-100 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo_edu.png" 
                alt="Eduplatforma Logo" 
                width={40} 
                height={40} 
                className="rounded-xl shadow-sm"
              />
              <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">
                Eduplatforma
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              O'zbekistondagi ta'lim muassasalari uchun professional raqamlashtirish va LMS ekotizimlarini yaratish xizmati.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://t.me/eduplatformauz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Send size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-8">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-8">
              Aloqa markazi
            </h3>
            <div className="space-y-4">
              <a href="tel:+998997462200" className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
                  <Phone size={14} className="group-hover:text-blue-600" />
                </div>
                <span className="text-sm font-semibold">+998 99 746 22 00</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm font-medium">Termiz, O'zbekiston</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <span className="text-sm font-medium">info@eduplatforma.uz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            © {currentYear} EDUPLATFORMA.uz. Kelajak ta'limini birga quramiz.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs font-semibold transition-colors">Maxfiylik</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs font-semibold transition-colors">Shartlar</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
