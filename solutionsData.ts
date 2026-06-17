import { KyroPillar, ProblemGap, PricingPlan, Testimonial } from '../types';

export const BRAND_NAME = "ROSKYRO";
export const BRAND_CATEGORY = "AI Growth Technology Company";
export const BRAND_TAGLINE = "More Visibility. More Trust. More Revenue. Less Manual Work.";
export const HERO_HEADLINE = "We Build Result-Oriented Systems For Knowledge, Yield, Reputation & Optimization";
export const MISSION_STATEMENT = "ROSKYRO builds AI and automation systems that increase business visibility, strengthen reputation, and accelerate growth.";

export const POSITIONING_PARAGRAPH = "ROSKYRO is an AI Growth Technology Company helping small and medium businesses get more customers, more trust, and more revenue through automation and digital systems. We build result-oriented systems — not one-off services — across four pillars: Knowledge, Yield, Reputation, and Optimization (K-Y-R-O), combining AI automation with next-generation search visibility (SEO + AEO + GEO).";

export const WHAT_WE_MEAN = [
  {
    title: "Result Oriented",
    emoji: "🎯",
    description: "Work that doesn't just get done, but delivers measurable business outcomes and direct revenue generation."
  },
  {
    title: "Systems",
    emoji: "🕸️",
    description: "A combination of processes, software, automation, and integrated workflows designed to run reliably 24/7."
  },
  {
    title: "Knowledge",
    emoji: "🧠",
    description: "Deep business insights, structured intelligence, accurate forecasting, and data-driven decision-making support."
  },
  {
    title: "Yield",
    emoji: "📈",
    description: "Multiplied growth, profitability, compounding revenue streams, and systemic productivity optimization."
  },
  {
    title: "Reputation",
    emoji: "⭐",
    description: "Elevated brand trust, positive review volume, verified online authority, and ironclad business credibility."
  },
  {
    title: "Optimization",
    emoji: "⚙️",
    description: "Maximizing outputs while strategically reducing time, operating overhead, and capital requirements."
  }
];

export const PROBLEM_GAPS: ProblemGap[] = [
  {
    title: "Invisible on Google & AI Engines",
    description: "Sinking down Google, and completely absent when prospective buyers ask ChatGPT, Gemini, or Perplexity for solutions in your sector.",
    icon: "EyeOff",
    indicator: "SEO + AEO Gap"
  },
  {
    title: "No Systemized Trust",
    description: "Scattered online reviews, slow rating velocity, and a general lack of prominent social proof that causes prospect friction.",
    icon: "ShieldAlert",
    indicator: "Reputation Gap"
  },
  {
    title: "Leaking Revenue",
    description: "Cold leads left untouched for hours, lack of instant follow-up, and zero systemized campaign nurture to resurrect inactive clients.",
    icon: "TrendingDown",
    indicator: "Yield Gap"
  },
  {
    title: "Wasted Manual Overhead",
    description: "Highly paid team members losing hours copy-pasting data, scheduling calls manually, and answering basic recurring queries.",
    icon: "Clock",
    indicator: "Optimization Gap"
  }
];

