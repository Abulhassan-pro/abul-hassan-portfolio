import React from 'react';

interface FooterLeesharkProps {
  brandName?: string;
  userEmail?: string;
  onNavigate?: (id: string) => void;
}

export default function FooterLeeshark({ 
  brandName = "ABUL HASSAN",
  userEmail = "abulhassan.officiall@gmail.com",
  onNavigate 
}: FooterLeesharkProps) {
  const handleNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 min-h-screen flex flex-col justify-between overflow-hidden select-none">
      {/* Background image & gradient overlay from leeshark */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url('/assets/leeshark/footer_bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
      </div>

      {/* Main Content on Top */}
      <div className="relative z-10 flex flex-col h-full justify-between flex-1">
        {/* Top block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          {/* Email & Nav */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <img
                src="/profile.png"
                alt={brandName}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.25)] shrink-0"
              />
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  Connect with me
                </p>
                <a
                  href={`mailto:${userEmail}`}
                  className="text-2xl sm:text-3xl md:text-5xl font-medium hover:text-[#ccff00] transition-colors break-words font-mono"
                >
                  {userEmail}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4 uppercase font-semibold tracking-wider">
              <a href="#home" onClick={(e) => handleNav("home", e)} className="hover:text-[#ccff00] transition-colors">
                Home
              </a>
              <a href="#about" onClick={(e) => handleNav("about", e)} className="hover:text-[#ccff00] transition-colors">
                About
              </a>
              <a href="#service" onClick={(e) => handleNav("service", e)} className="hover:text-[#ccff00] transition-colors">
                Services
              </a>
              <a href="#project" onClick={(e) => handleNav("project", e)} className="hover:text-[#ccff00] transition-colors">
                Projects
              </a>
              <a href="#testimonials" onClick={(e) => handleNav("testimonials", e)} className="hover:text-[#ccff00] transition-colors">
                Testimonials
              </a>
            </div>
          </div>

          {/* Let's build something */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 
              className="text-2xl md:text-3xl font-black uppercase mb-2 tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Let's build something
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs font-light">
              Open for performance marketing, brand identity design, and ROI-driven conversion funnels.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNav("contact", e)}
              className="bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#ccff00] hover:text-black transition-all shadow-lg cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Social Bar */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-base font-semibold uppercase tracking-wider gap-3">
          <a
            href="https://wa.me/923250943323"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abul-hassan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abulhassan-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            GitHub
          </a>
          <a
            href="mailto:abulhassan.officiall@gmail.com"
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            Direct Mail
          </a>
          <a
            href="https://abulhassan-pro.github.io/Abulhassan-pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors py-1"
          >
            Original Site
          </a>
        </div>

        {/* Giant Screen-wide Brand Name */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-[160px] md:min-h-[220px]">
          <h1 
            className="text-[14vw] md:text-[13vw] font-black leading-none tracking-tighter text-white select-none hover:text-[#ccff00] transition-colors duration-500 uppercase"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            {brandName}
          </h1>
        </div>

        {/* Copyright & Bottom Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6 border-t border-white/5">
          <p>© {new Date().getFullYear()} {brandName}. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Terms and conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
