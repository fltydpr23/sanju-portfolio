import Navigation from "@/components/layout/Navigation";
import FluidBackground from "@/components/ui/FluidBackground";
import AboutHero from "@/components/about/AboutHero";
import FeaturedPractice from "@/components/about/FeaturedPractice";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import PracticeAreas from "@/components/about/PracticeAreas";
import EducationAndCertifications from "@/components/about/EducationAndCertifications";

export const metadata = {
  title: "About Sanjana Vijai — Art Therapist & Educator",
  description: "Learn about Sanjana Vijai's therapeutic arts practice, experience, and educational background.",
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-500 relative selection:bg-clay/30 selection:text-charcoal dark:selection:bg-sage/30 dark:selection:text-sand">
      <Navigation />
      
      {/* Background layer for the entire page */}
      <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <FluidBackground />
      </div>

      <div className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <AboutHero />
        <FeaturedPractice />
        <PracticeAreas />
        <ExperienceTimeline />
        <EducationAndCertifications />
      </div>
      </main>
      
      <footer className="bg-charcoal text-sand/40 py-8 text-center text-sm border-t border-sand/10 relative z-20">
        <p>&copy; {new Date().getFullYear()} Sanjana Vijai Art Therapy. Designed for sensory safety.</p>
      </footer>
    </>
  );
}
