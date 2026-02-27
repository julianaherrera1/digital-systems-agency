"use client";

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
        role: "Frontend Developer",
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
    <section id="team" className="py-28 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the <span className="text-cyan-400">Team</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            We are a multidisciplinary team combining technical expertise and strategic thinking 
            to build scalable web platforms and intelligent systems for modern businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >

              {/* Image */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-cyan-400 text-sm mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.specialities.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 text-sm text-gray-400">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    LinkedIn
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    className="hover:text-cyan-400 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}