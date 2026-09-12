import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Maximize2, MessageCircle, X } from 'lucide-react';
import { projectsData, LeesharkProject } from '../data/leesharkData';

interface ProjectsLeesharkProps {
  onOpenDemo?: (project: LeesharkProject) => void;
  onOpenComingSoon?: () => void;
}

export default function ProjectsLeeshark({ 
  onOpenDemo, 
}: ProjectsLeesharkProps) {
  const [selectedProject, setSelectedProject] = useState<LeesharkProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Digital Marketing", "Graphic Design"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleDemoClick = (project: LeesharkProject) => {
    if (onOpenDemo) {
      onOpenDemo(project);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section 
      id="project" 
      className="bg-[#050505] w-full text-white pt-20 pb-28 px-5 sm:px-8 md:px-16 relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 lg:gap-12 mb-14 lg:mb-20 max-w-7xl mx-auto">
        {/* Left: Giant Heading */}
        <div className="w-full lg:w-7/12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3">
            03 / SELECTED PORTFOLIO WORK
          </div>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Engineered For <span className="text-[#ccff00]">Impact</span> & Scale
          </h2>
        </div>

        {/* Right: Intro text & Filter Pills */}
        <div className="w-full lg:w-5/12 flex flex-col items-start lg:items-end">
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mb-6 text-left lg:text-right">
            Curated commercial works across Meta Ads growth blueprints, iconic brand apparel (Gymshark), luxury automotive (Porsche), gourmet food, and master-level creative art.
          </p>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#ccff00] text-black shadow-lg"
                    : "bg-white/5 border border-white/15 text-gray-300 hover:border-white/40 hover:text-white"
                }`}
              >
                {cat} ({cat === "All" ? projectsData.length : projectsData.filter(p => p.category === cat).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Project Showcases */}
      <div className="flex flex-col gap-16 lg:gap-28 w-full max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between gap-8 lg:gap-14 w-full p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ccff00]/60 transition-all duration-500 group shadow-2xl relative overflow-hidden`}
            >
              {/* Hollywood Card Ambient Backlight Glow on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-[#ccff00]/0 group-hover:bg-[#ccff00]/5 blur-2xl transition-all duration-700 pointer-events-none" />

              {/* Project Image Box */}
              <div 
                data-cursor="view"
                data-project-card="true"
                className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/11] sm:aspect-[16/10] bg-[#0c0d10] rounded-2xl border border-white/15 shadow-2xl cursor-pointer"
                onClick={() => handleDemoClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  onError={(e) => {
                    if (project.fallbackImage && e.currentTarget.src !== project.fallbackImage) {
                      e.currentTarget.src = project.fallbackImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                {/* Sweeping Anamorphic Light Flare on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ccff00]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none -skew-x-12" />

                {/* Category Badge overlay on top-left */}
                {project.category && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 bg-black/90 backdrop-blur-md rounded-full text-[11px] text-[#ccff00] border border-[#ccff00]/40 font-mono uppercase tracking-wider font-bold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Top-Right Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#ccff00] flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Tech Pills Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                  {project.tags?.slice(0, 4).map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 bg-black/85 backdrop-blur-md rounded-lg text-[10px] text-gray-200 border border-white/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-6/12 flex flex-col items-start">
                
                {/* Index & Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                    <span>Case Study 0{index + 1}</span>
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase mb-4 group-hover:text-[#ccff00] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {project.name}
                </h3>

                {/* Project Plain English Description */}
                <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tools Used Chips */}
                {project.tools && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    onClick={() => handleDemoClick(project)}
                    className="cursor-pointer px-6 py-3 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs sm:text-sm font-extrabold hover:bg-[#b3e600] transition-all inline-flex items-center gap-2 shadow-lg uppercase tracking-wider"
                  >
                    <span>View Case Study</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer px-6 py-3 rounded-full border border-white/20 text-white text-xs sm:text-sm font-bold hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 uppercase tracking-wider"
                    >
                      <svg className="w-4 h-4 text-[#ccff00]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>Watch Motion Demo</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20love%20your%20project%20${encodeURIComponent(project.name)}.%20Can%20we%20discuss%20something%20similar%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-2 uppercase tracking-wider border border-white/10"
                  >
                    <span>Inquire Similar</span>
                  </a>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#111] border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase font-mono">
                {selectedProject.category || "Case Study"}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-xs uppercase font-mono">Abul Hassan Verified</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase">
              {selectedProject.name}
            </h3>

            <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/80 flex items-center justify-center p-2 sm:p-4 max-h-[65vh]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="w-auto h-auto max-h-[58vh] max-w-full object-contain rounded-xl shadow-2xl" 
                onError={(e) => {
                  if (selectedProject.fallbackImage && e.currentTarget.src !== selectedProject.fallbackImage) {
                    e.currentTarget.src = selectedProject.fallbackImage;
                  }
                }}
              />
            </div>
            
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-[#ccff00] font-mono font-bold mb-2">
                Executive Overview & Strategy:
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {selectedProject.overview || selectedProject.description}
              </p>
            </div>

            {/* Tools Used */}
            {selectedProject.tools && selectedProject.tools.length > 0 && (
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-2">
                  Key Tools & Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-[#ccff00] font-mono font-semibold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/923250943323?text=Hi%20Abul%20Hassan%2C%20I%20reviewed%20your%20case%20study%20"${encodeURIComponent(selectedProject.name)}"%20and%20want%20to%20discuss%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center hover:bg-[#20ba5a] flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss On WhatsApp</span>
              </a>

              <a
                href={selectedProject.fallbackImage || selectedProject.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#ccff00]" />
                <span>Open Full Image</span>
              </a>

              {selectedProject.videoUrl && (
                <a
                  href={selectedProject.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider text-center hover:bg-gray-200"
                >
                  Watch Video
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
