import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Laptop, Monitor, GraduationCap, Clock, MapPin, ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const WHATSAPP_LINK = "https://wa.me/5515988168948?text=Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera."

const cursosPresenciais = [
  { nome: "Administração", tipo: "B", descricao: "Forme-se para liderar negócios e tomar decisões estratégicas em qualquer setor do mercado." },
  { nome: "Biomedicina", tipo: "B", descricao: "Atue em laboratórios, pesquisas e diagnósticos que salvam vidas todos os dias." },
  { nome: "Análise e Desenvolvimento de Sistemas", tipo: "T", descricao: "Desenvolva softwares e aplicativos que transformam empresas e a vida das pessoas." },
  { nome: "Gestão de Recursos Humanos", tipo: "T", descricao: "Seja o profissional que valoriza pessoas e constrói equipes de alta performance." },
  { nome: "Logística", tipo: "T", descricao: "Gerencie cadeias de suprimentos e otimize processos que movem o mundo." },
  { nome: "Direito", tipo: "B", descricao: "Defenda a justiça e construa uma carreira sólida em uma das profissões mais respeitadas." },
  { nome: "Educação Física Bacharelado", tipo: "B", descricao: "Promova saúde e qualidade de vida através do movimento e do esporte." },
  { nome: "Enfermagem", tipo: "B", descricao: "Cuide de vidas com dedicação e seja essencial na saúde de milhares de pessoas." },
  { nome: "Engenharia Civil", tipo: "B", descricao: "Projete e construa a infraestrutura que conecta e desenvolve cidades." },
  { nome: "Engenharia Controle e Automação", tipo: "B", descricao: "Automatize processos industriais e lidere a revolução tecnológica nas fábricas." },
  { nome: "Engenharia da Computação", tipo: "B", descricao: "Crie hardware e software que impulsionam a inovação tecnológica mundial." },
  { nome: "Engenharia de Produção", tipo: "B", descricao: "Otimize processos e aumente a eficiência de empresas em qualquer segmento." },
  { nome: "Engenharia Elétrica", tipo: "B", descricao: "Projete sistemas elétricos que energizam casas, indústrias e cidades inteiras." },
  { nome: "Engenharia Mecânica", tipo: "B", descricao: "Desenvolva máquinas e equipamentos que movem a indústria brasileira." },
  { nome: "Farmácia", tipo: "B", descricao: "Trabalhe com medicamentos e contribua diretamente para a saúde da população." },
  { nome: "Fisioterapia", tipo: "B", descricao: "Recupere movimentos e devolva qualidade de vida a quem mais precisa." },
  { nome: "Fonoaudiologia", tipo: "B", descricao: "Cuide da comunicação humana e transforme vidas através da fala e audição." },
  { nome: "Medicina Veterinária", tipo: "B", descricao: "Proteja a saúde animal e atue em uma profissão movida por amor e ciência." },
  { nome: "Nutrição", tipo: "B", descricao: "Promova alimentação saudável e seja referência em qualidade de vida." },
  { nome: "Odontologia", tipo: "B", descricao: "Cuide de sorrisos e da saúde bucal com uma carreira valorizada e gratificante." },
  { nome: "Pedagogia", tipo: "L", descricao: "Forme cidadãos e transforme o futuro através da educação de qualidade." },
  { nome: "Psicologia", tipo: "B", descricao: "Compreenda a mente humana e ajude pessoas a viverem de forma mais plena." },
  { nome: "Terapia Ocupacional", tipo: "B", descricao: "Reabilite pessoas e promova autonomia através de atividades terapêuticas." },
]

