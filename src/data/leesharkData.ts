export interface LeesharkService {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  buttonText?: string;
}

export interface LeesharkProject {
  id: string;
  name: string;
  category?: string;
  highlightWord?: string;
  titleLines: string[];
  description: string;
  image: string;
  fallbackImage?: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
  overview?: string;
  tools?: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  school: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  metric: string;
  service: string;
  quote: string;
}

export const userProfileImage = "/profile.png";
export const userProfileImageRemote = "https://applicable-peach-qkjy4t6m.edgeone.dev/file.png";
export const userPhoneNumber = "+92 325 0943323";
export const userWhatsAppNumber = "923250943323";
export const userLinkedInUrl = "https://www.linkedin.com/in/abul-hassan1/";
export const userGitHubUrl = "https://github.com/Abulhassan-pro";

export const servicesData: LeesharkService[] = [
  {
    id: "01",
    title: "DIGITAL MARKETING & PERFORMANCE STRATEGY",
    description: "Data-driven, ROI-focused performance marketing engineered to scale businesses with high-converting customer acquisition funnels, laser-targeted Meta ads, and algorithmic growth strategies.",
    capabilities: [
      "SEO (Search Engine Optimization) & Organic Growth",
      "SEM & Google Performance Search Ads",
      "SMM (Social Media Marketing) & Content Systems",
      "Meta Ads Manager & 4.5x ROAS Scaling Campaigns",
      "Full-Funnel Retargeting & Meta Conversion API",
      "Growth Hacking, Data Analytics & CAC Reduction"
    ],
    buttonText: "VIEW PROJECTS"
  },
  {
    id: "02",
    title: "GRAPHIC DESIGNING & VISUAL ALCHEMY",
    description: "High-fidelity visual design that commands authority and drives conversion. From complete brand identities to cinematic digital art, I craft aesthetics that differentiate your brand.",
    capabilities: [
      "Adobe Photoshop (Mastery Level)",
      "High-End Brand Identity & Visual Positioning",
      "AI Visual Synthesis (Midjourney & Stable Diffusion)",
      "Cinematic Digital Art & Hero Campaign Visuals",
      "Social Media Ad Creatives Engineered to Convert",
      "Logo, Typography & Vector Design Systems"
    ]
  },
  {
    id: "03",
    title: "AI NEURAL LOGIC & PROMPT SYNTHESIS",
    description: "Leveraging cutting-edge generative AI models to forecast market trends, synthesize bespoke assets, and outpace competition with algorithmic speed and machine precision.",
    capabilities: [
      "Generative AI Prompt Engineering & Synthesis",
      "Synthetic Media Generation (Midjourney, Runway)",
      "AI-Augmented Copywriting & Strategic Ad Hooks",
      "Google Gemini & Claude High-Fidelity Logic",
      "ChatGPT & Multi-Modal Creative Automation",
      "Neural Market Research & Trend Discovery"
    ]
  },
  {
    id: "04",
    title: "HIGH-CONVERSION FUNNEL ENGINEERING",
    description: "Strategic marketing funnels that reduce CAC and maximize customer lifetime value through data-backed testing, behavioral retargeting, and frictionless user journeys.",
    capabilities: [
      "Conversion Rate Optimization (CRO)",
      "Multi-Stage Retargeting & Sequence Architecture",
      "Creative & Copy A/B Split Testing Protocols",
      "Meta Pixel & Server-Side Conversions Tracking",
      "Audience Persona Segmentation & High-Intent Target Pools",
      "ROAS Scaling from Testing to Global Budgeting"
    ]
  },
  {
    id: "05",
    title: "CINEMATIC LUXURY & BRAND ARCHETYPING",
    description: "Bespoke high-end branding concepts that blend elegance with algorithmic reach, tailored for luxury, fashion, lifestyle, and automotive brands.",
    capabilities: [
      "Luxury Brand Archetyping & Positioning",
      "Hyper-Realistic Conceptual Product Mockups",
      "Aerodynamic, High-Octane Automotive Visuals",
      "Motion Marketing Assets with Jump-Share Pacing",
      "Atmospheric Color Grading & Cinematic Lighting",
      "Global Scale Digital Marketing Alignment"
    ]
  },
  {
    id: "06",
    title: "ACADEMIC & CERTIFIED FOUNDATIONS",
    description: "Backed by rigorous professional certifications and formal training across marketing, strategic brand identity, and generative creative disciplines.",
    capabilities: [
      "Bano Qabil Certified in Digital Marketing (Mastery)",
      "Udemy Certified in Graphic Design (Professional)",
      "College Education (Forces Group of Colleges, 2024-2026)",
      "Continuous Algorithmic Learning & Native Advantage",
      "18-Year Native Advantage: Grew Up with Algorithms",
      "Precision Engineered in Lahore & Karachi, Pakistan"
    ]
  }
];

