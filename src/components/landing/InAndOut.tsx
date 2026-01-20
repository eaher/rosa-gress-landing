import Image from "next/image"

export function InAndOut() {
    return (
        <section className="py-20 bg-[#F5F5F7]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">In & Out</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Continuidad visual perfecta. Coordina el interior y el exterior de tu hogar con la misma estética.
                    </p>
                </div>

                <div className="relative w-full h-[600px] rounded-sm overflow-hidden group">
                    <Image
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                        alt="In and Out Design"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                        <div className="text-white">
                            <h3 className="text-3xl font-light mb-4">Sin Límites</h3>
                            <p className="text-lg max-w-xl opacity-90">
                                Nuestra tecnología permite llevar el mismo pavimento desde el salón hasta el borde de la piscina, creando espacios infinitos y elegantes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
