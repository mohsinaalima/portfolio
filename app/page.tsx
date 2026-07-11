import { Nav } from "@/components/nav";
import { Hero } from "@/app/sections/hero";
import { SelectedWork } from "@/app/sections/selected-work";
import { EngineeringPrinciples } from "@/app/sections/engineering-principles";
import { CurrentlyBuilding } from "@/app/sections/currently-building";
import { ArchitectureGallery } from "@/app/sections/architecture-gallery";
import { Journey } from "@/app/sections/journey";
import { About } from "@/app/sections/about";
import { Writing } from "@/app/sections/writing";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/components/footer";

// Section order follows docs/design-strategy-v2.md §6 (Information Architecture — V2)
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <EngineeringPrinciples />
        <CurrentlyBuilding />
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
