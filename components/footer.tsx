import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="font-semibold text-xl">Diego Souza</span>
            </div>
            <p className="text-background/70 max-w-md">
              Consultor educacional da Anhanguera com 8 anos de experiência
              transformando vidas através da educação. Mais de 8 mil alunos
              atendidos com sucesso.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-background/70 hover:text-background transition-colors">
                Início
              </Link>
              <Link href="/#sobre" className="text-background/70 hover:text-background transition-colors">
                Sobre
              </Link>
              <Link href="/cursos" className="text-background/70 hover:text-background transition-colors">
                Cursos
              </Link>
              <Link href="/#contato" className="text-background/70 hover:text-background transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Modalities */}
          <div className="space-y-4">
            <h3 className="font-semibold">Modalidades</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/cursos#presencial" className="text-background/70 hover:text-background transition-colors">
                Presencial
              </Link>
              <Link href="/cursos#semipresencial" className="text-background/70 hover:text-background transition-colors">
                Semipresencial
              </Link>
              <Link href="/cursos#ead" className="text-background/70 hover:text-background transition-colors">
                EAD 100% Online
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            &copy; {new Date().getFullYear()} Diego Souza. Todos os direitos reservados.
          </p>
          <p className="text-background/70 text-sm">
            Parceiro oficial Anhanguera Educacional
          </p>
        </div>
      </div>
    </footer>
  )
}
