import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";

import { Hero } from "@/app/sections/hero";
import { SelectedWork } from "@/app/sections/selected-work";
import { ProjectsSection } from "@/app/sections/projects-section";
import { EngineeringPrinciples } from "@/app/sections/engineering-principles";
import { CurrentlyBuilding } from "@/app/sections/currently-building";
import { ArchitectureGallery } from "@/app/sections/architecture-gallery";

import { About } from "@/app/sections/about";

import { Contact } from "@/app/sections/contact";
// Naya Internship component import karein (agar aapne components folder mein banaya hai)
import { InternshipSection } from "@/app/components/internship-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main className='flex flex-col'>
        <Hero />
        <SelectedWork />
        <ProjectsSection />
        <ArchitectureGallery />
        {/* Clinch Metrics Bridge Internship & Welcome Letter Section */}
        <InternshipSection />
        <EngineeringPrinciples />

        {/* Skill Lab / Currently Learning Section */}
        <CurrentlyBuilding />
        <About />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