export const projectsData: LeesharkProject[] = [
  {
    id: "01",
    name: "Smooth & Radiant Skincare Campaign",
    category: "Digital Marketing",
    highlightWord: "Skincare",
    titleLines: ["SMOOTH & RADIANT ", "SKINCARE CAMPAIGN"],
    description: "High-impact promotional campaign creative for luxury cosmetics and skincare, featuring 50% OFF discount architecture, glowing typography, and high-conversion direct response layout.",
    image: "/projects/work_1.png",
    fallbackImage: "https://prospective-orange-sxvlv5d0.edgeone.dev/file.png",
    tags: ["Meta Ad Creative", "Cosmetics Branding", "Photoshop", "Conversion Promo"],
    tools: ["Adobe Photoshop", "Direct-Response Ad Strategy", "Conversion Design"],
    overview: "Engineered for high-performing social media and Meta ad feeds. Blends ethereal pastel lighting, silky product textures, and high-legibility typographic hierarchies to maximize conversion rate on seasonal sales promotions."
  },
  {
    id: "02",
    name: "Gymshark: Built For Real Progress",
    category: "Graphic Design",
    highlightWord: "Gymshark",
    titleLines: ["GYMSHARK: BUILT FOR ", "REAL PROGRESS"],
    description: "Bold, adrenaline-fueled athletic apparel campaign for Gymshark featuring dynamic athletic lighting, 4-way stretch feature callouts, and modern urban gym aesthetics.",
    image: "/projects/work_2.png",
    fallbackImage: "https://notable-rose-juix3wrd.edgeone.dev/file.png",
    tags: ["Athletic Apparel", "Brand Advertising", "Performance Wear", "Photoshop Art"],
    tools: ["Adobe Photoshop", "Brand Archetyping", "Commercial Poster"],
    overview: "A showcase in premium sportswear brand marketing. Centers on bold typography ('TRAIN / LIFT / LIVE'), moisture-wicking technical highlights, and high-contrast dramatic studio lighting to engage fitness audiences and drive apparel conversions."
  },
  {
    id: "03",
    name: "The Ultimate Gourmet Burger Campaign",
    category: "Graphic Design",
    highlightWord: "Gourmet",
    titleLines: ["THE ULTIMATE GOURMET ", "BURGER CAMPAIGN"],
    description: "Mouth-watering commercial food advertisement celebrating artisanal grilled burgers, fresh crispy fries, and thick shakes with vibrant warmth and fast delivery branding.",
    image: "/projects/work_3.png",
    fallbackImage: "https://subtle-coffee-k65ay2eb.edgeone.dev/file.png",
    tags: ["Food & Beverage", "Appetite Appeal", "Promotional Poster", "Menu Marketing"],
    tools: ["Photoshop Composite", "Color Grading", "Fast Food Marketing"],
    overview: "Created to induce high-intent cravings across food delivery and restaurant apps. Uses warm ember tones, crisp ingredient callouts, and energetic badge typography to boost order volumes and ad click-through rates."
  },
  {
    id: "04",
    name: "Porsche: Driven By More",
    category: "Graphic Design",
    highlightWord: "Porsche",
    titleLines: ["PORSCHE: DRIVEN ", "BY MORE"],
    description: "Ultra-premium editorial automotive commercial layout showcasing the iconic Porsche silhouette, driver-focused luxury cockpit details, and German engineering precision.",
    image: "/projects/work_4.png",
    fallbackImage: "https://normal-apricot-imhnx6ty.edgeone.dev/file.png",
    tags: ["Automotive Luxury", "Supercar Marketing", "Editorial Layout", "Aerodynamic Design"],
    tools: ["Adobe Photoshop", "Automotive Retouching", "Luxury Branding"],
    overview: "Precision-crafted for luxury automotive marketing. Explores dark studio rim lighting, aerodynamic highlight tracing, and crisp technical feature breakdowns ('Iconic Rear with a Purpose', 'Performance Meets Precision')."
  },
  {
    id: "05",
    name: "Warm Earth Luxury Fashion Series",
    category: "Graphic Design",
    highlightWord: "Editorial",
    titleLines: ["WARM EARTH LUXURY ", "FASHION SERIES"],
    description: "Sophisticated warm-neutral lifestyle and fashion visual campaign built with natural organic lighting, elegant earthy color palettes, and contemporary minimalist framing.",
    image: "/projects/work_5.png",
    fallbackImage: "https://unsightly-orange-qibccmxh.edgeone.dev/file.png",
    tags: ["Fashion Editorial", "Warm Tones", "Lifestyle Branding", "Social Story"],
    tools: ["Adobe Photoshop", "Editorial Grading", "Creative Direction"],
    overview: "Developed for high-end boutique apparel and luxury accessories. Emphasizes subtle organic textures, sophisticated tonal warmth, and clean negative space tailored for 9:16 mobile and social feed campaigns."
  },
  {
    id: "06",
    name: "Final Frontier: Deep Space Discovery",
    category: "Graphic Design",
    highlightWord: "Frontier",
    titleLines: ["FINAL FRONTIER: ", "DEEP SPACE DISCOVERY"],
    description: "Cinematic science-fiction brand concept exploring deep space discovery, cosmic atmospheric grading, and heroic astronaut scale against monumental extraterrestrial vistas.",
    image: "/projects/work_6.png",
    fallbackImage: "https://external-maroon-g2bnwwwj.edgeone.dev/file.png",
    tags: ["Sci-Fi Concept", "Atmospheric Art", "Matte Painting", "Visual Synthesis"],
    tools: ["Photoshop Matte Painting", "Midjourney / AI Synthesis", "Cinematic Lighting"],
    overview: "Pushing the outer boundaries of visual synthesis and storytelling. Features cinematic volumetric glows, planetary particle fields, and bold narrative typography ('Exploring the Final Frontier with Unwavering Courage')."
  },
  {
    id: "07",
    name: "Artisanal Black Truffle Gourmet Identity",
    category: "Graphic Design",
    highlightWord: "Truffle",
    titleLines: ["ARTISANAL BLACK ", "TRUFFLE IDENTITY"],
    description: "Prestigious culinary brand packaging and advertising concept infused with cold-pressed black truffle oil, emphasizing sustainable sourcing and Michelin-tier craftsmanship.",
    image: "/projects/work_7.png",
    fallbackImage: "https://massive-purple-jwitjq7k.edgeone.dev/file.png",
    tags: ["Packaging Design", "Gourmet Artisan", "Sustainable Sourcing", "Luxury Food"],
    tools: ["Product Mockup", "Packaging Typography", "Adobe Photoshop"],
    overview: "Created for premium organic and specialty food brands. Blends deep obsidian background tones with gold accents, sustainable certification marks, and elegant botanical typography."
  },
  {
    id: "08",
    name: "B2B Tech Meta Ads 2026 Blueprint",
    category: "Digital Marketing",
    highlightWord: "Blueprint",
    titleLines: ["B2B TECH META ADS ", "2026 BLUEPRINT"],
    description: "Strategic landscape marketing masterclass banner outlining precision B2B Meta Ads frameworks, server-side tracking, and scale systems for tech software firms in 2026.",
    image: "/projects/work_8.png",
    fallbackImage: "https://drab-red-9gx2lzgy.edgeone.dev/file.png",
    tags: ["B2B Acquisition", "Meta Ads Manager", "Growth Blueprint", "SaaS Marketing"],
    tools: ["Meta Ads Manager", "Full-Funnel Architecture", "Graphic Layout"],
    overview: "A high-conversion marketing blueprint designed to educate founders and marketing directors on scaling customer acquisition for tech software companies with predictable 4.5x+ ROAS."
  },
  {
    id: "09",
    name: "Tech Firm Growth Engine: Meta Ads Scale",
    category: "Digital Marketing",
    highlightWord: "Growth",
    titleLines: ["TECH FIRM GROWTH: ", "META ADS SCALE"],
    description: "Enterprise presentation and digital advertising banner showcasing scalable customer acquisition funnels, behavioral retargeting sequences, and ROI optimization for technology firms.",
    image: "/projects/work_9.png",
    fallbackImage: "https://spare-moccasin-pywksjmt.edgeone.dev/file.png",
    tags: ["Performance Marketing", "Meta Ads", "CAC Reduction", "Revenue Funnel"],
    tools: ["Meta Pixel CAPI", "A/B Creative Strategy", "Data Analytics"],
    overview: "Engineered specifically to convert high-ticket B2B decision-makers. Highlights data-driven budget allocation models, multi-touch attribution, and rapid creative testing cycles that reduce CAC by up to 35%."
  },
  {
    id: "10",
    name: "Modern Minimalist Visual Expression",
    category: "Graphic Design",
    highlightWord: "Minimalist",
    titleLines: ["MODERN MINIMALIST ", "VISUAL EXPRESSION"],
    description: "Refined, contemporary minimalist creative campaign featuring subtle balanced contrasts, cool slate-and-terracotta studio tones, and architectural layout discipline.",
    image: "/projects/work_10.png",
    fallbackImage: "https://pleased-coffee-qc9mania.edgeone.dev/file.png",
    tags: ["Minimalist Identity", "Contemporary Art", "Editorial Design", "Studio Lighting"],
    tools: ["Adobe Photoshop", "Visual Hierarchy", "Contemporary Typography"],
    overview: "A testament to the power of clean restraint. Built for contemporary lifestyle labels and creative agencies seeking a calm, authoritative visual footprint that cuts through noisy feeds."
  },
  {
    id: "11",
    name: "TechStyle: Next-Gen E-Commerce Fashion",
    category: "Digital Marketing",
    highlightWord: "TechStyle",
    titleLines: ["TECHSTYLE: NEXT-GEN ", "E-COMMERCE FASHION"],
    description: "High-engagement social commerce creative for modern TechWear streetwear, integrating real-time community engagement UI, product showcases, and viral feed optimization.",
    image: "/projects/work_11.png",
    fallbackImage: "https://grubby-gold-4lcuf2vc.edgeone.dev/file.png",
    tags: ["E-Commerce Social", "TechWear Fashion", "Social Proof Ad", "Instagram Feed"],
    tools: ["Social Ad Strategy", "Photoshop UI Design", "Meta Ads Feed"],
    overview: "Optimized for Instagram and Meta mobile feeds. Integrates viral social proof mechanics directly into the creative layout, driving 3.8x higher engagement and click-through rates."
  }
];

