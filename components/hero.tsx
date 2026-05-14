"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const WHATSAPP_LINK = "https://wa.me/5515988168948?text=Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera."

interface HeroProps {
  show?: boolean
}

export function Hero({ show = true }: HeroProps) {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem("preloader-shown")
    if (hasBeenShown) {
      setIsFirstLoad(false)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={isFirstLoad ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: isFirstLoad ? 0.5 : 0, delay: isFirstLoad ? 0.2 : 0 }}
            className="space-y-8"
          >

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] text-balance">
              Transforme seu futuro com a{" "}
              <span className="text-primary relative">
                educação certa
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-snug">
              Sou <strong className="text-foreground">Diego Souza</strong>, consultor educacional da Anhanguera. Há 8 anos ajudo pessoas
              a escolherem o curso ideal para suas carreiras. Mais de <strong className="text-foreground">8 mil alunos</strong> já tiveram
              suas vidas transformadas com minha orientação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all relative overflow-hidden group"
                asChild
              >
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="relative z-10">Fale Comigo no WhatsApp</span>
                  <ChevronRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-black/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-2 transition-all duration-300 group"
                asChild
              >
                <Link href="/cursos">
                  Ver Todos os Cursos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/50">
              <motion.div 
                whileHover={{ y: -5 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold text-primary">8+</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Anos de experiência</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold text-primary">8.000+</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Vidas transformadas</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-3xl md:text-4xl font-bold text-primary">100+</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Cursos disponíveis</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Logo Anhanguera */}
          <motion.div 
            initial={isFirstLoad ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: isFirstLoad ? 0.5 : 0, delay: isFirstLoad ? 0.5 : 0 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            </div>
            
            {/* Logo Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md z-10"
            >
              <div className="aspect-square w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 relative">
                <Image 
                  src="/images/logo_anhanguera.webp"
                  alt="Logo Anhanguera - Consultor Educacional Diego Souza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card px-6 py-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Parceiro Oficial</div>
                    <div className="text-sm text-muted-foreground">Anhanguera Educacional</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Stats Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl z-20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">8.000+</div>
                  <div className="text-xs opacity-90">alunos</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
