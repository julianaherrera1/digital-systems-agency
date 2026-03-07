"use client";

import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow - consistente con todas las secciones */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto text-center">

        {/* Headline - mismo estilo que todas las secciones */}
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
          Get In{" "}
          <span className="text-cyan-400">
            Touch
          </span>
        </h2>

        {/* Subheadline - mismo estilo que las demás secciones */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Let’s discuss your project and explore how we can build scalable,
          high-performance digital solutions tailored to your business.
        </p>

        {/* Two Columns Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">

          {/* Left - Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300">
            <h3 className="text-2xl font-light text-white mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition placeholder:text-gray-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition placeholder:text-gray-600"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition placeholder:text-gray-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right - Direct Contact */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
            <h3 className="text-2xl font-light text-white mb-8">Contact information</h3>
            
            <div className="space-y-6 flex-1">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <p className="text-white">+57 311 724 9900</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <p className="text-white">iaagency@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <MessageCircle className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/573117249900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                  >
                    Chat with us directly
                    <span className="text-cyan-400">→</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p className="text-white">Medellín, Colombia</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">Typically replies within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Map or additional CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Prefer email? Write us directly at{" "}
            <a href="mailto:hello@youragency.com" className="text-cyan-400 hover:underline">
              hello@youragency.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}