export const marqueeFrontend = [
  "SEO Optimization",
  "SEM & Google Ads",
  "SMM Performance",
  "Meta Ads Manager",
  "4.5x ROAS Scaling",
  "Conversion API",
  "Growth Hacking",
  "Content Strategy",
  "Data Analytics"
];

export const marqueeBackend = [
  "Adobe Photoshop",
  "Brand Identity",
  "Visual Alchemy",
  "Cinematic Digital Art",
  "Logo Conception",
  "Visual Archetyping",
  "Ad Creative Design",
  "Conversion Graphics",
  "Vector Mastery"
];

export const marqueeAI = [
  "Midjourney Master",
  "Google Gemini",
  "Claude AI",
  "Runway Gen-2",
  "ChatGPT",
  "ElevenLabs",
  "Stable Diffusion",
  "Prompt Engineering",
  "Neural Logic"
];

export const marqueeTools = [
  "Meta Ads Manager",
  "Adobe Photoshop",
  "Meta Pixel Setup",
  "Conversions API",
  "A/B Split Testing",
  "Google Analytics",
  "Canva Pro",
  "Figma",
  "Jumpshare"
];

export const academicEducation: EducationItem[] = [
  {
    year: "2024 - 2026",
    title: "College Education",
    school: "Forces Group of Colleges"
  },
  {
    year: "2012 - 2024",
    title: "School Education",
    school: "Saviour"
  },
  {
    year: "2024",
    title: "Digital Marketing",
    school: "Bano Qabil Certified (Mastery)"
  },
  {
    year: "2024",
    title: "Graphic Design",
    school: "Udemy Certified (Professional)"
  }
];

