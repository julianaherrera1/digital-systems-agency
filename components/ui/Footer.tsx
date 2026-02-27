"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold">
              IA Agency
            </h3>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              We build scalable web platforms and intelligent systems
              designed to help modern businesses grow and innovate.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#challenges" className="hover:text-cyan-400 transition">Challenges</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition">Process</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition">Team</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Fullstack Development</li>
              <li>Backend Systems</li>
              <li>Frontend Applications</li>
              <li>AI Integrations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Medellín, Colombia</li>
              <li>hello@youragency.com</li>
              <li>+57 300 123 4567</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">

          {/* Socials */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} YourAgency. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}