# Análise e Aprendizado do Projeto: Landing Page Comercial - Diego Souza

Este documento resume a estrutura, tecnologias e funcionalidades do projeto da landing page para o consultor educacional Diego Souza, parceiro da Anhanguera.

## 🚀 Tecnologias Utilizadas
- **Framework**: Next.js 16.2.4 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4.2.0 (configurado via CSS variables e OKLCH)
- **UI Components**: Radix UI (via shadcn/ui)
- **Ícones**: Lucide React
- **Animações**: `tw-animate-css` (Tailwind plugin)
- **Formulários/Validação**: React Hook Form + Zod
- **Gráficos**: Recharts (preparado no package.json, mas não amplamente usado nas páginas principais)

## 📂 Estrutura do Projeto
- `app/`: Contém as rotas principais.
  - `page.tsx`: Landing page principal.
  - `cursos/page.tsx`: Catálogo detalhado de cursos.
  - `layout.tsx`: Layout raiz com o `ThemeProvider` e fontes Geist.
- `components/`: Componentes modulares.
  - `header.tsx`, `footer.tsx`: Navegação e rodapé.
  - `hero.tsx`: Seção de destaque com CTA para WhatsApp.
  - `about.tsx`: Informações sobre o consultor Diego Souza.
  - `course-categories.tsx`: Resumo das modalidades (Presencial, Semipresencial, EAD).
  - `ui/`: Componentes base (Botões, Cards, Badges, etc.) derivados do shadcn/ui.
- `styles/`: Arquivos CSS globais.
- `public/`: Assets estáticos (imagens como logo da Anhanguera e fotos).

## 🎯 Objetivo do Negócio
O site funciona como um funil de vendas e captura para o consultor **Diego Souza**. 
- **Público-alvo**: Estudantes em potencial buscando graduação.
- **Diferencial**: Atendimento personalizado de um consultor com 8 anos de experiência e mais de 8.000 alunos atendidos.
- **Conversão Principal**: Botão de WhatsApp direcionando para uma mensagem pré-definida.

## 📖 Aprendizados sobre o Código

### 🎨 Sistema de Design
- Utiliza o novo padrão do Tailwind v4 com `@import 'tailwindcss'`.
- Paleta de cores baseada em `oklch` para gradientes mais suaves e precisão de cor.
- Tema escuro (dark mode) suportado via `next-themes`.

### 🛠️ Gestão de Dados
- O catálogo de cursos em `app/cursos/page.tsx` é estático e categorizado em três listas: `cursosPresenciais`, `cursosSemipresenciais` e `cursosEAD`.
- Cada curso possui um nome, tipo (Bacharelado, Licenciatura, Tecnólogo) e uma breve descrição comercial.

### 📱 Experiência do Usuário (UX)
- **Sticky Header**: Navegação fixa para fácil acesso.
- **Responsividade**: Grid layouts que se adaptam de 1 a 3 colunas dependendo do dispositivo.
- **Feedback Visual**: Hover effects em cards e botões com sombras dinâmicas.

## 🔗 Links e Contatos Importantes
- **WhatsApp**: `https://wa.me/5515988168948`
- **Mensagem Padrão**: "Olá Diego! Gostaria de saber mais sobre os cursos da Anhanguera."
