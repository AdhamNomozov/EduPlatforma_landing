"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll holatini kuzatish (Sticky effekt uchun)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobil menyu ochilganda scrollni to'xtatish
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
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
        className={`sticky top-0 z-[60] transition-all duration-300 ${
          scrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" 
          : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* LOGOTIP */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
                  <Image 
                    src="/logo_edu.png" 
                    alt="Eduplatforma Logo" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">
                  Edu<span className="text-blue-600">platforma</span>
                </span>
              </a>
            </motion.div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href} 
                  href={link.href} 
                  className="text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-4"
            >
              <Button size="lg" className="rounded-full bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200" asChild>
                <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Bepul konsultatsiya
                </a>
              </Button>
            </motion.div>

            {/* MOBILE TOGGLE */}
            <button 
              className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-900 transition-colors active:scale-90" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-[55] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] bg-white p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full">
                   <X size={24} className="text-slate-900" />
                </button>
              </div>

              <div className="space-y-6 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Menyu</p>
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-slate-900 group"
                  >
                    {link.label}
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <Button size="lg" className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold shadow-lg shadow-blue-200" asChild>
                  <a href="https://t.me/eduplatforma_bot" target="_blank" rel="noopener noreferrer">
                    Demo-tur olish
                  </a>
                </Button>
                <p className="mt-4 text-center text-xs text-slate-400 font-medium italic">
                  7/24 onlayn yordam
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
