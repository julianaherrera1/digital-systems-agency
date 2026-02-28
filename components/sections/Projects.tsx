"use client";

import { useState } from "react";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    details: string;
    images: string[]; 
}

const projects: Project[] = [
  {
    title: "MiNegocioApp",
    description: "Business management platform for entrepreneurs and small businesses.",
    technologies: ["Laravel 10", "PHP 8.2", "MySQl", "TailwindCSS", "Laravel Breeze"],
    details:
    `
        MiNegocioApp is a business management platform currently in development, designed for entrepreneurs and small businesses that need a simple way to manage and promote their operations online. 
        
        The system centralizes product management, customer records, sales tracking and performance analytics into a single dashboard.

        The backend architecture is built with Laravel 10 following clean MVC principles. Authentication is handled with Laravel Breeze, and the interface is developed using Blade and TailwindCSS.

        Upcoming features include role-based access control, advanced product modules and an analytics dashboard for business insights.
        `,
        images: [

        ]
  },
    {
    title: "Solano Azul",
    description: "Modern brand landing page for a premium seafood company.",
    technologies: ["Next.js 16", "TypeScript", "TailwindCSS v4", "Framer Motion"],
    details: `
    Solano Azul is a modern and responsive landing page built for a seafood brand focused on delivering premium fresh tuna from the Colombian Pacific.

    The goal of this project was to establish a strong digital presence through a clean, fast and visually appealing user experience.

    Built using Next.js App Router with TypeScript for scalability and maintainability. TailwindCSS v4 was used for a minimal and consistent design system, while Framer Motion provides smooth animations to enhance user engagement.

    The website is fully responsive and optimized for performance.
    `,
     images: [
            
        ]
    }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
          Our{" "}
          <span className="text-cyan-400">
            Projects
          </span>
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Our portfolio features frontend, backend, and fullstack projects developed with technologies such as Laravel, PHP, Java, and modern web frameworks. Each solution is designed to drive efficiency, scalability, and measurable business growth.
        </p>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 text-left flex flex-col h-full"
            >
              <h3 className="text-2xl font-light text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botón con mt-auto para que siempre se mantenga abajo */}
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all duration-300 mt-auto pt-4"
              >
                View Project
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-6 z-50">
          <div className="bg-[#111827] max-w-lg w-full p-8 rounded-xl border border-white/10 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm whitespace-pre-line leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}