export const KYRO_PILLARS: KyroPillar[] = [
  {
    id: "knowledge",
    title: "Knowledge Systems",
    icon: "Brain",
    tagline: "Make the business smarter",
    emoji: "🧠",
    services: [
      "Business Analytics Dashboard",
      "AI Business Insights Engine",
      "Unified Lead Tracking Database",
      "Automated Market Research Reports",
      "Predictive Competitor Analysis Dashboard",
      "Digital Customer Feedback Collector",
      "Smart Enterprise Knowledgebase",
      "Custom CRM Configurations"
    ],
    resultTags: ["Better Decisions", "Better Customer Understanding"],
    colorClass: "from-blue-500 to-indigo-600 border-blue-500/30",
    glowClass: "shadow-blue-500/20"
  },
  {
    id: "yield",
    title: "Yield Systems",
    icon: "TrendingUp",
    tagline: "Grow revenue and profit",
    emoji: "📈",
    services: [
      "Lead Generation Systems",
      "Conversational Sales Funnels",
      "WhatsApp Sales Automations",
      "Customer Retention Sequence Campaigns",
      "AI Cross-sell & Upsell Workflows",
      "Systematized Referral Growth Loops",
      "Frictionless Appointment Booking Engine",
      "Live Revenue Tracking Dashboard"
    ],
    resultTags: ["More Leads", "More Revenue", "Higher Productivity"],
    colorClass: "from-emerald-500 to-teal-600 border-emerald-500/30",
    glowClass: "shadow-emerald-500/20"
  },
  {
    id: "reputation",
    title: "Reputation Systems",
    icon: "Star",
    tagline: "Build trust and brand",
    emoji: "⭐",
    services: [
      "Autopilot Google Review Growth",
      "Online Reputation Management Hub",
      "Google Business Profile Max-Optimization",
      "High-Conversion Brand Website Development",
      "Interactive Native Social Proof Systems",
      "Integrated Customer Testimonial Collections",
      "Executive Personal Branding Frameworks",
      "Review Reply Automation Bots"
    ],
    resultTags: ["More Trust", "Better Brand Image", "Higher Conversion Rate"],
    colorClass: "from-violet-500 to-fuchsia-600 border-violet-500/30",
    glowClass: "shadow-violet-500/20"
  },
  {
    id: "optimization",
    title: "Optimization Systems",
    icon: "Cpu",
    tagline: "Save time and cost",
    emoji: "⚙️",
    services: [
      "Official WhatsApp Business API Integrations",
      "Multi-turn Autonomous Conversational Chatbots",
      "Smart Automated AI Voice Agents",
      "Intelligent Appointment & Follow-up Reminders",
      "Multi-channel Sequence Follow-up Automations",
      "Autonomous Workflow Orchestration (Zapier/Make)",
      "Dynamic Team Task Matrix Systems",
      "Auto-fill Smart Document Generators"
    ],
    resultTags: ["Less Manual Work", "Faster Operations", "Lower Costs"],
    colorClass: "from-cyan-500 to-blue-600 border-cyan-500/30",
    glowClass: "shadow-cyan-500/20"
  }
];

export const AI_VISIBILITY_FEATURES = [
  { title: "Google Business Optimization", desc: "Gain 3-pack visibility for intent-rich local searches." },
  { title: "Website Architecture Tuning", desc: "Build lighting-fast pages optimized for crawl bot algorithms." },
  { title: "Local SEO Saturation", desc: "Flood search indices with geo-targeted pages that rank." },
  { title: "AEO (Answer Engine Optimization)", desc: "Directly train algorithms to state your company as the top recommendation." },
  { title: "GEO (Generative Engine Optimization)", desc: "Inject specific entities into the contexts retrieved by Gemini and ChatGPT." },
  { title: "Structured Schema & Entities", desc: "Leverage RDF/JSON-LD structures so LLM scrapers understand your credentials." },
  { title: "Conversational Optimization", desc: "Target voice queries and phrase searches typed in real-time." },
  { title: "Search Visibility Analytics", desc: "Track share-of-voice across modern generative AI lookup tools." }
];

export const FEATURE_STRIP = [
  { icon: "MessageSquareCode", title: "WhatsApp Business API", desc: "Official, green-badge verified enterprise channels." },
  { icon: "Bot", title: "Autonomous Chatbots", desc: "Smart customer answering and contextual routing." },
  { icon: "UserCheck", title: "AI Lead Qualification", desc: "Instantly score, tag, and segment inbound interest." },
  { icon: "CheckSquare", title: "Automated Follow-Ups", desc: "Multi-channel nudges that turn cold clicks to conversations." },
  { icon: "CalendarRange", title: "Appointment Automation", desc: "No manual back-and-forth. Synced right to calendars." },
  { icon: "Combine", title: "CRM Integrations", desc: "Sync leads cleanly to Hubspot, Salesforce, or Google Sheets." },
  { icon: "Sparkles", title: "AI Business Agents", desc: "Cognitive task automation matching your unique brand guidelines." }
];

