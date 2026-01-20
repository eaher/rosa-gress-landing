import { LeadForm } from "./LeadForm"

export function Hero() {
    return (
        <section className="relative pt-32 bg-white">
            {/* Container for Title only */}
            <div className="container px-4 md:px-8 mb-8 flex justify-center mx-auto">
                <div className="w-full text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter leading-tight whitespace-nowrap inline-block">
                        Ideas para diseñar tu piscina de gres porcelánico
                    </h1>
                </div>
            </div>

            {/* Full Width Image Container */}
            <div className="relative w-full h-[850px] lg:h-[1000px] overflow-visible">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/image/hero/rosa-gres-piscina-gres-porcelanico-cuore-verde.webp"
                        alt="Hero Pool"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Form Overlay - Positioned absolutely on the right */}
                <div className="absolute top-0 right-0 left-0 md:left-auto md:right-10 lg:right-20 px-4 md:px-0 z-20 flex justify-center md:justify-end pointer-events-none">
                    {/* Wrapper to restore pointer events and constrain width */}
                    <div className="w-full max-w-md pointer-events-auto shadow-2xl">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
