
export function ColorGuide() {
    const colors = [
        {
            title: "Colores claros",
            desc: "Para conseguir brillar con la máxima transparencia del agua.",
            img: "https://images.unsplash.com/photo-1542661300843-807a2273e8a2?q=80&w=2070"
        },
        {
            title: "Tonos Ocre y Arena",
            desc: "Perfectos para crear ambientes con un aire delicioso y mediterráneo.",
            img: "https://images.unsplash.com/photo-1574625293415-e2a27891723f?q=80&w=2070"
        },
        {
            title: "Colores exóticos",
            desc: "Colores extraordinarios para crear aguas turquesas y muy especiales.",
            img: "https://images.unsplash.com/photo-1563720760-4497e7ee866b?q=80&w=2070"
        },
        {
            title: "Texturas especiales",
            desc: "Serena Mix: todas las piezas son diferentes, espectacular en el vaso.",
            img: "https://images.unsplash.com/photo-1582239634267-3aed3b83aa63?q=80&w=2070"
        },
        {
            title: "Grises",
            desc: "Evocan los colores del océano y encajan en todo tipo de proyectos.",
            img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070"
        },
        {
            title: "Colores oscuros",
            desc: "Aportan profundidad, intensidad y una atractiva sobriedad de estilo.",
            img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070"
        }
    ]

    return (
        <section className="py-20 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FF006E] mb-2">
                        3. Elige TU color del agua
                    </h2>
                    <h3 className="text-xl md:text-2xl font-light text-black uppercase mb-6 tracking-wide">
                        GUÍA DE LOS COLORES DEL AGUA
                    </h3>
                    <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-sm md:text-base mb-8">
                        El color del agua depende de muchos factores, como la luz, el entorno y el paisaje, entre otros.
                        Uno de los más importantes es el color de la cerámica que elijas para colocar en el vaso de la
                        <span className="font-bold"> piscina</span>. Explora nuestra guía de colores para imaginar el efecto que puedes conseguir.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colors.map((item, idx) => (
                        <div key={idx} className="bg-transparent text-center">
                            <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                            <div className="h-48 overflow-hidden rounded-sm mb-4">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed px-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
