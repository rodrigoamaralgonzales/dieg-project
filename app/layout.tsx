import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Geist } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Diego Souza | Consultor Educacional Anhanguera',
  description: 'Consultor educacional com 8 anos de experiência e mais de 8 mil vidas transformadas. Cursos de graduação presenciais, semipresenciais e EAD.',
  keywords: ['Anhanguera', 'Diego Souza', 'Consultor Educacional', 'Graduação', 'EAD', 'Cursos Online'],
  authors: [{ name: 'Diego Souza' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Diego Souza | Consultor Educacional Anhanguera',
    description: 'Transforme seu futuro com a educação certa. Mais de 100 cursos disponíveis.',
    url: 'https://seudominio.com.br',
    siteName: 'Consultoria Diego Souza',
    images: [
      {
        url: '/images/logo_anhanguera.webp',
        width: 1200,
        height: 630,
        alt: 'Diego Souza Consultor Anhanguera',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Souza | Consultor Educacional Anhanguera',
    description: 'Transforme seu futuro com a educação certa. Mais de 100 cursos disponíveis.',
    images: ['/images/logo_anhanguera.webp'],
  },
  alternates: {
    canonical: 'https://seudominio.com.br',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Diego Souza",
    "jobTitle": "Consultor Educacional",
    "affiliation": {
      "@type": "Organization",
      "name": "Anhanguera"
    },
    "url": "https://seudominio.com.br",
    "description": "Consultor educacional com 8 anos de experiência e mais de 8 mil vidas transformadas."
  }

  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning={true}>
      <body className={`${_geist.className} font-sans antialiased`} suppressHydrationWarning={true}>
        <SmoothScroll>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
