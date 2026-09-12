import { useState } from 'react';
import { servicesData } from '../data/leesharkData';

interface ServicesLeesharkProps {
  onNavigateToProjects?: () => void;
}

export default function ServicesLeeshark({ onNavigateToProjects }: ServicesLeesharkProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0); // First item open by default
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section 
      id="service" 
      className="min-h-screen bg-[#050505] text-white pt-20 pb-20 md:pb-28 px-5 sm:px-8 md:px-16 flex flex-col relative overflow-hidden select-none"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full pb-10 md:pb-14 z-10 gap-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3">
            02 / CORE EXPERTISE & DELIVERABLES
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            What I <span className="text-[#ccff00]">Deliver</span>
          </h2>
        </div>

        <p className="text-gray-400 text-sm sm:text-base max-w-md text-left md:text-right font-light leading-relaxed">
          Comprehensive growth services built to take brands from low visibility to high-conversion market leaders.
        </p>
      </div>

      {/* Modern Interactive Services List */}
      <div className="z-10 relative mt-6 space-y-4 max-w-7xl mx-auto w-full">
        {servicesData.map((service, index) => {
          const isOpen = activeAccordion === index || hoveredIndex === index;

          return (
            <div
              key={service.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                isOpen 
                  ? "bg-[#ccff00] text-black border-[#ccff00] shadow-[0_15px_40px_rgba(204,255,0,0.18)]" 
                  : "bg-white/[0.02] text-white border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
              }`}
              onClick={() => handleToggle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service Bar Header */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
                
                <div className="flex items-center gap-4 md:gap-8 min-w-0 flex-1">
                  {/* Number Badge */}
                  <span 
                    className={`text-lg md:text-2xl font-mono font-bold transition-colors duration-300 flex-shrink-0 px-3 py-1 rounded-lg ${
                      isOpen 
                        ? "bg-black text-[#ccff00]" 
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {service.id}
                  </span>

                  {/* Title */}
                  <h3 
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase transition-colors duration-300 ${
                      isOpen ? "text-black" : "text-white"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Status Indicator & Arrow */}
                <div className="flex items-center gap-3 self-end md:self-auto">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline-block ${
                    isOpen ? "text-black/80" : "text-gray-400"
                  }`}>
                    {isOpen ? "Expanded" : "Click to view deliverables"}
                  </span>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-black text-white rotate-90" : "bg-white/10 text-white"
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-black/10 transition-all animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    
                    {/* Left: Summary description */}
                    <div className="lg:col-span-5">
                      <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {/* Quick WhatsApp Inquiry */}
                        <a
                          href={`https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                        >
                          <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.961.947 2.796.947 3.179 0 5.765-2.587 5.766-5.766 0-3.18-2.586-5.767-5.766-5.767zm7.391 5.766c-.001 4.072-3.319 7.39-7.391 7.39-1.22 0-2.414-.302-3.483-.876l-3.864 1.013 1.033-3.766c-.636-1.103-.977-2.364-.977-3.662.001-4.073 3.32-7.391 7.392-7.391 4.072.001 7.39 3.319 7.39 7.392z" />
                          </svg>
                          <span>Inquire on WhatsApp</span>
                        </a>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onNavigateToProjects) onNavigateToProjects();
                            else {
                              const p = document.getElementById("project");
                              if (p) p.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="px-5 py-2.5 rounded-full bg-black/15 hover:bg-black/25 text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
                        >
                          View Related Work →
                        </button>
                      </div>
                    </div>

                    {/* Right: Key Deliverables Checkpoints */}
                    <div className="lg:col-span-7 bg-black/10 rounded-2xl p-5 md:p-6">
                      <span className="text-xs uppercase font-mono font-black text-black/70 tracking-wider block mb-3">
                        Included Key Capabilities & Deliverables:
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-black text-[#ccff00] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-black leading-snug">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
