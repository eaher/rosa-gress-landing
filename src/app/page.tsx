import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Footer } from "@/components/landing/Footer"
import { CatalogCTA } from "@/components/landing/CatalogCTA"
import { Novedades } from "@/components/landing/Novedades"
import { PoolTypes } from "@/components/landing/PoolTypes" // Step 1
import { StyleGuide } from "@/components/landing/StyleGuide" // Step 2
import { ColorGuide } from "@/components/landing/ColorGuide" // Step 3
import { Personalization } from "@/components/landing/Personalization" // Step 4
import { Inspiration } from "@/components/landing/Inspiration"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <CatalogCTA />
      <div id="novedades">
        <Novedades />
      </div>
      <div id="pooltypes">
        <PoolTypes />
      </div>
      <StyleGuide />
      <div id="colorguide">
        <ColorGuide />
      </div>
      <Personalization />
      <div id="inspiration">
        <Inspiration />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  )
}
