
import { Button } from "@/components/ui/Button"

export function PoolTypes() {
    const types = [
        {
            title: "Tradicional",
            image: "https://images.unsplash.com/photo-1572331165267-854da2b85bee?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Desbordante",
            image: "https://images.unsplash.com/photo-1542661300843-807a2273e8a2?q=80&w=2187&auto=format&fit=crop",
        },
        {
            title: "Infinity",
            image: "https://images.unsplash.com/photo-1517826507629-3e32729a9172?q=80&w=2069&auto=format&fit=crop",
        }
    ]

    return (
        <section className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">

                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF006E] mb-8">
                        1. Decide qué tipo de piscina
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {types.map((type, index) => (
                        <div key={index} className="group text-center">
                            <h4 className="text-xl font-bold text-black mb-4">{type.title}</h4>
                            <div className="relative h-64 overflow-hidden shadow-lg rounded-sm mb-4">
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm font-bold uppercase mb-4">¿QUIERES SABER MÁS?</p>
                    <Button className="bg-[#FF006E] text-white font-bold py-3 px-8 uppercase hover:bg-[#d6005c] transition-colors rounded-sm text-sm">
                        DESCARGAR CATÁLOGO UNIQUE POOLS
                    </Button>
                </div>
            </div>
        </section>
    )
}
