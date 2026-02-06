import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Products() {
    const products = [
        {
            id: 1,
            name: "Piscinas Residenciales",
            image: "https://images.unsplash.com/photo-1572331165267-854da2dc72af?q=80&w=2074&auto=format&fit=crop",
            description: "Diseños exclusivos para tu hogar."
        },
        {
            id: 2,
            name: "Piscinas Comerciales",
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
            description: "Soluciones duraderas para hoteles y complejos."
        },
        {
            id: 3,
            name: "Accesorios y Equipamiento",
            image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=2070&auto=format&fit=crop",
            description: "Todo lo necesario para mantener tu piscina perfecta."
        },
        {
            id: 4,
            name: "Sistemas de Coronación",
            image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop",
            description: "Bordes seguros y elegantes para todo tipo de piscinas."
        },
        {
            id: 5,
            name: "Rejillas Cerámicas",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
            description: "Innovación en drenaje con integración estética total."
        },
        {
            id: 6,
            name: "Pavimentos Exteriores",
            image: "https://images.unsplash.com/photo-1596178065849-d650280f3078?q=80&w=2070&auto=format&fit=crop",
            description: "Suelos antideslizantes para terrazas y jardines."
        }
    ]

    return (
        <section className="py-12 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Nuestros Productos</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative h-[280px] overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-light mb-2 group-hover:text-[#00B4B0] transition-colors">
                                {product.name}
                            </h3>

                            <div className="flex items-center text-[#00B4B0] group-hover:translate-x-2 transition-transform duration-300">
                                <span className="uppercase tracking-widest text-sm font-semibold mr-2">Ver más</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