const cursosSemipresenciais = [
  { nome: "Agronomia", tipo: "B", descricao: "Inove no campo e lidere a produção agrícola sustentável do Brasil." },
  { nome: "Arquitetura e Urbanismo", tipo: "B", descricao: "Projete espaços que inspiram e transformam a vida das pessoas." },
  { nome: "Biomedicina", tipo: "B", descricao: "Atue em laboratórios, pesquisas e diagnósticos que salvam vidas todos os dias." },
  { nome: "Educação Física Bacharelado", tipo: "B", descricao: "Promova saúde e qualidade de vida através do movimento e do esporte." },
  { nome: "Engenharia Civil", tipo: "B", descricao: "Projete e construa a infraestrutura que conecta e desenvolve cidades." },
  { nome: "Engenharia da Computação", tipo: "B", descricao: "Crie hardware e software que impulsionam a inovação tecnológica mundial." },
  { nome: "Engenharia de Controle e Automação", tipo: "B", descricao: "Automatize processos industriais e lidere a revolução tecnológica nas fábricas." },
  { nome: "Engenharia de Produção", tipo: "B", descricao: "Otimize processos e aumente a eficiência de empresas em qualquer segmento." },
  { nome: "Engenharia Elétrica", tipo: "B", descricao: "Projete sistemas elétricos que energizam casas, indústrias e cidades inteiras." },
  { nome: "Engenharia Mecânica", tipo: "B", descricao: "Desenvolva máquinas e equipamentos que movem a indústria brasileira." },
  { nome: "Estética e Cosmética", tipo: "B", descricao: "Eleve a autoestima das pessoas com tratamentos de beleza e bem-estar." },
  { nome: "Farmácia", tipo: "B", descricao: "Trabalhe com medicamentos e contribua diretamente para a saúde da população." },
  { nome: "Fisioterapia", tipo: "B", descricao: "Recupere movimentos e devolva qualidade de vida a quem mais precisa." },
  { nome: "Fonoaudiologia", tipo: "B", descricao: "Cuide da comunicação humana e transforme vidas através da fala e audição." },
  { nome: "Nutrição", tipo: "B", descricao: "Promova alimentação saudável e seja referência em qualidade de vida." },
  { nome: "Terapia Ocupacional", tipo: "B", descricao: "Reabilite pessoas e promova autonomia através de atividades terapêuticas." },
]

