import Image from "next/image"

export function AboutUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black inline-block">
                        Sobre Nosotros
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 space-y-12">

                        {/* Block 1: Strufaldi / Rosa Gres (User mentioned Rosa Gres but provided text for it. 
                           The image shows 'Strufaldi' logo. User text says 'ROSA GRES se usa el logo'. 
                           I'll use the logo-rosa.png I have for now effectively.) 
                           Actually, wait. User said "ROSA GRES se usa el logo". 
                           Let's check the request again. 
                           "ROSA GRES se usa el logo" -> "Rosa Gres is a spanish brand..."
                           "Ceracor se usa el logo" -> "Hace mas de 14 años..."
                           
                           It seems I should use the logo-rosa.png for the first block.
                        */}
                        <div>
                            <div className="relative w-48 h-16 mb-6">
                                <Image
                                    src="/image/logo/logo-rosa.png" // Assuming this is the Rosa Gres/Strufaldi related logo we have
                                    alt="Rosa Gres"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Rosa Gres es una marca española líder en la fabricación de gres porcelánico de alta gama, reconocido por su extrema resistencia, durabilidad y diseño, ideal para revestir piscinas, exteriores e interiores, ofreciendo soluciones antideslizantes, atérmicas y de fácil mantenimiento, con una amplia variedad de colores y texturas.
                            </p>
                        </div>

                        {/* Block 2: Ceracor */}
                        <div>
                            <div className="relative w-48 h-16 mb-6">
                                <Image
                                    src="/image/logo/logo-cera.png"
                                    alt="Ceracor"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Hace más de 14 años que impulsamos proyectos a través de la distribución de pisos y revestimientos de marcas europeas y latinoamericanas, combinando trayectoria, conocimiento técnico y un portfolio de productos premium de diseño.
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" // Placeholder pool image
                                alt="Sobre Nosotros"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
