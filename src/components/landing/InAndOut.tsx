
'use client';

import Image from "next/image"
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function InAndOut() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Ordered images based on the numbering 4 to 9 in filenames
    const images = [
        "/image/In%20&%20Out/rosa-gres-4-inout-sophy-white.webp",
        "/image/In%20&%20Out/rosa-gres-5-inout-cuore-rosso.webp",
        "/image/In%20&%20Out/rosa-gres-6.-nout-iconic-white.webp",
        "/image/In%20&%20Out/rosa-gres-7-inout-gran-formato-scaled-1-1024x817.webp",
        "/image/In%20&%20Out/rosa-gres-8-inout-sophy-beige.webp",
        "/image/In%20&%20Out/rosa-gres-9-inout-coral-sand.webp"
    ];

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-start bg-white pt-10 pb-32">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-[#FF006E] font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
                        LA ARMONÍA ES TENDENCIA
                    </h3>
                    <h2 className="text-lg md:text-3xl font-bold text-black max-w-4xl mx-auto leading-tight">
                        In & Out Design: nuestros suelos porcelánicos para coordinar los interiores, la terraza y la piscina
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-1.5 md:gap-4 max-w-6xl mx-auto">
                    {images.map((src, idx) => {
                        const isExcluded = src.includes("rosa-gres-7-inout-gran-formato");
                        return (
                            <div
                                key={idx}
                                className={`relative aspect-[4/3] w-full group overflow-hidden ${!isExcluded ? "cursor-pointer" : ""}`}
                                onClick={() => !isExcluded && setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`In & Out ${idx + 1}`}
                                    fill
                                    className={`transition-all duration-700 ${idx === 3 ? "object-contain bg-[#f3f3f3] p-2" : "object-cover"}`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-900 font-bold mb-4 text-xs md:text-sm uppercase tracking-wider">
                        ¿NECESITAS MÁS INFORMACIÓN?
                    </p>
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-[#FF006E] hover:bg-[#d6005c] text-white font-bold py-4 px-8 md:px-12 rounded-none transition-all uppercase tracking-widest text-sm md:text-base shadow-lg"
                    >
                        ¡CONTACTA CON NOSOTROS!
                    </button>
                </div>
            </div>

            {/* Lightbox / Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-[#FF006E] transition-colors z-[110]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X size={40} />
                    </button>

                    <div
                        className="relative w-full h-full max-w-6xl flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt="Propiedad visualizada"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
