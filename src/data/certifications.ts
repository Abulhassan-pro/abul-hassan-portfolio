import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'bano-qabil-digital-marketing',
    title: 'Digital Marketing Mastery',
    issuer: 'Bano Qabil Program',
    date: '2024',
    credentialId: 'BQ-DM-2024-MSTRY',
    type: 'certification',
    skills: [
      'Search Engine Optimization (SEO)',
      'Search Engine Marketing (SEM)',
      'Social Media Marketing (SMM)',
      'Meta Ads & Campaign Management',
      'Performance Analytics & Growth Hacking'
    ],
    description: 'Comprehensive certification covering full-funnel digital marketing strategies, keyword intelligence, paid social advertising, budget pacing, and conversion optimization.',
    status: 'Verified Certification',
  },
  {
    id: 'udemy-graphic-design',
    title: 'Professional Graphic Design',
    issuer: 'Udemy Certified Academy',
    date: '2024',
    credentialId: 'UC-GD-2024-PROF',
    type: 'certification',
    skills: [
      'Adobe Photoshop Advanced Mastery',
      'Visual Identity & Brand Systems',
      'Cinematic Color Grading & Retouching',
      'Logo & Vector Concepting',
      'Social Media Asset Creation'
    ],
    description: 'Specialized professional training in commercial visual communication, digital asset production, advanced typography, brand systems, and modern AI-assisted graphic workflows.',
    status: 'Verified Certification',
  },
  {
    id: 'forces-group-college',
    title: 'Higher Secondary College Education',
    issuer: 'Forces Group of Colleges',
    date: '2024 - 2026',
    credentialId: 'FGC-ENR-2024',
    type: 'academic',
    skills: [
      'Critical Analysis',
      'Digital Communication',
      'Applied Media & Tech Foundations',
      'Research & Strategic Thinking'
    ],
    description: 'Rigorous academic curriculum emphasizing technology, quantitative reasoning, and creative communication skills.',
    status: 'Completed Program',
  },
  {
    id: 'saviour-school',
    title: 'Secondary School Education',
    issuer: 'Saviour Educational Institution',
    date: '2012 - 2024',
    credentialId: 'SAV-SEC-2024',
    type: 'academic',
    skills: [
      'Foundational Sciences',
      'Written & Verbal English Communication',
      'Logic & Analytical Problem Solving'
    ],
    description: 'Foundational 12-year academic journey cultivating core discipline, technological literacy, and creative expression.',
    status: 'Completed Program',
  }
];
