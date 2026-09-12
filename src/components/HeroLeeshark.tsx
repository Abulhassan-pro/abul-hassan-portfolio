import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, MessageCircle, Mail, Linkedin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { userProfileImageRemote, userPhoneNumber, userWhatsAppNumber, userLinkedInUrl } from '../data/leesharkData';

interface HeroLeesharkProps {
  onPreloadComplete?: () => void;
  brandName?: string;
  onNavigate?: (id: string) => void;
}

export default function HeroLeeshark({ 
  brandName = "ABUL HASSAN",
  onNavigate 
}: HeroLeesharkProps) {
  const handleScroll = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreCompetencies = [
    "Meta Ads Architecture",
    "4.5x ROAS Scaling",
    "Adobe Photoshop Mastery",
    "Creative Direction & Art",
    "Conversion Rate Optimization"
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-12 bg-[#060709] text-[#ededed] overflow-hidden"
    >
      {/* 1. Subtle Architectural Grid (Fine, mature, non-distracting) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      {/* 2. Controlled Studio Lighting (Restrained, dark luxury atmosphere) */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#ccff00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Main Hero Workspace */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Narrative & Authority (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Practice Status Indicator */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]" />
              </span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-medium">
                AVAILABLE FOR SELECT Q2/Q3 PARTNERSHIPS
              </span>
            </div>

            {/* Principal Identity & Title */}
            <div className="space-y-3 mb-6">
              <span className="block text-xs sm:text-sm font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium">
                PERFORMANCE MARKETING & VISUAL ARCHITECTURE
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04] font-display">
                {brandName}
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light tracking-tight">
                Senior Performance Marketer <span className="text-zinc-600 mx-1.5">•</span> Creative Director
              </div>
            </div>

            {/* Authoritative Value Statement */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed mb-8">
              Partnering with direct-to-consumer brands and high-growth ventures to engineer scalable customer acquisition systems. Specializing in data-driven <span className="text-white font-medium">Meta Ads execution</span>, blended CAC reduction, and executive-level <span className="text-white font-medium">brand visual identity design</span>.
            </p>

            {/* Core Competencies Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {coreCompetencies.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1 rounded-md bg-white/[0.02] border border-white/[0.08] text-zinc-300 text-xs font-mono tracking-wide"
                >
                  {comp}
                </span>
              ))}
            </div>

            {/* Professional Action Controls */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              {/* Primary CTA */}
              <a
                href="#project"
                onClick={(e) => handleScroll("project", e)}
                className="px-7 py-3.5 rounded-lg bg-white hover:bg-[#ccff00] text-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-200 flex items-center gap-2.5 shadow-xl cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={(e) => handleScroll("contact", e)}
                className="px-7 py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/15 hover:border-white/30 font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Initiate Consultation</span>
              </a>
            </div>

            {/* Verified Direct Channels Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] w-full max-w-2xl text-xs font-mono text-zinc-400">
              <span className="text-zinc-500 uppercase tracking-widest text-[10px]">
                DIRECT CHANNELS:
              </span>

              <a
                href={`https://wa.me/${userWhatsAppNumber}?text=Hello%20Abul%20Hassan%2C%20I%20would%20like%20to%20discuss%20a%20performance%20marketing%20or%20design%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp ({userPhoneNumber})</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={userLinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll("contact", e)}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Inquiries</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Executive Portrait & Proof (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Refined Framing Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0c0d11] border border-white/10 shadow-2xl">
                
                {/* Header Metadata Bar */}
                <div className="px-5 py-3 border-b border-white/[0.08] flex items-center justify-between text-[10px] font-mono tracking-wider text-zinc-400 uppercase bg-black/40">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                    <span className="text-zinc-300 font-medium">ABUL HASSAN // PORTFOLIO</span>
                  </div>
                  <span>REF. AH-2026</span>
                </div>

                {/* Portrait Display */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#050608]">
                  <img
                    src="/profile.png"
                    alt="Abul Hassan - Senior Performance Marketer & Creative Director"
                    className="w-full h-full object-cover object-top filter grayscale-[25%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = userProfileImageRemote;
                    }}
                  />
                  
                  {/* Subtle Studio Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d11] via-transparent to-black/20 pointer-events-none" />

                  {/* Top-Right Metric Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-right shadow-lg pointer-events-none">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Average ROAS</div>
                    <div className="text-sm font-bold text-[#ccff00] font-mono">4.5x Scaled</div>
                  </div>

                  {/* Bottom Credentials Plate */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0c0d11] via-[#0c0d11]/90 to-transparent">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                      <span className="text-xs font-semibold text-white tracking-wide uppercase">
                        Verified Meta Specialist
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                      Performance Marketing • Creative Architecture • Full-Funnel Growth
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="p-4 border-t border-white/[0.08] bg-black/50 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                    <span>Global Client Delivery</span>
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Remote & On-Site
                  </span>
                </div>
              </div>

              {/* Ambient Glow Under Portrait */}
              <div className="absolute -inset-4 -z-10 bg-white/[0.015] rounded-3xl blur-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* 4. Executive Key Metrics Grid (Under Hero) */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">
              4.5<span className="text-[#ccff00] font-normal">x</span>
            </div>
            <div className="text-xs font-medium text-zinc-300 uppercase tracking-wider">
              Average ROAS
            </div>
            <div className="text-[11px] text-zinc-500">
              Across scaling client Meta ad accounts
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">
              $500<span className="text-[#ccff00] font-normal">K+</span>
            </div>
            <div className="text-xs font-medium text-zinc-300 uppercase tracking-wider">
              Ad Spend Managed
            </div>
            <div className="text-[11px] text-zinc-500">
              Deploying high-efficiency conversion funnels
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">
              35<span className="text-[#ccff00] font-normal">%</span>
            </div>
            <div className="text-xs font-medium text-zinc-300 uppercase tracking-wider">
              Blended CAC Reduction
            </div>
            <div className="text-[11px] text-zinc-500">
              Through strategic creative hook testing
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono">
              100<span className="text-[#ccff00] font-normal">%</span>
            </div>
            <div className="text-xs font-medium text-zinc-300 uppercase tracking-wider">
              Delivery Standards
            </div>
            <div className="text-[11px] text-zinc-500">
              Proven track record in brand & ad execution
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
