
import { Button } from "@/components/ui/Button"

export function CatalogCTA() {
    return (
        <section>
            {/* Black Banner */}
            <div className="bg-black text-white text-center py-4">
                <h2 className="text-sm md:text-base font-bold tracking-widest uppercase">
                    SOMOS FABRICANTES DE GRES PORCELÁNICO
                </h2>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-12 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                        Descarga el nuevo catálogo Unique Pools 2025
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Catalog Image */}
                    <div className="relative shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070"
                            alt="Catálogo Unique Pools 2025"
                            className="w-full rounded-sm"
                        />
                        <div className="absolute top-4 right-4 bg-[#FF006E] text-white font-bold rounded-full w-16 h-16 flex items-center justify-center animate-pulse">
                            NEW
                        </div>
                        <div className="absolute bottom-4 left-4 text-white p-4">
                            <h3 className="text-2xl font-bold">Unique pools</h3>
                            <p>Home | 2025</p>
                        </div>
                    </div>

                    {/* Config List */}
                    <div className="space-y-6">
                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Ejemplos de proyectos reales con nuestros colores
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Ideas de diseño para <span className="font-bold mx-1">piscinas pequeñas</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Todos nuestras <span className="font-bold mx-1">colecciones</span> y novedades
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Soluciones para construir <span className="font-bold mx-1">piscinas de todo tipo</span>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Button className="bg-black text-white font-bold py-4 px-8 uppercase hover:bg-gray-800 rounded-sm">
                                DESCARGAR CATÁLOGO
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
