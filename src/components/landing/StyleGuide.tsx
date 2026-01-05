
import { ChevronRight } from "lucide-react"

export function StyleGuide() {
    const thumbs = [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=300",
        "https://images.unsplash.com/photo-1572331165267-854da2b85bee?q=80&w=300",
        "https://images.unsplash.com/photo-1432462770865-65b70566d679?q=80&w=300",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=300",
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=300",
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=300",
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FF006E] mb-4">
                        2. Define tu estilo. Descubre nuestros colores
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base">
                        ¿Qué estilo deseas para tu piscina? Clásico, cosmopolita, ibicenco, provenzal, zen, urbano, chic, bohemio. No hay límites. Explora nuestras colecciones para inspirarte.
                    </p>
                </div>

                {/* Big Main Image Area */}
                <div className="relative h-[400px] md:h-[600px] mb-8 overflow-hidden rounded-sm">
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070"
                        alt="Iconic Collection Main"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Thumbnails Row */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">Iconic collection</h3>
                    <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {thumbs.map((src, idx) => (
                            <div key={idx} className="w-24 h-16 md:w-32 md:h-20 shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                <img src={src} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                            </div>
                        ))}
                        <ChevronRight className="w-8 h-8 text-gray-400" />
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm font-bold uppercase mb-4">¿QUIERES SABER MÁS?</p>
                    <button className="bg-[#FF006E] text-white font-bold py-3 px-8 uppercase hover:bg-[#d6005c] transition-colors rounded-sm text-sm">
                        DESCARGAR CATÁLOGO UNIQUE POOLS
                    </button>
                </div>
            </div>
        </section>
    )
}
