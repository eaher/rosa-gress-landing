import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Footer } from "@/components/landing/Footer"
import { Products } from "@/components/landing/Products"
import { CatalogDownload } from "@/components/landing/CatalogDownload"
import { AboutUs } from "@/components/landing/AboutUs"
import { InAndOut } from "@/components/landing/InAndOut"
import { Contact } from "@/components/landing/Contact"
import { Inspiration } from "@/components/landing/Inspiration"
import { PoolTypes } from "@/components/landing/PoolTypes"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* 1. Inicio */}
      <div id="hero">
        <Hero />
        {/* Note: Hero includes LeadForm internally */}
      </div>

      {/* 2. Productos */}
      <div id="products">
        <Products />
      </div>

      <CatalogDownload />

      {/* 3. Sobre Nosotros */}
      <div id="about">
        <AboutUs />
      </div>

      {/* 4. In and Out */}
      <div id="inandout">
        <InAndOut />
      </div>

      {/* 5. Galería de fotos Inspiración */}
      <div id="inspiration">
        <Inspiration />
      </div>

      {/* 6. Estilo de Piscinas */}
      <div id="pooltypes">
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
