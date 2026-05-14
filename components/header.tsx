"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { motion } from "framer-motion"

const WHATSAPP_LINK = "https://wa.me/5515988168948?text=Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera."

interface HeaderProps {
  show?: boolean
}

export function Header({ show = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem("preloader-shown")
    if (hasBeenShown) {
      setIsFirstLoad(false)
    }
  }, [])

  return (
    <motion.header 
      initial={isFirstLoad ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: isFirstLoad ? 0.5 : 0, delay: isFirstLoad ? 1 : 0 }} // Appears after hero elements only on first load
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg text-foreground">
            Diego Souza
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Início
            </Link>
            <Link href="/#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="/cursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cursos
            </Link>
            <Link href="/#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
            <Button size="sm" asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Fale Comigo
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/#sobre"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/cursos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                href="/#contato"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button size="sm" className="w-fit" asChild>
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Fale Comigo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}
