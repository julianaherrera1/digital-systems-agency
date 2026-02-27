import { Globe, Cpu, ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow - consistente con Hero y Challenges */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
      
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline - mismo estilo que Hero y Challenges */}
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
          Solutions built for{" "}
          <span className="text-cyan-400">
            modern businesses
          </span>
        </h2>

        {/* Subheadline - mismo estilo que Hero y Challenges */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          We design digital systems that eliminate manual work and enable scalable growth.
        </p>

        {/* Cards Grid - mismo estilo que Challenges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-start p-8 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 text-left">
            <Globe className="text-cyan-400 mb-6" size={32} strokeWidth={1.5} />
            
            <h3 className="text-2xl font-light text-white mb-4">
              Full Stack Development
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              High-performance websites and applications connected to your
              operations. Built to convert, scale and integrate with your workflows.
            </p>
            
            <button className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all duration-300 mt-auto">
              Explore Development
              <ArrowRight size={18} className="text-cyan-400" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-start p-8 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 text-left">
            <Cpu className="text-cyan-400 mb-6" size={32} strokeWidth={1.5} />
            
            <h3 className="text-2xl font-light text-white mb-4">
              AI & Automation
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              Intelligent workflows, AI assistants and custom CRM systems
              designed to automate repetitive tasks and optimize your
              customer journey.
            </p>
            
            <button className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all duration-300 mt-auto">
              Discover Automation
              <ArrowRight size={18} className="text-cyan-400" />
            </button>
          </div>
        </div>

        {/* CTA - mismo estilo que Hero y Challenges */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300">
            Start your project
          </button>
          <a href="#projects" className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300">
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}