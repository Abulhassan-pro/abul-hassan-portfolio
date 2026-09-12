import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import HeroLeeshark from './components/HeroLeeshark';
import NavbarLeeshark from './components/NavbarLeeshark';
import IntroLeeshark from './components/IntroLeeshark';
import ServicesLeeshark from './components/ServicesLeeshark';
import ProjectsLeeshark from './components/ProjectsLeeshark';
import TestimonialsLeeshark from './components/TestimonialsLeeshark';
import ContactLeeshark from './components/ContactLeeshark';
import FooterLeeshark from './components/FooterLeeshark';
import ComingSoonModal from './components/ComingSoonModal';
import CustomCursor from './components/CustomCursor';
import HollywoodCinemaAtmosphere from './components/HollywoodCinemaAtmosphere';
import PremiumPreloader from './components/PremiumPreloader';
import { LeesharkProject } from './data/leesharkData';

export default function App() {
  const brandName = "ABUL HASSAN";
  const userEmail = "abulhassan.officiall@gmail.com";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<LeesharkProject | null>(null);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] font-sans antialiased overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      {/* Luxury Professional Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <PremiumPreloader
            brandName={brandName}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Custom Circular Smooth Physics Cursor */}
      <CustomCursor />

      {/* Hollywood Cinematic Blockbuster Atmosphere & HUD */}
      <HollywoodCinemaAtmosphere />

      {/* Auto-Hiding Floating Navbar */}
      <NavbarLeeshark
        brandName={brandName}
        onNavigate={handleNavigate}
      />

      {/* Main Flow Matching portfolio-leeshark.vercel.app */}
      <main>
        {/* 1. Preloader & Hero Section */}
        <HeroLeeshark
          brandName={brandName}
          onNavigate={handleNavigate}
        />

        {/* 2. Intro Section with 3D Graphic, Bio Card & 4-Tier Opposite Infinite Marquees */}
        <IntroLeeshark
          brandName={brandName}
        />

        {/* 3. Services: "WHAT WE CAN DO" with Neon #ccff00 Hover Accordion */}
        <ServicesLeeshark
          onNavigateToProjects={() => handleNavigate('project')}
        />

        {/* 4. Projects: "Selected work" with Alternating Zig-Zag Cards */}
        <ProjectsLeeshark />

        {/* 5. Testimonials: Client feedback in sliding carousel format */}
        <TestimonialsLeeshark 
          onNavigateToContact={() => handleNavigate('contact')} 
        />

        {/* 6. Contact: "Get in touch" with Background Video, Direct Links & Form */}
        <ContactLeeshark
          userEmail={userEmail}
        />
      </main>

      {/* 7. Massive Minimalist Footer with footer_bg.png, Socials & Giant Typography */}
      <FooterLeeshark
        brandName={brandName}
        userEmail={userEmail}
        onNavigate={handleNavigate}
      />

      {/* Fullscreen Coming Soon Modal (matches Leeshark's 'Kc' component) */}
      {showComingSoon && (
        <ComingSoonModal
          onBack={() => {
            setShowComingSoon(false);
            setActiveProject(null);
          }}
        />
      )}
    </div>
  );
}

