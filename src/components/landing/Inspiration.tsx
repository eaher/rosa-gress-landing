
export function Inspiration() {
    const pools = [
        { title: "PIETRO WHITE: 7 x 3,5 m", desc: "Un solo color para la terraza, la piscina y el muro. Escaleras sumergidas integradas.", img: "https://images.unsplash.com/photo-1563720760-4497e7ee866b?q=80&w=2070" },
        { title: "SERENA MIX: 2 x 4,65 m", desc: "Una piscina elevada en la terraza, con plataforma y escaleras integradas.", img: "https://images.unsplash.com/photo-1532462372274-9b578c73d93d?q=80&w=2070" },
        { title: "PIETRO WHITE & TRÉSOR JAVA: 6 x 3 m", desc: "El contraste de colores aporta un plus. Banco y escaleras sumergidas integrados.", img: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?q=80&w=2070" },
        { title: "PIETRO GOLDEN & SERENA MIX: 5 x 3 m", desc: "Banco y escaleras integradas. Muro Serena Mix y camino de piezas Pietro Golden.", img: "https://images.unsplash.com/photo-1574625293415-e2a27891723f?q=80&w=2070" },
        { title: "MYTHOS SELENE: 2,5 x 4 m", desc: "Un solo color para la terraza, la piscina y el muro. Escaleras sumergidas integradas.", img: "https://images.unsplash.com/photo-1582239634267-3aed3b83aa63?q=80&w=2070" },
        { title: "MISTERY SAND & TRÉSOR BALI: 2 x 3,4 m", desc: "Funciona muy bien la combinación de 2 colores en un espacio tan reducido.", img: "https://images.unsplash.com/photo-1588656126602-14070a3118cf?q=80&w=2070" },
        { title: "TRÉSOR BALI: 8 x 3,75 m", desc: "Con plataforma y escaleras integradas. La zona Spa con jacuzzi mide 2 x 2 m.", img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070" },
        { title: "PIETRO GOLDEN: 7 x 3,5 m", desc: "Un solo color para la terraza y la piscina. Banco y escaleras sumergidas integrados.", img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070" },
        { title: "ALMA FOREST & SERENA MIX: 5 x 3 m", desc: "Con madera cerámica en el borde y la terraza. Escaleras y muro Serena Mix.", img: "https://images.unsplash.com/photo-1572331165267-854da2b85bee?q=80&w=2070" },
    ]

    return (
        <section className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Ideas para diseñar piscinas pequeñas</h2>
                    <p className="text-gray-600 text-lg">Aquí tienes una selección de las piscinas pequeñas preferidas por nuestros fans. ¡Inspírate!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pools.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="aspect-[4/3] rounded-sm overflow-hidden mb-3 shadow-md">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <h4 className="font-bold text-xs md:text-sm uppercase mb-1">{item.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-snug">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