export const WHY_ROSKYRO = [
  {
    title: "Category Creation & Focus",
    subtitle: "We are an AI Growth Technology Company, not just a service agency. We build recurring software systems that run autonomously.",
    icon: "Sparkles"
  },
  {
    title: "Early Mover on AEO & GEO",
    subtitle: "We optimize for the next generation of search. Your business gets verified and recommended by modern AI engines like Gemini, Claude, and Perplexity.",
    icon: "Zap"
  },
  {
    title: "Integrated Systems",
    subtitle: "Instead of hiring four different vendors who point fingers, our unified systems bridge Knowledge, Yield, Reputation, and Optimization.",
    icon: "Network"
  },
  {
    title: "Recurring SaaS-like Performance",
    subtitle: "We stand behind systems with software reliability. Your automation grows stronger, smarter, and scales flawlessly as volume expands.",
    icon: "Layers"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter System",
    description: "Launch critical modern search visibility and automated customer capture systems.",
    setupFeeDefault: "Starting at ₹24,999",
    monthlyDefault: "Starting at ₹12,499",
    features: [
      "Core SEO Optimization for Google Search",
      "Google Business Profile max setup & 3-pack push",
      "Autopilot Google reviews growth link builder",
      "Basic AI Lead Capture Chatbot (Web Embed)",
      "Standard WhatsApp Web-lead automations",
      "Essential KPI Tracking Dashboard (Knowledge)",
      "Email support & monthly system health check"
    ]
  },
  {
    id: "growth",
    name: "Growth Engine",
    description: "Our core signature package. Establishes the full K-Y-R-O automated growth technology framework.",
    setupFeeDefault: "Starting at ₹59,999",
    monthlyDefault: "Starting at ₹29,999",
    features: [
      "Everything in Starter System included",
      "AEO + GEO deep integration (ChatGPT & Perplexity)",
      "Advanced multi-channel WhatsApp Sales Automation",
      "Autopilot review growth & customer testimonial system",
      "High-end visual CRM / Lead Tracking Dashboard",
      "Dynamic appointment scheduling flow with AI SMS reminders",
      "AI-driven competitor analysis reports",
      "Priority system support during regular hours",
      "Bi-annual systems audit and review optimization"
    ],
    isPopular: true,
    badge: "Most Popular System"
  },
  {
    id: "enterprise",
    name: "Pro / Enterprise Scale",
    description: "An elite, bespoke system orchestration built for large-scale operations and continuous market dominance.",
    setupFeeDefault: "Contact for Quote",
    monthlyDefault: "Custom Monthly SaaS",
    features: [
      "All features of Growth Engine included",
      "Completely bespoke custom software & workflow development",
      "Authorized WhatsApp Business API with green badge setup",
      "Advanced AI voice agent & autonomous live answering systems",
      "Comprehensive predictive and analytical AI dashboards",
      "Continuous entity SEO mapping & citation building",
      "Dedicated Technical Slack/WhatsApp group channel",
      "24/7 priority SLA monitoring and system health checks",
      "Bi-weekly live growth reviews and custom software expansion"
    ],
    badge: "Enterprise Orchestration"
  }
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "Managing Director",
    company: "Malhotra Logisolutions Pvt Ltd",
    avatarUrl: "VM",
    text: "ROSKYRO transformed our client booking rate. Before, warm outbound inquiries would wait hours. Their WhatsApp Yield System brought follow-up times down to 2 seconds. The result? 37% more revenue in under 90 days. Incredible tech.",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Fernandes",
    role: "Founder",
    company: "Ferns Aesthetic Hub",
    avatarUrl: "SF",
    text: "As a local aesthetic clinic, search visibility is everything. ROSKYRO did not just rank us on Google Maps—they optimized our schema for ChatGPT search. Now patients walk in saying, 'ChatGPT recommended you for dermabrasion.' Amazing ROI!",
    rating: 5
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Operations Head",
    company: "Verma Enterprise Distributors",
    avatarUrl: "RV",
    text: "Our team was wasting 25 hours a week manually copy-pasting customer details and sending payment reminders. The Optimization System built by ROSKYRO saved our staff's sanity. Everything flows automatically. They are true growth technologists.",
    rating: 5
  }
];
