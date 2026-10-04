import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import { InternshipSection } from "@/app/components/internship-section";
import { About } from "@/app/sections/about";
import { Contact } from "@/app/sections/contact";
import { Hero } from "@/app/sections/hero";
import { ProjectsSection } from "@/app/sections/projects-section";
import { SelectedWork } from "@/app/sections/selected-work";
import { Skills } from "@/app/sections/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="container-page grid gap-4 pb-10 md:grid-cols-12">
          <div className="md:col-span-5"><InternshipSection /></div>
          <div className="md:col-span-7"><Skills /></div>
        </div>
        <SelectedWork />
        <ProjectsSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