const cursosEAD = [
  { nome: "Administração", tipo: "B", descricao: "Forme-se para liderar negócios e tomar decisões estratégicas em qualquer setor do mercado." },
  { nome: "Administração Pública", tipo: "B", descricao: "Gerencie órgãos públicos e contribua para uma sociedade mais eficiente e justa." },
  { nome: "Agronegócios", tipo: "T", descricao: "Lidere o setor que alimenta o Brasil e impulsiona a economia nacional." },
  { nome: "Análise e Desenvolvimento de Sistemas", tipo: "T", descricao: "Desenvolva softwares e aplicativos que transformam empresas e a vida das pessoas." },
  { nome: "Artes Visuais", tipo: "B", descricao: "Expresse sua criatividade e construa uma carreira na produção artística." },
  { nome: "Artes Visuais", tipo: "L", descricao: "Ensine arte e inspire novas gerações a expressarem sua criatividade." },
  { nome: "Cibersegurança", tipo: "T", descricao: "Proteja dados e sistemas contra ameaças digitais em um mercado em alta demanda." },
  { nome: "Ciência da Computação", tipo: "B", descricao: "Domine algoritmos e tecnologias que moldam o futuro digital do mundo." },
  { nome: "Ciência e Tecnologia", tipo: "T", descricao: "Explore a interseção entre ciência e inovação tecnológica moderna." },
  { nome: "Ciência de Dados", tipo: "T", descricao: "Transforme dados em insights valiosos para decisões estratégicas de negócios." },
  { nome: "Ciência Política", tipo: "B", descricao: "Compreenda sistemas políticos e contribua para o desenvolvimento da democracia." },
  { nome: "Ciências Contábeis", tipo: "B", descricao: "Gerencie finanças e seja essencial para o sucesso de qualquer empresa." },
  { nome: "Ciências Econômicas", tipo: "B", descricao: "Analise mercados e desenvolva estratégias econômicas de impacto." },
  { nome: "Coaching e Desenvolvimento Humano", tipo: "T", descricao: "Desenvolva pessoas e equipes para alcançarem seu máximo potencial." },
  { nome: "Comércio Exterior", tipo: "T", descricao: "Conecte o Brasil ao mundo através de negociações internacionais estratégicas." },
  { nome: "Criminologia", tipo: "B", descricao: "Estude o crime e contribua para um sistema de justiça mais eficiente." },
  { nome: "Desenvolvimento Back-End", tipo: "T", descricao: "Construa a infraestrutura que sustenta aplicações web e mobile modernas." },
  { nome: "Design de Interiores", tipo: "T", descricao: "Crie ambientes que inspiram e transformam a forma como as pessoas vivem." },
  { nome: "Design Gráfico", tipo: "T", descricao: "Comunique ideias através de visuais impactantes e criativos." },
  { nome: "DevOps", tipo: "T", descricao: "Acelere entregas de software integrando desenvolvimento e operações." },
  { nome: "Educação Física Licenciatura", tipo: "L", descricao: "Ensine movimento e esporte, formando cidadãos mais saudáveis." },
  { nome: "Empreendedorismo", tipo: "T", descricao: "Transforme ideias em negócios de sucesso com estratégias comprovadas." },
  { nome: "Empreendedorismo Novos Negócios", tipo: "T", descricao: "Inove e crie startups que revolucionam mercados tradicionais." },
  { nome: "Engenharia de Software", tipo: "B", descricao: "Projete sistemas robustos que resolvem problemas complexos do mundo real." },
  { nome: "Fotografia", tipo: "T", descricao: "Capture momentos e conte histórias através de imagens profissionais." },
  { nome: "Gastronomia", tipo: "T", descricao: "Domine técnicas culinárias e crie experiências gastronômicas memoráveis." },
  { nome: "Gestão da Qualidade", tipo: "T", descricao: "Implemente padrões de excelência que elevam empresas ao próximo nível." },
  { nome: "Gestão Ambiental", tipo: "T", descricao: "Lidere iniciativas sustentáveis que protegem o planeta para futuras gerações." },
  { nome: "Gestão Comercial", tipo: "T", descricao: "Impulsione vendas e construa relacionamentos duradouros com clientes." },
  { nome: "Gestão da Produção Industrial", tipo: "T", descricao: "Otimize processos fabris e aumente a competitividade industrial." },
  { nome: "Gestão da Tecnologia da Informação", tipo: "T", descricao: "Lidere equipes de TI e implemente soluções tecnológicas estratégicas." },
  { nome: "Gestão de Produto", tipo: "T", descricao: "Desenvolva produtos que os clientes amam e que geram resultados." },
  { nome: "Gestão de Recursos Humanos", tipo: "T", descricao: "Seja o profissional que valoriza pessoas e constrói equipes de alta performance." },
  { nome: "Gestão de Segurança Privada", tipo: "T", descricao: "Proteja pessoas e patrimônios com estratégias profissionais de segurança." },
  { nome: "Gestão Financeira", tipo: "T", descricao: "Administre recursos e tome decisões que multiplicam resultados financeiros." },
  { nome: "Gestão Hospitalar", tipo: "T", descricao: "Gerencie instituições de saúde com eficiência e humanização." },
  { nome: "Gestão Pública", tipo: "T", descricao: "Transforme a administração pública com gestão moderna e transparente." },
  { nome: "Geografia", tipo: "L", descricao: "Ensine sobre o mundo e forme cidadãos conscientes do espaço que habitam." },
  { nome: "História", tipo: "L", descricao: "Preserve e transmita o conhecimento que conecta passado, presente e futuro." },
  { nome: "Investigação e Perícia Criminal", tipo: "T", descricao: "Desvende crimes e contribua para a justiça com técnicas científicas." },
  { nome: "Jornalismo", tipo: "B", descricao: "Conte histórias que informam e transformam a sociedade." },
  { nome: "Letras – Português", tipo: "L", descricao: "Domine a língua portuguesa e inspire o amor pela literatura e escrita." },
  { nome: "Letras Português-Inglês", tipo: "L", descricao: "Ensine idiomas e conecte pessoas através da comunicação global." },
  { nome: "Logística", tipo: "T", descricao: "Gerencie cadeias de suprimentos e otimize processos que movem o mundo." },
  { nome: "Marketing", tipo: "T", descricao: "Crie estratégias que conectam marcas aos seus públicos de forma memorável." },
  { nome: "Marketing Digital", tipo: "T", descricao: "Domine as ferramentas digitais que impulsionam negócios na era online." },
  { nome: "Matemática", tipo: "L", descricao: "Ensine a linguagem universal que resolve problemas e desenvolve o raciocínio." },
  { nome: "Negócios Imobiliários", tipo: "T", descricao: "Conecte pessoas aos seus sonhos através de transações imobiliárias." },
  { nome: "Pedagogia", tipo: "L", descricao: "Forme cidadãos e transforme o futuro através da educação de qualidade." },
  { nome: "Podologia", tipo: "T", descricao: "Cuide da saúde dos pés e promova bem-estar e qualidade de vida." },
  { nome: "Processos Gerenciais", tipo: "T", descricao: "Gerencie operações e processos que fazem empresas funcionarem com excelência." },
  { nome: "Publicidade e Propaganda", tipo: "B", descricao: "Crie campanhas que marcam gerações e impulsionam marcas." },
  { nome: "Publicidade e Propaganda e Marketing", tipo: "B", descricao: "Una criatividade e estratégia para construir marcas de sucesso." },
  { nome: "Psicopedagogia", tipo: "B", descricao: "Ajude pessoas a superarem dificuldades de aprendizagem e alcançarem seu potencial." },
  { nome: "Química", tipo: "B", descricao: "Descubra as propriedades da matéria e suas aplicações na indústria e pesquisa." },
  { nome: "Radiologia", tipo: "T", descricao: "Realize exames de imagem essenciais para diagnósticos médicos precisos." },
  { nome: "Redes de Computadores", tipo: "T", descricao: "Conecte o mundo construindo e mantendo infraestruturas de rede robustas." },
  { nome: "Relações Internacionais", tipo: "T", descricao: "Navegue a política global e construa pontes entre nações e culturas." },
  { nome: "Secretariado", tipo: "T", descricao: "Seja essencial na gestão executiva com organização e profissionalismo." },
  { nome: "Segurança da Informação", tipo: "T", descricao: "Proteja dados sensíveis e mantenha sistemas seguros contra ameaças." },
  { nome: "Segurança no Trabalho", tipo: "T", descricao: "Preserve vidas implementando práticas seguras no ambiente de trabalho." },
  { nome: "Serviço Social", tipo: "B", descricao: "Promova justiça social e transforme realidades de comunidades vulneráveis." },
  { nome: "Serviços Jurídicos Cartorários e Notariais", tipo: "T", descricao: "Atue em cartórios garantindo segurança jurídica a documentos oficiais." },
  { nome: "Sistemas de Informação", tipo: "T", descricao: "Desenvolva sistemas que organizam e potencializam informações empresariais." },
  { nome: "Sistemas para Internet", tipo: "T", descricao: "Crie aplicações web que milhões de pessoas usam todos os dias." },
  { nome: "Teologia", tipo: "B", descricao: "Estude questões espirituais e contribua para comunidades de fé." },
  { nome: "Terapias Integrativas e Complementares", tipo: "T", descricao: "Promova saúde holística com práticas terapêuticas alternativas reconhecidas." },
]

