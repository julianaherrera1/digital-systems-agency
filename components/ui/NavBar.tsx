"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { div, nav } from "framer-motion/client";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="fixed w-full top-0 z-0 backdrop-blur-md bg-black/60 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo*/}
                    <div className="text-xl font-bold tracking-wide">
                        IA Agency
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-sm text-gray-300">
                        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
                        <a href="#problems" className="hover:text-cyan-400 transition">Problems</a>
                        <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
                        <a href="#process" className="hover:text-cyan-400 transition">Process</a>
                        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                        <a href="#team" className="hover:text-cyan-400 transition">Team</a>
                    </div>

                     {/* Desktop Social */}
                     <div className="hidden md:flex space-x-4 text-gray-300">
                        <a href="#" target="_blank" className="hover:text-cyan-400 transition">
                            <Github size={20} />
                        </a>
                        <a href="#" target="_blank" className="hover:text-cyan-400 transition">
                            <Linkedin size={20} />
                        </a>
                     </div>

                     {/* Mobile Menu Button */}
                     <div className="md:hidden">
                        <button onClick={()=> setIsOpen(!isOpen)} className="text-gray-300 hover:text-cyan-400 transition">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                     </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10 px-6 pb-4">
                    <div className="flex flex-col space-y-4 mt-4 text-gray-300">
                        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
                        <a href="#problems" className="hover:text-cyan-400 transition">Problems</a>
                        <a href="#solutions" className="hover:text-cyan-400 transition">Solutions</a>
                        <a href="#process" className="hover:text-cyan-400 transition">Process</a>
                        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                        <a href="#team" className="hover:text-cyan-400 transition">Team</a>

                        <div className="flex space-x-4 pt-4">
                            <Github size={20}/>
                            <Linkedin size={20}/>
                        </div>
                    </div>
                </div>
            )}

        </nav>
    );
}