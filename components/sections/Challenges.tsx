import { AlertCircle } from "lucide-react";

export default function Challenges() {
    return (
        <section id="challenges" className="relative py-28 px-6 overflow-hidden">
            {/* Background glow - igual que Hero */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
            
            <div className="max-w-5xl mx-auto text-center">
                {/* Headline - mismo estilo que Hero */}
                <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
                    Most businesses don't lack clients.{" "}
                    <span className="text-cyan-400">
                        They lack systems.
                    </span>
                </h2>

                {/* Subheadline - mismo estilo que Hero */}
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    When your operations depend on manual work, growth becomes chaotic,
                    slow and unsustainable.
                </p>

                {/* Challenges Grid - diseño limpio y consistente */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        "Leads get lost in WhatsApp or email.",
                        "No automated follow-ups.",
                        "Manual processes consume valuable time.",
                        "Your website is not connected to your operations."
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-5 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 text-left"
                        >
                            <AlertCircle className="text-cyan-400 flex-shrink-0 mt-1" size={22} />
                            <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>

                {/* CTA - exactamente igual que Hero */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Primary - mismo estilo que Hero */}
                    <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300">
                        See how we solve this
                    </button>
                </div>
            </div>
        </section>
    );
}