function getTipoBadge(tipo: string) {
  switch (tipo) {
    case "B":
      return <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Bacharelado</Badge>
    case "L":
      return <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">Licenciatura</Badge>
    case "T":
      return <Badge variant="outline">Tecnólogo</Badge>
    default:
      return null
  }
}

interface CourseCardProps {
  nome: string
  tipo: string
  descricao: string
}

function CourseCard({ nome, tipo, descricao }: CourseCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 border-border/50 bg-card/50 backdrop-blur-sm md:hover:border-primary/40 md:hover:-translate-y-1">
      {/* Accent Bar - Desktop Only */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/5 opacity-0 md:group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="p-5 md:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center md:group-hover:bg-primary md:group-hover:rotate-6 transition-all duration-300 shrink-0">
                <GraduationCap className="h-5 w-5 md:h-6 md:h-6 text-primary md:group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-foreground leading-tight md:group-hover:text-primary transition-colors">{nome}</h3>
            </div>
            <div className="shrink-0 pl-13 sm:pl-0">
              {getTipoBadge(tipo)}
            </div>
          </div>
          
          <div className="relative">
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
              {descricao}
            </p>
          </div>

          <div className="pt-2 flex items-center text-xs font-semibold text-primary md:opacity-0 md:group-hover:opacity-100 transition-all md:translate-x-[-10px] md:group-hover:translate-x-0">
            <span>Ver detalhes do curso</span>
            <ChevronRight className="h-3 w-3 ml-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface CourseSectionProps {
  id: string
  icon: React.ElementType
  title: string
  description: string
  courses: { nome: string; tipo: string; descricao: string }[]
  features: { icon: React.ElementType; text: string }[]
}

function CourseSection({ id, icon: Icon, title, description, courses, features }: CourseSectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <feature.icon className="h-4 w-4 text-primary" />
            {feature.text}
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((curso, index) => (
          <CourseCard key={index} nome={curso.nome} tipo={curso.tipo} descricao={curso.descricao} />
        ))}
      </div>
    </section>
  )
}

