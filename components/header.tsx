"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll holatini kuzatish
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobil menyu ochilganda scrollni bloklash
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
  }, [mobileMenuOpen])

  const navLinks = [
    { href: "#xususiyatlar", label: "Xususiyatlar" },
    { href: "#narxlar", label: "Narxlar" },
    { href: "#jarayon", label: "Jarayon" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled 
          ? "py-3 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" 
          : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* LOGOTIP */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg group-hover:rotate-3 transition-transform duration-300">
                  <Image 
                    src="/logo_edu.png" 
                    alt="Eduplatforma Logo" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-extrabold text-xl tracking-tighter text-slate-900 uppercase">
                  Edu<span className="text-blue-600">platforma</span>
                </span>
              </a>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button size="lg" className="rounded-2xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200" asChild>
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Bepul maslahat
                </a>
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button 
              className="md:hidden p-3 rounded-2xl bg-slate-100 text-slate-900 active:scale-90 transition-transform" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] bg-white p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-black text-sm uppercase tracking-widest text-slate-400">Menyu</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full">
                   <X size={24} className="text-slate-900" />
                </button>
              </div>

              <nav className="space-y-6 flex-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors group"
                  >
                    {link.label}
                    <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>

              <div className="pt-8 border-t border-slate-100 space-y-4">
                <Button size="lg" className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold shadow-lg shadow-blue-200" asChild>
                  <a href="https://t.me/eduplatforma_bot">
                    Bepul Demo Olish
                  </a>
                </Button>
                <a href="tel:+998997462200" className="flex items-center justify-center gap-2 py-3 text-slate-500 font-bold text-sm">
                  +998 99 746 22 00
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
