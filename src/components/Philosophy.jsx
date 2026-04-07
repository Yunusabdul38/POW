'use client';

export default function Philosophy() {
  const points = [
    {
      title: "Bridge the Gap",
      description: "Static designs are just the beginning. I breathe life into them, ensuring the transition from a vision to a living, breathing product is seamless and technically sound."
    },
    {
      title: "Solve Friction",
      description: "I don't just solve bugs; I solve friction. Every choice is focused on eliminating the subtle obstacles that cause users to abandon a product."
    },
    {
      title: "User-Centric Logic",
      description: "Whether it's a seamless transition or a faster load time, every technical choice I make is focused on one goal: creating a product people love."
    }
  ];

  return (
    <section className="py-32 container animate-in">
      <div className="mb-24">
        <h2 className="title-gradient text-5xl font-display max-w-2xl">
          The Experience Matters More Than the Code.
        </h2>
        <p className="text-text-dim text-xl leading-relaxed mt-6 max-w-2xl">
          Most digital products fail not because the code is bad, but because the experience is frustrating. 
          I build with the person on the other side of the screen in mind.
        </p>
      </div>

      <div className="flex flex-col">
        {points.map((point, index) => (
          <div 
            key={point.title} 
            className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] hover:px-6 hover:bg-white/[0.02] hover:border-white/10"
          >
            <div className="font-display text-base opacity-20 pt-2 transition-opacity duration-300 group-hover:opacity-80 group-hover:text-accent whitespace-nowrap">
              VALUE 0{index + 1}
            </div>
            
            <div className="flex-1 max-w-[800px]">
              <h3 className="text-3xl mb-4 text-white transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:translate-x-2.5 group-hover:text-accent">
                {point.title}
              </h3>
              <p className="text-text-dim leading-relaxed text-lg">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
