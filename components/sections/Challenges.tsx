import { div, section } from "framer-motion/client";
import { AlertCircle, Section } from "lucide-react";

export default function Challenges() {
    return(
        <section id="challenges" className="relative py-28 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Most businesses don’t lack clients.{" "} 
                    <span className="text-cyan-400">They lack systems.</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                    When your operations depend on manual work, growth becomes chaotic,
                    slow and unsustainable.
                </p>

                {/* Challenges List */}
                  <div className="mt-14 space-y-6 text-left max-w-2xl mx-auto">
                {[
                    "Leads get lost in WhatsApp or email.",
                    "No automated follow-ups.",
                    "Manual processes consume valuable time.",
                    "Your website is not connected to your operations.",
                ].map((item, index) => (
                    <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10"
                    >
                    <AlertCircle className="text-cyan-400 mt-1" size={20} />
                    <p className="text-gray-300">{item}</p>
                    </div>
                ))}
                </div>

                  {/* CTA */}
                <div className="mt-14">
                <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:scale-105 transition">
                    See how we solve this
                </button>
                </div>


            </div>

        </section>
    );
}