export default function CursosPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-8 hover:bg-primary/10 hover:text-primary -ml-2">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o Início
            </Link>
          </Button>
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Catálogo Completo</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 text-balance">
              Mais de 100 cursos para transformar sua carreira
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Encontre o curso ideal para você entre as modalidades presencial, semipresencial e EAD.
              Todos os cursos são reconhecidos pelo MEC e oferecem diploma válido em todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="outline" asChild>
                <a href="#presencial">Presenciais</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#semipresencial">Semipresenciais</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#ead">EAD Online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Sections */}
      <div className="container mx-auto px-4 pb-24">
        <CourseSection
          id="presencial"
          icon={Building2}
          title="Cursos Presenciais"
          description="Aulas em sala de aula com professores e colegas"
          courses={cursosPresenciais}
          features={[
            { icon: Clock, text: "Aulas de segunda a sexta" },
            { icon: MapPin, text: "Polos em todo o Brasil" },
          ]}
        />

        <div className="border-t border-border" />

        <CourseSection
          id="semipresencial"
          icon={Laptop}
          title="Cursos Semipresenciais (Híbrido Lab)"
          description="Flexibilidade online com práticas em laboratório"
          courses={cursosSemipresenciais}
          features={[
            { icon: Clock, text: "Aulas online + práticas presenciais" },
            { icon: MapPin, text: "Laboratórios modernos" },
          ]}
        />

        <div className="border-t border-border" />

        <CourseSection
          id="ead"
          icon={Monitor}
          title="Cursos EAD 100% Online & Semipresenciais"
          description="Estude onde e quando quiser com total flexibilidade"
          courses={cursosEAD}
          features={[
            { icon: Clock, text: "100% online" },
            { icon: MapPin, text: "Estude de qualquer lugar" },
          ]}
        />

        {/* CTA Section */}
        <section className="mt-24 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Ficou interessado em algum curso?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Entre em contato comigo para saber mais sobre valores, formas de pagamento,
            bolsas de estudo e condições especiais.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Fale Comigo no WhatsApp
            </Link>
          </Button>
        </section>
      </div>

      <Footer />
    </main>
  )
}
