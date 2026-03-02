"use client";

import { Linkedin, Github } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    description: string;
    specialities: string[];
    image: string;
    linkedin?: string;
    github?: string;
}

const team: TeamMember[] = [
    {
        name: "Juliana Herrera",
        role: "FullStack Developer",
        description: "Focused on building scalable backend systems and modern frontend architectures that solve real business challenges.",
        specialities: ["Laravel", "Next.js", "AI Integration"],
        image: "/team/juliana.jpg",
        linkedin: "https://www.linkedin.com/in/juliana-herrera-ba3481332",
        github: "https://github.com/julianaherrera1",   
    },
     {
        name: "Tatiana Rubio",
        role: "Backend Developer",
        description: "Specialized in designing robust APIs, database architecture and secure authentication systems.",
        specialities: ["Java", "APIs", "AI Integration"],
        image: "/team/tatiana.jpg",
        linkedin: "#",
        github: "https://github.com/rubiotatianaa",   
    },
     {
        name: "Andres Herrera",
        role: "Marketing & Growth",
        description: "Focused on growth strategies, digital marketing and customer acquisition to drive measurable results for our clients.",
        specialities: ["Growth Hacking", "SEO"],
        image: "/team/andres.jpg",
        linkedin: "#",
        github: "#",   
    },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow - consistente con todas las secciones */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3), transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto text-center">

        {/* Headline - mismo estilo que todas las secciones */}
        <h2 className="text-4xl md:text-6xl lg:text-6xl font-light leading-tight tracking-tight">
          Meet the{" "}
          <span className="text-cyan-400">
            Team
          </span>
        </h2>

        {/* Subheadline - mismo estilo que las demás secciones */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          We are a multidisciplinary team combining technical expertise and strategic thinking 
          to build scalable web platforms and intelligent systems for modern businesses.
        </p>

        {/* Grid - 3 columnas en desktop */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image with glow effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-light text-white mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-cyan-400 text-base mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {member.specialities.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-gray-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links - siempre al fondo con mt-auto */}
              <div className="flex justify-center gap-4 mt-auto pt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA opcional - mismo estilo que otras secciones */}
        <div className="mt-16">
          <button className="px-8 py-3 bg-cyan-400 text-black font-medium rounded-lg shadow-md hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300">
            Join our team
          </button>
        </div>
      </div>
    </section>
  );
}