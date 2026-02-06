import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Footer } from "@/components/landing/Footer"
import { Products } from "@/components/landing/Products"

import { AboutUs } from "@/components/landing/AboutUs"
import { InAndOut } from "@/components/landing/InAndOut"

import { Contact } from "@/components/landing/Contact"

import { PoolTypes } from "@/components/landing/PoolTypes"
import { IntroText } from "@/components/landing/IntroText"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* 1. Inicio */}
      <div id="hero">
        <Hero />
        {/* Note: Hero includes LeadForm internally */}
      </div>

      <IntroText />

      {/* 2. Productos */}
      <div id="products">
        <Products />
      </div>



      {/* 3. Sobre Nosotros */}
      <div id="about">
        <AboutUs />
      </div>

      <div id="in-out" className="scroll-mt-24">
        <InAndOut />
      </div>

      {/* 4. Estilo de Piscinas (Replaces In & Out) */}
      <div id="pool-design">
        <PoolTypes />
      </div>

      {/* 7. Contacto */}
      <div id="contact">
        <Contact />
      </div>

      {/* 8. Footer */}
      <Footer />
    </main>
  )
}
