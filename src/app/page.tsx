import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { Story } from "@/components/sections/Story";
import { Process } from "@/components/sections/Process";
import { Packages } from "@/components/sections/Packages";
import { FoodExperience } from "@/components/sections/FoodExperience";
import { EventTypes } from "@/components/sections/EventTypes";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cannoli } from "@/components/sections/Cannoli";
import { Setup } from "@/components/sections/Setup";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Story />
      <Process />
      <Packages variant="preview" />
      <FoodExperience />
      <EventTypes />
      <GalleryPreview />
      <Testimonials />
      <Cannoli variant="teaser" />
      <Setup variant="teaser" />
      <FinalCTA />
    </>
  );
}
