import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "5515988168948"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera.`

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Contato</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Vamos conversar sobre seu futuro?
              </h2>
              <p className="text-muted-foreground mt-4 leading-snug">
                Entre em contato comigo para tirar suas dúvidas sobre cursos, valores,
                formas de pagamento e muito mais. Estou aqui para ajudar você a dar o
                próximo passo na sua carreira.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefone / WhatsApp</h3>
                  <p className="text-muted-foreground">(15) 98816-8948</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">diegotsouza1988@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Atendimento em todo o Brasil</p>
                </div>
              </div>
            </div>

            <Button className="gap-2" size="lg" asChild>
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </Link>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Envie sua mensagem</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome completo
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(XX) XXXXX-XXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-foreground">
                  Curso de interesse
                </label>
                <Input id="interest" placeholder="Ex: Administração, Enfermagem..." />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte um pouco sobre seus objetivos..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
