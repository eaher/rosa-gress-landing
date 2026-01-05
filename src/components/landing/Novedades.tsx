
import { Button } from "@/components/ui/Button"

export function Novedades() {
    const collections = [
        {
            title: "Cuore",
            desc: "La reinvención del estilo rural. Una vuelta a la autenticidad. Romántico, bucólico.",
            img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070"
        },
        {
            title: "Sophy",
            desc: "Tres colores esenciales, los intemporales que no pasan de moda.",
            img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070"
        },
        {
            title: "Coral",
            desc: "Un aire tropical. Se inspira en las texturas oceánicas, las arenas y los fondos marinos.",
            img: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?q=80&w=2070"
        }
    ]

    return (
        <section className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <h3 className="text-[#FF006E] font-bold text-xl mb-2 uppercase tracking-wide">NOVEDADES 2025</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-black">
                        3 Nuevas Colecciones y 8 Nuevos Colores
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((col, idx) => (
                        <div key={idx} className="bg-transparent flex flex-col">
                            <div className="overflow-hidden mb-6 h-64">
                                <img src={col.img} alt={col.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{col.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                {col.desc}
                            </p>
                            <Button className="bg-white border-none text-black font-bold uppercase py-2 px-0 text-left justify-start hover:bg-transparent hover:underline self-start shadow-none">
                                DESCARGAR CATÁLOGO
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Quick Button variant hack if not existing in base UI, assume Button accepts className overrides.
// Actually I just used className overrides.
