import React, { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

interface NavbarLeesharkProps {
  brandName?: string;
  onNavigate?: (id: string) => void;
}

export default function NavbarLeeshark({ 
  brandName = "ABUL HASSAN",
  onNavigate 
}: NavbarLeesharkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#service", id: "service" },
    { label: "Projects", href: "#project", id: "project" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-4 md:px-10 md:py-4 transition-all duration-300 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          mobileMenuOpen 
            ? "bg-black/95 backdrop-blur-xl" 
            : "bg-black/75 backdrop-blur-md border-b border-white/10 shadow-lg"
        }`}
      >
        {/* Brand Name & Avatar */}
        <div className="flex items-center gap-3 relative z-50">
          <button
            onClick={() => {
              if (onNavigate) onNavigate("about");
              else {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative group cursor-pointer focus:outline-none flex items-center gap-3"
            title="View Profile / About Abul Hassan"
          >
            <div className="relative">
              <img
                src="/profile.png"
                alt={brandName}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-[#ccff00]/70 ring-2 ring-[#ccff00]/20 shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://relaxed-aqua-xqyiyoce.edgeone.dev/file.png";
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#ccff00] rounded-full ring-2 ring-black animate-pulse" />
            </div>
            
            <div className="text-left">
              <span 
                className="text-white font-extrabold text-base md:text-lg tracking-wider uppercase block group-hover:text-[#ccff00] transition-colors"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              >
                {brandName}
              </span>
              <span className="text-[10px] font-mono text-gray-400 block tracking-widest uppercase">
                Digital Marketer & Designer
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(item.id, e)}
              className="text-gray-300 hover:text-[#ccff00] text-xs uppercase tracking-wider font-bold transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Quick Actions: WhatsApp, LinkedIn & Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick WhatsApp Link */}
          <a
            href="https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider shadow-sm"
            title="Chat on WhatsApp (+92 325 0943323)"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.961.947 2.796.947 3.179 0 5.765-2.587 5.766-5.766 0-3.18-2.586-5.767-5.766-5.767zm7.391 5.766c-.001 4.072-3.319 7.39-7.391 7.39-1.22 0-2.414-.302-3.483-.876l-3.864 1.013 1.033-3.766c-.636-1.103-.977-2.364-.977-3.662.001-4.073 3.32-7.391 7.392-7.391 4.072.001 7.39 3.319 7.39 7.392z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Quick LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/abul-hassan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider shadow-sm"
            title="View LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick("contact", e)}
            className="px-5 py-1.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-transparent hover:text-[#ccff00] transition-all duration-300 shadow-md cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden text-white cursor-pointer hover:text-[#ccff00] relative z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#ccff00] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 lg:hidden text-center px-6 animate-in fade-in duration-300">
          <span className="text-[#ccff00] text-xs uppercase tracking-widest font-mono font-bold mb-2">
            Navigation
          </span>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(item.id, e)}
              className="text-2xl sm:text-3xl font-black tracking-tight text-white hover:text-[#ccff00] transition-colors uppercase cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          
          <div className="mt-4 flex flex-col items-center gap-3 w-full max-w-xs">
            <a
              href="https://wa.me/923250943323"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-emerald-600 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abul-hassan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#0A66C2] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleLinkClick("contact", e)}
              className="w-full py-3 rounded-full bg-[#ccff00] text-black font-extrabold text-sm tracking-wider uppercase"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
