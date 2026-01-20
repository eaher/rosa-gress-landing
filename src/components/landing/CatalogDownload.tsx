import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

export function CatalogDownload() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black inline-block relative">
                        Descarga el nuevo catálogo
                        {/* Yellow placeholder underline/highlight simulation if needed, 
                            but keeping it clean for now per standard design */}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
                    {/* Catalog Image Side */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-[300px] h-[220px] md:w-[400px] md:h-[300px] shadow-2xl rotate-[-3deg] transition-transform hover:rotate-0 duration-500 bg-gray-100 rounded-lg overflow-hidden">
                            {/* Placeholder for catalog cover */}
                            <Image
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                                alt="Catalog Cover"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xl font-bold">Unique pools</p>
                                <p className="text-sm opacity-90">Home | 2025</p>
                            </div>
                            <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                NEW
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <ul className="space-y-4">
                            {[
                                "Ejemplos de proyectos reales con nuestros colores",
                                "Ideas de diseño para piscinas pequeñas",
                                "Todos nuestras colecciones y novedades",
                                "Soluciones para construir piscinas de todo tipo"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                    <span>
                                        {item.split(' ').map((word, i) => {
                                            // Bold specific keywords based on the image roughly
                                            const boldWords = ["piscinas", "pequeñas", "colecciones", "todo", "tipo"];
                                            return boldWords.includes(word.replace(/[.,]/g, '')) ? (
                                                <span key={i} className="font-bold text-gray-900">{word} </span>
                                            ) : (
                                                word + " "
                                            );
                                        })}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            className="bg-black hover:bg-gray-800 text-white font-bold py-6 px-8 rounded-none uppercase tracking-wider text-sm"
                        >
                            Descargar Catálogo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
