
import { Camera, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#00B4B0]">POGNANTE</h3>
                        <p className="text-gray-400">
                            Especialistas en la construcción y diseño de piscinas exclusivas.
                            Creamos espacios únicos para disfrutar.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center justify-center gap-2">
                                <MapPin className="w-4 h-4 text-[#00B4B0]" />
                                <span>Calle Principal 123, Ciudad</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4 text-[#00B4B0]" />
                                <span>+34 900 000 000</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Mail className="w-4 h-4 text-[#00B4B0]" />
                                <span>info@pognante.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00B4B0] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#00B4B0] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Pognante Pisa & Jardín. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
