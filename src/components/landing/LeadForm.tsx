"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    firstName: z.string().min(2, "Obligatorio"),
    lastName: z.string().min(2, "Obligatorio"),
    email: z.string().email("Email válido requerido"),
    phone: z.string().optional(),
    city: z.string().optional(),
    province: z.string().optional(),
    message: z.string().optional(),
    contactChannel: z.enum(["whatsapp", "call", "mail"]).optional(),
})

type FormValues = z.infer<typeof formSchema>

interface LeadFormProps {
    hideHeader?: boolean
    className?: string
}

export function LeadForm({ hideHeader = false, className }: LeadFormProps) {
    const [activeTab, setActiveTab] = useState<"distributor" | "buy">("distributor")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contactChannel: "whatsapp",
        },
    })

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Form Data:", { ...data, type: activeTab })
        setIsSubmitting(false)
        reset()
        alert("Mensaje enviado con éxito")
    }

    return (
        <div className={cn("w-full max-w-md bg-white shadow-2xl overflow-hidden font-sans", className)}>
            {/* Header */}
            {!hideHeader && (
                <div className="bg-[#00B4B0] text-white py-4 text-center font-bold text-xl uppercase tracking-wider">
                    Contacta con nosotros
                </div>
            )}

            {/* Tabs */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab("distributor")}
                    className={cn(
                        "flex-1 py-3 text-sm font-semibold transition-colors uppercase",
                        activeTab === "distributor"
                            ? "bg-[#1A1A1A] text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    )}
                >
                    Constructor de piscinas
                </button>
                <button
                    onClick={() => setActiveTab("buy")}
                    className={cn(
                        "flex-1 py-3 text-sm font-semibold transition-colors uppercase",
                        activeTab === "buy"
                            ? "bg-[#1A1A1A] text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    )}
                >
                    Quiero Comprar
                </button>
            </div>

            {/* Form Content */}
            <div className="p-6 bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Input
                                placeholder="Nombre"
                                {...register("firstName")}
                                className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                            />
                            {errors.firstName && (
                                <span className="text-[10px] text-red-500">{errors.firstName.message}</span>
                            )}
                        </div>
                        <div className="space-y-1">
                            <Input
                                placeholder="Apellido"
                                {...register("lastName")}
                                className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                            />
                            {errors.lastName && (
                                <span className="text-[10px] text-red-500">{errors.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                        />
                        {errors.email && (
                            <span className="text-[10px] text-red-500">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="space-y-1">
                        <Input
                            placeholder="Teléfono"
                            {...register("phone")}
                            className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Input
                                placeholder="Ciudad"
                                {...register("city")}
                                className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-1">
                            <Input
                                placeholder="Provincia"
                                {...register("province")}
                                className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Textarea
                            placeholder="Mensaje"
                            {...register("message")}
                            className="rounded-none bg-white border-gray-300 focus:border-[#00B4B0] min-h-[100px] placeholder:text-gray-400 resize-none"
                        />
                    </div>

                    {/* Contact Preference */}
                    <div className="pt-2">
                        <p className="text-xs text-gray-500 mb-2">Quiero que me contacten por:</p>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="whatsapp"
                                    {...register("contactChannel")}
                                    className="w-4 h-4 text-[#00B4B0] focus:ring-[#00B4B0] accent-[#00B4B0]"
                                />
                                <span className="text-sm text-gray-600">WhatsApp</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="call"
                                    {...register("contactChannel")}
                                    className="w-4 h-4 text-[#00B4B0] focus:ring-[#00B4B0] accent-[#00B4B0]"
                                />
                                <span className="text-sm text-gray-600">Llamada</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="mail"
                                    {...register("contactChannel")}
                                    className="w-4 h-4 text-[#00B4B0] focus:ring-[#00B4B0] accent-[#00B4B0]"
                                />
                                <span className="text-sm text-gray-600">Mail</span>
                            </label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#00B4B0] hover:bg-[#009b97] text-white font-bold uppercase py-6 rounded-none mt-4 transition-all"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                </form>
            </div>
        </div>
    )
}
