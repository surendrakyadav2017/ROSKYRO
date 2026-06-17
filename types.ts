export interface ServiceItem {
  name: string;
  description?: string;
}

export interface KyroPillar {
  id: 'knowledge' | 'yield' | 'reputation' | 'optimization';
  title: string;
  icon: string;
  tagline: string;
  emoji: string;
  services: string[];
  resultTags: string[];
  colorClass: string;
  glowClass: string;
}

export interface ProblemGap {
  title: string;
  description: string;
  icon: string;
  indicator: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  setupFeeDefault: string;
  monthlyDefault: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  text: string;
  rating: number;
}

export interface AuditRequest {
  id: string;
  businessName: string;
  websiteUrl: string;
  email: string;
  phone: string;
  growthFocus: string;
  timestamp: number;
}
