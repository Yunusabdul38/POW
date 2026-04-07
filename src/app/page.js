import Hero from "@/components/Hero";
import WorkGallery from "@/components/WorkGallery";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGallery />
      {/* <Philosophy /> */}
      <Contact />

      <footer className="container py-16 opacity-30 text-[0.8rem]">
        <p>&copy; {new Date().getFullYear()} Yunusabdul.</p>
      </footer>
    </main>
  );
}
