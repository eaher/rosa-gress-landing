
import Image from "next/image"

export function InAndOut() {
    // Ordered images based on the numbering 4 to 9 in filenames
    const images = [
        "/image/In%20&%20Out/rosa-gres-4-inout-sophy-white.webp",
        "/image/In%20&%20Out/rosa-gres-5-inout-cuore-rosso.webp",
        "/image/In%20&%20Out/rosa-gres-6.-nout-iconic-white.webp",
        "/image/In%20&%20Out/rosa-gres-7-inout-gran-formato-scaled-1-1024x817.webp",
        "/image/In%20&%20Out/rosa-gres-8-inout-sophy-beige.webp",
        "/image/In%20&%20Out/rosa-gres-9-inout-coral-sand.webp"
    ];

    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-start bg-white pt-10 pb-32">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-[#FF006E] font-bold tracking-widest uppercase mb-2">
                        LA ARMONÍA ES TENDENCIA
                    </h3>
                    <h2 className="text-xl md:text-3xl font-bold text-black max-w-4xl mx-auto leading-tight">
                        In & Out Design: nuestros suelos porcelánicos para coordinar los interiores, la terraza y la piscina
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative aspect-[4/3] w-full group overflow-hidden">
                            <Image
                                src={src}
                                alt={`In & Out ${idx + 1}`}
                                fill
                                className={`transition-transform duration-700 group-hover:scale-105 ${idx === 3 ? "object-contain bg-[#f3f3f3]" : "object-cover"}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
