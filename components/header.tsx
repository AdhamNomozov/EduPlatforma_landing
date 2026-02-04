"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Server-side rendering vaqtida Telegram xatosi bermasligi uchun 
  // useEffect ichida tekshirish eng xavfsiz yo'l
  useEffect(() => {
    // Agar loyihangizda window.Telegram ishlatilsa, u faqat brauzerda ishlaydi
    if (typeof window !== "undefined" && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
    }
  }, []);

  const navLinks = [
    { href: "#xususiyatlar", label: "Xususiyatlar" },
    { href: "#narxlar", label: "Narxlar" },
    { href: "#jarayon", label: "Jarayon" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight">EDUPLATFORMA.uz</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                Bepul maslahat
              </a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button size="sm" className="bg-primary hover:bg-primary/90 w-full" asChild>
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                  Bepul maslahat
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
