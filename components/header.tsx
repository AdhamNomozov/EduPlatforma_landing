"use client"

import Link from "next/link"
import { Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Xizmatlar",
      links: [
        { label: "LMS joriy qilish", href: "#" },
        { label: "Integratsiya", href: "#" },
        { label: "O'qitish", href: "#" },
      ],
    },
    {
      title: "Kompaniya",
      links: [
        { label: "Biz haqimizda", href: "#" },
        { label: "Jamoa", href: "#" },
        { label: "Kontaktlar", href: "#" },
      ],
    },
    {
      title: "Aloqa",
      links: [
        { label: "Telegram: @eduplatforma_bot", href: "https://t.me/eduplatforma_bot" },
        { label: "+998 99 746 22 00", href: "tel:+998997462200" },
        { label: "Termiz, O'zbekiston", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo va Social qismi */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">Eduplatforma</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional LMS yechimlar orqali ta'lim tizimingizni raqamlashtiring.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://t.me/eduplatformauz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Navigatsiya qismlari */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} EDUPLATFORMA.uz. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              Maxfiylik siyosati
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
