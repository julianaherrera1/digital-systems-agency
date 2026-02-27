import { Globe, Cpu } from "lucide-react";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions built for{" "}
            <span className="text-cyan-400">modern businesses</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            We design digital systems that eliminate manual work and enable scalable growth.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-10 justify-center">

          {/* Card 1 */}
          <div className="md:w-1/2 bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/40 transition">
            <Globe className="text-cyan-400 mb-6" size={28} />

            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Development
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              High-performance websites and applications connected to your
              operations. Built to convert, scale and integrate with your workflows.
            </p>

            <button className="text-cyan-400 font-medium hover:underline">
              Explore Development →
            </button>
          </div>

          {/* Card 2 */}
          <div className="md:w-1/2 bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/40 transition">
            <Cpu className="text-cyan-400 mb-6" size={28} />

            <h3 className="text-2xl font-semibold mb-4">
              AI & Automation
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Intelligent workflows, AI assistants and custom CRM systems
              designed to automate repetitive tasks and optimize your
              customer journey.
            </p>

            <button className="text-cyan-400 font-medium hover:underline">
              Discover Automation →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}