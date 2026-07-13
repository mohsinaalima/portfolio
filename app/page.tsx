import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";

import { Hero } from "@/app/sections/hero";
import { SelectedWork } from "@/app/sections/selected-work";
import { EngineeringPrinciples } from "@/app/sections/engineering-principles";
import { CurrentlyBuilding } from "@/app/sections/currently-building";
import { ArchitectureGallery } from "@/app/sections/architecture-gallery";
import { Journey } from "@/app/sections/journey";
import { About } from "@/app/sections/about";
import { Writing } from "@/app/sections/writing";
import { Contact } from "@/app/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <SelectedWork />
        <EngineeringPrinciples />
        {/* Momentum Section added here */}
        <CurrentlyBuilding />
        {/* Architecture Gallery added here */}
        <ArchitectureGallery />
        <Journey />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}