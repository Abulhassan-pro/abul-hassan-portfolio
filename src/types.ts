export type ProjectCategory = 
  | 'ALL'
  | 'GRAPHIC DESIGN'
  | 'SOCIAL MEDIA'
  | 'AI ADS'
  | 'MARKETING'
  | 'BRANDING';

export interface Project {
  id: string;
  title: string;
  category: 'GRAPHIC DESIGN' | 'SOCIAL MEDIA' | 'AI ADS' | 'MARKETING' | 'BRANDING';
  tags: string[];
  description: string;
  longDescription: string;
  imageUrl: string;
  localImageUrl?: string;
  videoUrl?: string;
  tools: string[];
  role: string;
  year: string;
  contribution: string;
  creativeProcess: string[];
  deliverables: string[];
  resultsOrImpact?: string;
  isFeatured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  type: 'certification' | 'academic';
  skills: string[];
  description: string;
  status: 'Verified Certification' | 'Completed Program' | 'In Progress';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  badge?: string;
  responsibilities: string[];
  keyWork: string[];
  toolsUsed: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconUrl?: string;
  iconFallback: string;
}
