import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Foco no Aluno",
      description: "Cada aluno recebe orientação personalizada para encontrar o curso ideal."
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Acompanho cada etapa da sua jornada educacional até a matrícula."
    },
    {
      icon: Lightbulb,
      title: "Experiência",
      description: "8 anos de conhecimento do mercado educacional e das melhores oportunidades."
    }
  ]

  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-xl relative">
              <Image 
                src="/images/foto-diego.webp"
                alt="Diego Souza - Consultor Educacional Especialista Anhanguera"
                fill
                className="object-cover"
              />
            </div>

            {/* Anhanguera Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="w-20 h-20 rounded-lg overflow-hidden relative">
                <Image 
                  src="/images/logo_anhanguera.webp"
                  alt="Logo Oficial Anhanguera Educacional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre Mim</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Diego Souza, seu consultor educacional de confiança
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Há 8 anos atuo como consultor educacional em parceria com a Anhanguera,
              uma das maiores instituições de ensino superior do Brasil. Minha missão é
              ajudar você a encontrar o curso perfeito para sua carreira, seja presencial,
              semipresencial ou 100% online.
            </p>

            <div className="space-y-4">
              {[
                "Atendimento personalizado e humanizado",
                "Condições especiais de pagamento",
                "Suporte completo até a matrícula",
                "Mais de 100 cursos disponíveis"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
