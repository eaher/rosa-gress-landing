"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"

const formSchema = z.object({
    firstName: z.string().min(2, "Obligatorio"),
    lastName: z.string().min(2, "Obligatorio"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(9, "Teléfono inválido"),
    cp: z.string().min(3, "CP inválido"),
    location: z.string().min(2, "Obligatorio"),
    province: z.string().min(2, "Obligatorio"),
    country: z.string().min(2, "Obligatorio"),
    comments: z.string().optional(),
    contactPreference: z.boolean().optional(),
    privacy: z.boolean().refine((val) => val === true, "Debes aceptar la política"),
})

type FormValues = z.infer<typeof formSchema>

export function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comments: "",
            privacy: false,
            contactPreference: false,
        },
    })

    // Mock submission
    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Form Data:", data);
            setSuccess(true)
            reset()
        } catch (e) {
            console.error(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (success) {
        return (
            <div className="bg-white p-8 rounded-none shadow-lg text-center border-t-8 border-[#00C2CB]">
                <h3 className="text-2xl font-bold text-[#00C2CB] mb-4">¡Gracias!</h3>
                <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo.</p>
                <Button onClick={() => setSuccess(false)} className="bg-[#00C2CB] hover:bg-[#00aeb6] rounded-none">
                    Volver
                </Button>
            </div>
        )
    }

    return (
        <div className="bg-[#F5F5F5] rounded-none shadow-2xl overflow-hidden font-sans max-w-md mx-auto">
            {/* Header */}
            <div className="bg-[#00C2CB] py-3 px-4 text-center">
                <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wider">
                    CONTACTA CON NOSOTROS
                </h2>
            </div>

            <div className="p-5 md:p-6">
                <p className="text-[11px] leading-tight text-center text-gray-800 mb-5 font-medium">
                    Por favor accede al formulario que más te interese y te enviaremos el contacto de nuestro
                    <span className="font-bold"> Pool Partner</span> o <span className="font-bold">Distribuidor</span> más cercano a tu zona. Muchas gracias.
                </p>

                <h3 className="text-center text-[#00C2CB] font-bold text-base md:text-lg mb-3">¿Qué necesitas?</h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <button className="bg-[#00C2CB] text-white text-[10px] pb-2 pt-2 px-1 font-bold uppercase leading-tight hover:bg-[#00aeb6] transition-colors flex flex-col items-center justify-center min-h-[80px]">
                        <span className="block mb-1">EMPRESA CONSTRUCTORA DE PISCINAS</span>
                        <span className="bg-white/20 w-full py-1 mb-1 block text-[9px] font-normal">IR AL FORMULARIO</span>
                        <span className="block text-[9px]">ENCUENTRA TU POOL PARTNER</span>
                    </button>
                    <button className="bg-[#00C2CB] text-white text-[10px] pb-2 pt-2 px-1 font-bold uppercase leading-tight hover:bg-[#00aeb6] transition-colors flex flex-col items-center justify-center min-h-[80px]">
                        <span className="block mb-1">COMPRAR MATERIAL DE ROSA GRES</span>
                        <span className="bg-white/20 w-full py-1 mb-1 block text-[9px] font-normal">IR AL FORMULARIO</span>
                        <span className="block text-[9px]">ENCUENTRA TU DISTRIBUIDOR</span>
                    </button>
                </div>

                <div className="text-center mb-6">
                    <a href="#" className="text-[9px] border-b border-black text-black font-bold uppercase pb-0.5 hover:opacity-70">¿QUÉ ES UN POOL PARTNER ROSA GRES?</a>
                </div>

                {/* Divider logic simulation: The screenshot shows a grey box or background change? 
            Actually the form continues on the same background.
        */}
                <div className="mb-4 bg-gray-200/50 p-2 -mx-2 rounded-sm">
                    <p className="text-[11px] text-gray-900 font-bold leading-tight">
                        Para otro tipo de consultas escríbenos un mensaje. Por favor, facilítanos tus datos:
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                    {/* Row 1: Nombre | Apellidos */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">NOMBRE</label>
                            <Input {...register("firstName")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                            {errors.firstName && <span className="text-red-500 text-[9px]">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">APELLIDOS</label>
                            <Input {...register("lastName")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                            {errors.lastName && <span className="text-red-500 text-[9px]">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    {/* Row 2: Email */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">EMAIL</label>
                        <Input type="email" {...register("email")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        {errors.email && <span className="text-red-500 text-[9px]">{errors.email.message}</span>}
                    </div>

                    {/* Row 3: Teléfono | CP */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">TELÉFONO</label>
                            <Input type="tel" {...register("phone")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">CP</label>
                            <Input {...register("cp")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        </div>
                    </div>

                    {/* Row 4: Población | Provincia | País */}
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">POBLACIÓN</label>
                            <Input {...register("location")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">PROVINCIA</label>
                            <Input {...register("province")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">PAÍS</label>
                            <Input {...register("country")} className="rounded-none border-gray-400 h-8 text-xs bg-white focus:border-[#00C2CB] focus:ring-0" />
                        </div>
                    </div>

                    {/* Row 5: Mensaje */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-800 uppercase mb-1">MENSAJE</label>
                        <Textarea {...register("comments")} className="rounded-none border-gray-400 text-xs bg-white min-h-[80px] resize-none focus:border-[#00C2CB] focus:ring-0" />
                    </div>

                    {/* Disclaimers & Checkboxes */}
                    <div className="text-[10px] text-gray-700 space-y-2 mt-4 leading-tight">
                        <p>Recibirás un email con la información que solicitas. <strong>Desde Rosa Gres no recibirás llamada telefónica.</strong> Si prefieres ser contactado por teléfono, marca la siguiente opción:</p>

                        <div className="flex items-center space-x-2">
                            <input type="radio" id="phonePref" {...register("contactPreference")} className="accent-[#00C2CB] h-3 w-3" />
                            <label htmlFor="phonePref" className="font-bold cursor-pointer">Sí, prefiero ser contactado por teléfono</label>
                        </div>

                        <div className="flex items-start space-x-2 pt-1">
                            <input type="checkbox" id="privacy" {...register("privacy")} className="accent-[#00C2CB] h-3 w-3 mt-0.5" />
                            <label htmlFor="privacy" className="cursor-pointer">He leído y acepto la política de privacidad de Rosa Gres.</label>
                        </div>
                        {errors.privacy && <p className="text-red-500 text-[9px]">{errors.privacy.message}</p>}
                    </div>

                    <div className="text-right pt-4 pb-2">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#00C2CB] hover:bg-[#009e9a] text-white font-bold py-1.5 px-8 uppercase rounded-none text-xs transition-colors shadow-sm"
                        >
                            {isSubmitting ? "..." : "ENVIAR"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
