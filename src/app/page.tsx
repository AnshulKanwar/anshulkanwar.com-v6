import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="antialiased bg-gradient-radial text-violet">
      <div className="max-w-3xl mx-6 md:mx-auto pb-32">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
