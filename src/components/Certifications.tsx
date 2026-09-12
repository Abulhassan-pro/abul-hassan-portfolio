import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/certifications';
import { Certification } from '../types';
import PageTransitionPrompt from './PageTransitionPrompt';

interface CertificationsProps {
  onSelectCertificate: (cert: Certification) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Certifications({ onSelectCertificate, onNavigate }: CertificationsProps) {
  return (
    <section id="certifications" className="page-section relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 max-w-7xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 font-display">
              PAGE 04 / 07 • VERIFIED CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Formal training and validated credentials in digital marketing mastery, advanced graphic design, and academic foundations.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-7 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.12)] flex flex-col justify-between"
            >
              {/* Top Row: Icon + Status */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 group-hover:scale-105 group-hover:border-red-600/60 transition-all">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950/50 text-emerald-400 border border-emerald-800/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.status}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mt-1 flex items-center gap-2">
                  <span>{cert.issuer}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 font-normal">{cert.date}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Credential ID + Action Button */}
              <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3">
                <div className="text-[11px] text-zinc-400">
                  <span className="text-zinc-400 block font-semibold uppercase tracking-wider">Credential ID:</span>
                  <span className="font-mono text-zinc-300 font-semibold">{cert.credentialId || 'N/A'}</span>
                </div>

                <button
                  id={`btn-view-cert-${cert.id}`}
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-red-950/60 border border-zinc-800 hover:border-red-600/50 transition-all duration-200 active:scale-95"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page Transition & Status Bar */}
      <PageTransitionPrompt
        currentPageNumber="04"
        currentPageName="Certifications"
        nextPageNumber="05"
        nextPageName="Services"
        nextSectionId="services"
        onNavigate={onNavigate}
      />
    </section>
  );
}
