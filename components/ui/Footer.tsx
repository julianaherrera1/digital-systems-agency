"use client";

import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-16 px-6 overflow-hidden">
      {/* Background glow - consistente con todas las secciones */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.2), transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white">
              IA Agency
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build scalable web platforms and intelligent systems
              designed to help modern businesses grow and innovate.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white/80 mb-4 tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Challenges", "Solutions", "Process", "Projects", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-white/80 mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {[
                "Fullstack Development",
                "Backend Systems", 
                "Frontend Applications",
                "AI Integrations",
                "CRM Implementation",
                "Process Automation"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-white/80 mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:hello@youragency.com" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  hello@youragency.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  +57 300 123 4567
                </a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 transition"
                />
                <button className="px-3 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 text-xs font-medium hover:bg-cyan-400/20 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-xs text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} IA Agency. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 order-1 md:order-2">
            <a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="absolute right-8 bottom-8 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </button>

        </div>
      </div>
    </footer>
  );
}