export const introWordsList = [
  { text: "Hey," },
  { text: "I'm" },
  { text: "Abul Hassan.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]" },
  { text: "A" },
  { text: "Digital" },
  { text: "Marketing" },
  { text: "specialist", className: "text-white font-semibold" },
  { text: "with" },
  { text: "a" },
  { text: "core" },
  { text: "mastery" },
  { text: "in" },
  { text: "Graphic" },
  { text: "Designing.", className: "text-white font-semibold" },
  { text: "I" },
  { text: "don't" },
  { text: "just" },
  { text: "create" },
  { text: "visuals;" },
  { text: "I" },
  { text: "engineer" },
  { text: "Conversion", className: "text-[#ccff00] font-bold" },
  { text: "Machines.", className: "text-[#ccff00] font-bold" },
  { text: "By" },
  { text: "combining" },
  { text: "AI-driven" },
  { text: "marketing" },
  { text: "logic" },
  { text: "with" },
  { text: "high-fidelity" },
  { text: "design," },
  { text: "I" },
  { text: "bridge" },
  { text: "the" },
  { text: "gap" },
  { text: "between" },
  { text: "\"looking" },
  { text: "good\"" },
  { text: "and" },
  { text: "\"performing" },
  { text: "exceptionally.\"" },
  { text: "My" },
  { text: "focus" },
  { text: "is" },
  { text: "on" },
  { text: "ROI-driven", className: "text-white font-bold" },
  { text: "campaigns" },
  { text: "and" },
  { text: "cinematic" },
  { text: "brand" },
  { text: "identities." },
  { text: "Whether" },
  { text: "it's" },
  { text: "scaling" },
  { text: "a" },
  { text: "brand" },
  { text: "through" },
  { text: "Performance", className: "text-[#ccff00] font-semibold" },
  { text: "Marketing", className: "text-[#ccff00] font-semibold" },
  { text: "or" },
  { text: "crafting" },
  { text: "an" },
  { text: "elite" },
  { text: "visual" },
  { text: "identity," },
  { text: "my" },
  { text: "approach" },
  { text: "is" },
  { text: "defined" },
  { text: "by" },
  { text: "precision" },
  { text: "and" },
  { text: "result-oriented", className: "text-white font-semibold" },
  { text: "execution." }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Zayn Al-Mansoor",
    role: "Founder & CEO",
    company: "Lumina Apparel",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    metric: "4.8x ROAS Achieved",
    service: "Meta Ads Scaling & Creative Funnels",
    quote: "Abul Hassan turned our ad performance completely around. We were struggling to break even on Meta ads until he restructured our campaign architecture and redesigned our ad creatives in Photoshop. Within 6 weeks, our ROAS scaled from 1.4x to a consistent 4.8x."
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Head of Growth",
    company: "NovaTech Solutions",
    location: "Austin, Texas, USA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    metric: "-42% CAC Reduction",
    service: "Performance Marketing & Funnel Optimization",
    quote: "Finding someone who understands both the analytical side of Meta Conversion API and elite aesthetic design is extraordinarily rare. Abul reduced our customer acquisition cost by 42% while doubling our qualified lead pipeline."
  },
  {
    id: "test-3",
    name: "Hamza Tariq",
    role: "Managing Director",
    company: "Apex Retail Group",
    location: "Lahore, Pakistan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    metric: "₨12M+ Revenue Scaled",
    service: "Full-Funnel E-commerce Campaign",
    quote: "Abul's attention to detail is remarkable. From high-converting story creatives to laser-targeted retargeting sequences, his strategies generated over 12 Million PKR in direct revenue during our peak seasonal launch. Highest recommendation."
  },
  {
    id: "test-4",
    name: "Elena Rostova",
    role: "Brand Director",
    company: "Velvet & Oak Luxury",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    metric: "+310% Brand Engagement",
    service: "Graphic Design & Visual Brand Identity",
    quote: "The visual assets Abul designed in Photoshop elevated our brand to luxury tier overnight. His mastery of color grading, typography, and visual hierarchy made our social feeds and packaging look like a top-tier European luxury house."
  },
  {
    id: "test-5",
    name: "Khurram Shahzad",
    role: "Co-Founder & COO",
    company: "Velocity Logistics Tech",
    location: "Karachi, Pakistan",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    metric: "10,000+ App Installs",
    service: "Social Media Advertising & Growth",
    quote: "Abul brings incredible speed and clarity. Whenever we launch new feature campaigns, his AI-assisted rapid iterations and performance testing ensure we get maximum traction on day one without wasting ad budget."
  }
];

