import { ArrowRight } from "lucide-react";

export default function Process() {
    return(
         <section
      id="process"
      className="py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-cyan-400">Process</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            A structured approach to transform your business into a scalable digital system.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Step 1 */}
          <div className="flex-1 text-center">
            <div className="text-cyan-400 text-5xl font-bold mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">
              Discovery & Strategy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              We analyze your current workflow and identify inefficiencies
              to design the right digital system.
            </p>
          </div>

          {/* Arrow Desktop */}
          <div className="hidden md:block text-gray-600">
            <ArrowRight size={28} />
          </div>

          {/* Step 2 */}
          <div className="flex-1 text-center">
            <div className="text-cyan-400 text-5xl font-bold mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">
              Design & Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              We build your website or system with modern technologies,
              fully aligned with your growth goals.
            </p>
          </div>

          {/* Arrow Desktop */}
          <div className="hidden md:block text-gray-600">
            <ArrowRight size={28} />
          </div>

          {/* Step 3 */}
          <div className="flex-1 text-center">
            <div className="text-cyan-400 text-5xl font-bold mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">
              Automation & Optimization
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              We integrate automation, CRM and AI tools to ensure your
              business runs efficiently and scales sustainably.
            </p>
          </div>

        </div>
      </div>
    </section>
    );
}