export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.5), transparent_60%)]" />

      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
          We transform your business into{" "}
          <span className="text-cyan-400">
            an intelligent digital system
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          We don’t just build websites.
          We connect them with automation, CRM and AI to help you increase revenue and eliminate manual work.
        </p>

       {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

        {/* Primary */}
        <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300">
          Contact Us
        </button>

        {/* Secondary */}
        <button className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300">
          View Our Work
        </button>

      </div>

      </div>

      
    </section>
  );
}