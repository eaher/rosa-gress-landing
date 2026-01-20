"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const links = [
        { label: "Inicio", id: "hero" },
        { label: "Productos", id: "products" },
        { label: "Sobre Nosotros", id: "about" },
        { label: "In & Out", id: "inandout" },
        { label: "Galería", id: "inspiration" },
        { label: "Estilo de Piscinas", id: "pooltypes" },
        { label: "Contacto", id: "contact" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
                isScrolled ? "py-2 shadow-sm" : "py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

                {/* Left Logo: Ceracor */}
                <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("hero")}>
                    <Link href="/" className="block">
                        <Image
                            src="/image/logo/logo-cera.png"
                            alt="Ceracor"
                            width={140}
                            height={50}
                            className="h-10 md:h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav - Centered */}
                <nav className="hidden xl:flex items-center justify-center gap-x-1">
                    {links.map((link, index) => (
                        <div key={link.label} className="flex items-center">
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="text-[14px] font-medium text-gray-600 hover:text-[#00B4B0] uppercase tracking-wider transition-colors px-2"
                            >
                                {link.label}
                            </button>
                            {/* No separator pipe based on the image provided, just clean spacing */}
                        </div>
                    ))}
                </nav>

                {/* Right Logo: Rosa Gres / Strufaldi */}
                <div className="hidden xl:block flex-shrink-0">
                    <Image
                        src="/image/logo/logo-rosa.png"
                        alt="Rosa Gres"
                        width={180}
                        height={64}
                        className="h-14 md:h-16 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden p-2 text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg xl:hidden flex flex-col gap-4">
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollToSection(link.id)}
                            className="text-left py-2 text-gray-700 font-bold text-xs uppercase"
                        >
                            {link.label}
                        </button>
                    ))}
                    {/* Show right logo in mobile menu bottom? */}
                    <div className="pt-4 border-t flex justify-center">
                        <Image
                            src="/image/logo/logo-rosa.png"
                            alt="Rosa Gres"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </header>
    )
}
