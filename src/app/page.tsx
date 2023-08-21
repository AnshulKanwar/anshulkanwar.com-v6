import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-3xl mx-6 md:mx-auto pb-32">
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
