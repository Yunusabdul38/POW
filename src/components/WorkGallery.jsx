"use client";

const projects = [
  {
    id: 1,
    title: "ChainPaye",
    description:
      "A high-performance crypto payment gateway enabling seamless on/off-ramps for local fiat currencies globally.",
    tags: ["Crypto", "Payments", "Fiat On-ramp"],
    link: "https://chainpaye.com/",
  },
  {
    id: 2,
    title: "FortiChain",
    description:
      "An advanced security auditing platform dedicated to vulnerability research and project-wide threat mitigation.",
    tags: ["Security", "Auditing", "Blockchain"],
    link: "https://audit.forti-chain.xyz/",
  },
  {
    id: 3,
    title: "PayMesh",
    description:
      "A decentralized ecosystem for instant multi-party payment distribution and community-driven crowdfunding.",
    tags: ["Web3", "Crowdfunding", "Distribution"],
    link: "https://paymesh.app",
  },
  {
    id: 4,
    title: "Designer Portfolio",
    description:
      "A UI designer portfolio website showcasing high-quality digital designs and user experiences.",
    tags: ["Design", "Portfolio", "UI/UX"],
    link: "https://segun-aribido.vercel.app/",
  },
  {
    id: 5,
    title: "EventHub",
    description:
      "A simple way to create events and sell tickets online, making it easy for people to organize gatherings and manage their guests.",
    tags: ["Events", "Ticketing", "Full-stack"],
    link: "https://event-hub-zeta-sepia.vercel.app/",
  },
  {
    id: 6,
    title: "Fineace",
    description:
      "A secure Web3 escrow protocol engineered for precise fund management and programmable distribution.",
    tags: ["Escrow", "Web3", "Finance"],
    link: "https://fineace.vercel.app/",
  },
  {
    id: 7,
    title: "Quiz Challenge",
    description:
      "A dynamic, real-time quiz platform designed for interactive learning and high-engagement user challenges.",
    tags: ["React", "Gamification", "Real-time"],
    link: "https://quiz-challenge-rust.vercel.app/",
  },
];

export default function WorkGallery() {
  return (
    <section id="work" className="gallery py-32 container">
      <div className="mb-24 animate-in">
        <h2 className="title-gradient text-5xl font-display">
          Selected Proof of Work
        </h2>
        <p className="text-text-dim text-lg">
          A curated collection of digital products built with performance and
          precision.
        </p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-white/5 no-underline transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] relative hover:px-6 hover:bg-white/[0.02] hover:border-white/10 animate-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="font-display text-base opacity-20 pt-2 transition-opacity duration-300 group-hover:opacity-80 group-hover:text-accent">
              0{index + 1}
            </div>

            <div className="flex-1 flex flex-col lg:flex-row justify-between items-start gap-8">
              <div className="max-w-[600px]">
                <h3 className="text-4xl mb-4 text-white transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:translate-x-2.5 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-text-dim leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
                <div className="flex flex-wrap lg:justify-end gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 bg-white/[0.03] rounded-full text-text-dim border border-white/5 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-white flex items-center gap-2 opacity-0 -translate-x-5 transition-all duration-400 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0">
                  View Project
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
