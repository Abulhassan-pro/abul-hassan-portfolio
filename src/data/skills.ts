import { SkillCategory, ToolItem } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'MARKETING & STRATEGY',
    description: 'Data-driven distribution and growth tactics to scale reach and drive measurable commercial outcomes.',
    skills: [
      'Digital Marketing',
      'Social Media Marketing',
      'Content Strategy & Planning',
      'Social Media Management',
      'Meta Ads & Paid Social',
      'Advertising & Campaign Architecture',
      'Growth Strategy',
      'Account Handling & Publishing'
    ]
  },
  {
    title: 'GRAPHIC DESIGN & IDENTITY',
    description: 'High-contrast, meticulously balanced visual design engineered for premium digital perception.',
    skills: [
      'Graphic Design',
      'Social Media Post Design',
      'Promotional & Ad Creatives',
      'Brand Visuals & Aesthetics',
      'Typography Hierarchy',
      'Adobe Photoshop Mastery',
      'Photo Retouching & Color Grading',
      'Layout & Vector Concepts'
    ]
  },
  {
    title: 'CONTENT CREATION & AI MEDIA',
    description: 'Next-generation video synthesis and AI agent workflows that produce high-retention commercial assets.',
    skills: [
      'AI Advertisement Videos',
      'Short-form Video Production',
      'UGC Ad Concepting',
      'AI Voice Agent Synthesis',
      'Creative Hook Engineering',
      'Content Scheduling & Calendaring',
      'Multi-Platform Pacing (9:16 / 16:9)',
      'Prompt Architecture'
    ]
  }
];

export const toolStack: ToolItem[] = [
  {
    name: 'Adobe Photoshop',
    category: 'Design Mastery',
    iconUrl: '/assets/tools/midjourney.jpg',
    iconFallback: 'PS'
  },
  {
    name: 'Midjourney v6',
    category: 'Visual Synthesis',
    iconUrl: '/assets/tools/midjourney.jpg',
    iconFallback: 'MJ'
  },
  {
    name: 'Runway Gen-2',
    category: 'AI Video Motion',
    iconUrl: '/assets/tools/runway.png',
    iconFallback: 'RW'
  },
  {
    name: 'ElevenLabs',
    category: 'AI Voice & Audio',
    iconUrl: '/assets/tools/elevenlabs.png',
    iconFallback: 'EL'
  },
  {
    name: 'Meta Ads Manager',
    category: 'Paid Advertising',
    iconFallback: 'MA'
  },
  {
    name: 'Claude AI',
    category: 'Creative Logic',
    iconUrl: '/assets/tools/claude.png',
    iconFallback: 'CL'
  },
  {
    name: 'ChatGPT',
    category: 'Strategy & Copy',
    iconUrl: '/assets/tools/chatgpt.svg',
    iconFallback: 'GP'
  },
  {
    name: 'Google Gemini',
    category: 'Multi-Modal AI',
    iconUrl: '/assets/tools/gemini.jpg',
    iconFallback: 'GM'
  }
];
