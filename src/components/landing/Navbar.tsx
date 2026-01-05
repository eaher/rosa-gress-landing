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
        { label: "PISCINAS PEQUEÑAS", id: "inspiration" },
        { label: "LOS COLORES DEL AGUA", id: "colorguide" },
        { label: "CÓMO DISEÑAR TU PISCINA PASO A PASO", id: "pooltypes" },
        { label: "NOVEDADES", id: "novedades" },
        { label: "CONTACTA", id: "contact" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
                isScrolled ? "py-2 shadow-none" : "py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-12 flex items-center justify-between xl:justify-center xl:gap-x-16">
                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
                    <Link href="/" className="block">
                        <Image
                            src="/image/logo/logo.png"
                            alt="Logo de la Empresa"
                            width={150}
                            height={60}
                            className="h-15 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center">
                    {links.map((link, index) => (
                        <div key={link.label} className="flex items-center">
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="text-[17px] font-bold text-gray-800 hover:text-[#00B4B0] uppercase tracking-wide transition-colors"
                            >
                                {link.label}
                            </button>
                            {/* Separator Pipe for all except last */}
                            {index < links.length - 1 && (
                                <span className="mx-2 text-gray-800 font-bold text-[11px]">|</span>
                            )}
                        </div>
                    ))}
                </nav>

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
                </div>
            )}
        </header>
    )
}
