"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Let’s discuss your project and explore how we can build scalable,
            high-performance digital solutions tailored to your business.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left - Form */}
          <form className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </form>

          {/* Right - Direct Contact */}
          <div className="flex flex-col justify-center space-y-8">

            <div className="flex items-start gap-4">
              <Phone className="text-cyan-400" size={22} />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400 text-sm">+57 300 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400" size={22} />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400 text-sm">hello@youragency.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="text-cyan-400" size={22} />
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition"
                >
                  Chat with us directly
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-400" size={22} />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-400 text-sm">Medellín, Colombia</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}