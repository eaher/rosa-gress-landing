
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
        <section id="in-out" className="min-h-[calc(100vh-80px)] flex flex-col justify-start bg-white pt-10 pb-32">
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
                                    className={`transition-all duration-700 ${idx === 3 ? "object-contain bg-[#f3f3f3]" : "object-cover"}`}
                                />
                            </div>
                        );
                    })}
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
