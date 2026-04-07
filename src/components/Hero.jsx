'use client';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-start py-16 container animate-in">
      <div className="max-w-[900px]">
        <h1 className="title-gradient text-[clamp(2.5rem,8vw,4.5rem)] mb-4 leading-[1.1]">
          Helping you turn ideas into seamless mobile and web apps.
        </h1>
        <p className="text-text-dim text-[clamp(1rem,2vw,1.25rem)] max-w-[600px] mb-10 font-normal">
          Frontend & Mobile Developer | Open Source Contributor. I bridge the gap between static design and a living product.
        </p>
        <div className="flex gap-4">
          <a 
            href="#work" 
            className="group flex items-center gap-4 text-white text-xl md:text-2xl font-display font-medium border-b-2 border-transparent hover:border-accent transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] hover:px-6 hover:text-accent"
          >
            Showcasing Proof of Work
            <svg 
              className="w-6 h-6 opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="7 13 12 18 17 13" />
              <polyline points="7 6 12 11 17 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
