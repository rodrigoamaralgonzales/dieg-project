"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CourseCategories } from "@/components/course-categories"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setShowContent(true)} />
      <main className={showContent ? "opacity-100" : "opacity-0 transition-opacity duration-500"}>
        <Header show={showContent} />
        <Hero show={showContent} />
        <About />
        <CourseCategories />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
