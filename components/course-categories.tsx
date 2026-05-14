"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Monitor, Laptop } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const WHATSAPP_LINK = "https://wa.me/5515988168948?text=Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera."

export function CourseCategories() {
  const categories = [
    {
      icon: Building2,
      title: "Cursos Presenciais",
      description: "Experiência completa em sala de aula com professores e colegas. Ideal para quem busca networking e prática.",
      count: 23,
      href: "/cursos#presencial"
    },
    {
      icon: Laptop,
      title: "Semipresencial (Híbrido Lab)",
      description: "O melhor dos dois mundos: flexibilidade online com práticas presenciais em laboratório.",
      count: 16,
      href: "/cursos#semipresencial"
    },
    {
      icon: Monitor,
      title: "EAD 100% Online",
      description: "Total flexibilidade para estudar onde e quando quiser. Diploma reconhecido pelo MEC.",
      count: 67,
      href: "/cursos#ead"
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Modalidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Escolha a modalidade ideal para você
          </h2>
          <p className="text-muted-foreground mt-4">
            Oferecemos cursos em diferentes modalidades para se adaptar à sua rotina e objetivos profissionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-border bg-card hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                {/* Decoration gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative z-10 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <category.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 mt-auto">
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      <span className="text-2xl font-bold text-foreground">{category.count}</span> cursos
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={category.href}>
                        Ver cursos
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Fale Comigo no WhatsApp
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
