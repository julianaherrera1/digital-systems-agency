"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-[var(--background-elevated)] border-b border-[var(--border)] py-3"
              : "bg-transparent py-5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo minimalista */}
            <Link href="/" className="group">
              <span className="text-xl font-medium tracking-tight text-[var(--text-primary)]">
                IA Agency
              </span>
              <div className="h-px w-0 group-hover:w-full bg-[var(--accent)] transition-all duration-300"></div>
            </Link>

            {/* Desktop Navigation - Minimal */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "Challenges", "Solutions", "Process", "Projects", "Team", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Desktop Social - Minimal */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--background-elevated)] border-b border-[var(--border)]">
            <div className="px-6 py-4 space-y-3">
              {["Home", "Challenges", "Solutions", "Process", "Projects", "Team", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                  <Github size={18} />
                </a>
                <a href="#" className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}