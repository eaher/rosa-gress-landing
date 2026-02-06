
import { Button } from "@/components/ui/Button"

export function PoolTypes() {
    const types = [
        {
            title: "Tradicional",
            image: "/image/pool/rosa-gres-tipo-piscina-tradicional.webp",
        },
        {
            title: "Desbordante",
            image: "/image/pool/rosa-gres-tipo-piscina-desbordante.webp",
        },
        {
            title: "Infinity",
            image: "/image/pool/rosa-gres-tipo-piscina-infinity.webp",
        }
    ]

    const waterColors = [
        {
            title: "Colores claros",
            description: "Para conseguir brillar con la máxima transparencia del agua.",
            image: "/image/coloresagua/rosa-gres-1-color-colores-claros.webp",
        },
        {
            title: "Grises",
            description: "Evocan los colores del océano y encajan en todo tipo de proyectos.",
            image: "/image/coloresagua/rosa-gres-5-color-grises.webp",
        },
        {
            title: "Colores oscuros",
            description: "Aportan profundidad, intensidad y una atractiva sobriedad de estilo.",
            image: "/image/coloresagua/rosa-gres-6-color-colores-oscuros.webp",
        }
    ]

    return (
        <>
            {/* Step 1: Decide qué tipo de piscina */}
            <section className="py-20 bg-[#F5F5F5]">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Main Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                            Cómo diseñar tu piscina paso a paso
                        </h2>
                        <div className="w-24 h-1 bg-[#FF006E] mx-auto mb-12"></div>
                    </div>

                    <div className="mb-8">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#FF006E]">
                                Decide qué tipo de piscina
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {types.map((type, index) => (
                                <div key={index} className="group text-center">
                                    <h4 className="text-lg font-bold text-black mb-6">{type.title}</h4>
                                    <div className="relative h-64 overflow-hidden shadow-lg rounded-none mb-4">
                                        <img
                                            src={type.image}
                                            alt={type.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2: Elige TU color del agua */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#FF006E]">
                                Elige TU color del agua
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {waterColors.map((color, index) => (
                                <div key={index} className="group text-center">
                                    <h4 className="text-lg font-bold text-black mb-6">{color.title}</h4>
                                    <div className="relative h-64 overflow-hidden shadow-lg rounded-none mb-6">
                                        <img
                                            src={color.image}
                                            alt={color.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-sm max-w-[280px] mx-auto leading-relaxed">
                                        {color.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="text-center pt-8">
                        <p className="text-sm font-bold uppercase mb-4">¿QUIERES SABER MÁS?</p>
                        <Button className="bg-[#FF006E] text-white font-bold py-3 px-8 uppercase hover:bg-[#d6005c] transition-colors rounded-none text-sm">
                            DESCARGAR CATÁLOGO UNIQUE POOLS
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
