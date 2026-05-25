import Navigation from "@/components/layout/Navigation";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FluidBackground from "@/components/ui/FluidBackground";
import BreathingLoader from "@/components/ui/BreathingLoader";
import CustomCursor from "@/components/ui/CustomCursor";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import Process from "@/components/sections/Process";
import ForParents from "@/components/sections/ForParents";
import Services from "@/components/sections/Services";
import ArtGallery from "@/components/sections/ArtGallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <BreathingLoader />
      <CustomCursor />
      <FluidBackground />
      <Navigation />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <WhoThisIsFor />
        <Process />
        <ArtGallery />
        <ForParents />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-charcoal text-sand/40 py-8 text-center text-sm border-t border-sand/10">
        <p>&copy; {new Date().getFullYear()} Sanjana Vijai Art Therapy. Designed for sensory safety.</p>
      </footer>
    </SmoothScroll>
  );
}
