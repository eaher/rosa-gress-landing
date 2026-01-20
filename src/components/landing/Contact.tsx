import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { LeadForm } from "./LeadForm"

export function Contact() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h4 className="text-[#00B4B0] font-bold text-sm tracking-widest uppercase mb-4">Contacto</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Hablemos de tu Proyecto
                    </h2>
                </div>

                <div className="flex justify-center">
                    <LeadForm
                        hideHeader={true}
                        className="max-w-4xl shadow-none"
                    />
                </div>
            </div>
        </section>
    )
}
