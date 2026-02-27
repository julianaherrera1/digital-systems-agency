import { ArrowRight, Search, Code, Zap } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Strategy",
            description: "We analyze your current workflow and identify inefficiencies to design the right digital system."
        },
        {
            number: "02",
            icon: Code,
            title: "Design & Development",
            description: "We build your website or system with modern technologies, fully aligned with your growth goals."
        },
        {
            number: "03",
            icon: Zap,
            title: "Automation & Optimization",
            description: "We integrate automation, CRM and AI tools to ensure your business runs efficiently and scales sustainably."
        }
    ];

    return (
        <section id="process" className="relative py-28 px-6 overflow-hidden">
            {/* Background glow - consistente con todas las secciones */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
            
            <div className="max-w-6xl mx-auto text-center">
                {/* Headline - mismo estilo que Hero, Challenges y Solutions */}
                <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
                    Our{" "}
                    <span className="text-cyan-400">
                        Process
                    </span>
                </h2>

                {/* Subheadline - mismo estilo que las demás secciones */}
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    A structured approach to transform your business into a scalable digital system.
                </p>

                {/* Steps Grid - diseño mejorado */}
                <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    
                    {/* Desktop Connector Line */}
                    <div className="hidden md:block absolute top-24 left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                    
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* Number with Icon */}
                            <div className="relative mb-8">
                                
                                {/* Circle with number and icon */}
                                <div className="relative w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                                    <div className="text-center">
                                        <div className="text-2xl font-light text-cyan-400">{step.number}</div>
                                        <step.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-light text-white mb-4">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>

                            {/* Mobile Arrow (except last) */}
                            {index < steps.length - 1 && (
                                <ArrowRight className="md:hidden text-cyan-400/30 my-4 rotate-90" size={24} />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA - mismo estilo que Hero, Challenges y Solutions */}
                <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300">
                        Start your journey
                    </button>
                </div>
            </div>
        </section>
    );
}