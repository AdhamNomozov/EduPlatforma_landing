"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <a href="#xususiyatlar" className="text-sm font-medium hover:text-primary transition-colors">
              Xususiyatlar
            </a>
            <a href="#narxlar" className="text-sm font-medium hover:text-primary transition-colors">
              Narxlar
            </a>
            <a href="#jarayon" className="text-sm font-medium hover:text-primary transition-colors">
              Jarayon
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
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

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#xususiyatlar" className="block text-sm font-medium hover:text-primary transition-colors">
              Xususiyatlar
            </a>
            <a href="#narxlar" className="block text-sm font-medium hover:text-primary transition-colors">
              Narxlar
            </a>
            <a href="#jarayon" className="block text-sm font-medium hover:text-primary transition-colors">
              Jarayon
            </a>
            <a href="#faq" className="block text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4">
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
