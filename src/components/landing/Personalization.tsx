
import { Button } from "@/components/ui/Button"

export function Personalization() {
    const tips = [
        {
            title: "Escaleras y plataformas en el vaso",
            desc: "Para disfrutar al máximo. Refrescarse. Tomar el sol tocando el agua.",
            img: "https://images.unsplash.com/photo-1542661300843-807a2273e8a2?q=80&w=2070"
        },
        {
            title: "Combinar diferentes colores",
            desc: "Crea tu propia combinación de colores para personalizar tu proyecto",
            img: "https://images.unsplash.com/photo-1517826507629-3e32729a9172?q=80&w=2070"
        },
        {
            title: "Construir una zona spa en el vaso",
            desc: "Un detalle especial que transformará tu piscina en un lugar de puro bienestar.",
            img: "https://images.unsplash.com/photo-1563720760-4497e7ee866b?q=80&w=2070"
        },
        {
            title: "Utiliza las medias cañas",
            desc: "Piezas de acabado redondeado para construir las esquinas más seguras.",
            img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070"
        },
        {
            title: "Cerámica imitación madera",
            desc: "Ideal para colocarla en la playa y la terraza. Es confortable, no se estropea.",
            img: "https://images.unsplash.com/photo-1582239634267-3aed3b83aa63?q=80&w=2070"
        },
        {
            title: "Tendencia: piscinas poco profundas",
            desc: "A menor profundidad más seguridad y menor consumo de agua.",
            img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FF006E] mb-4">
                        4. Personaliza tu proyecto con ideas y detalles de diseño
                    </h2>
                    <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base">
                        Estos son nuestros tips para crear un proyecto personal y muy confortable.
                        Todos los ejemplos que te mostramos han sido realizados con éxito. Son pura inspiración
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {tips.map((item, idx) => (
                        <div key={idx} className="bg-transparent text-center">
                            <div className="h-56 overflow-hidden rounded-sm mb-4">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h4 className="text-base font-bold text-black mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-700 leading-relaxed px-4">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm font-bold uppercase mb-4">¿NECESITAS MÁS INFORMACIÓN?</p>
                    <Button className="bg-[#FF006E] text-white font-bold py-3 px-8 uppercase hover:bg-[#d6005c] transition-colors rounded-sm text-sm">
                        ¡CONTACTA CON NOSOTROS!
                    </Button>
                </div>
            </div>
        </section>
    )
}
