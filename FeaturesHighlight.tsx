import React from 'react';
import LucideIcon from './LucideIcon';

interface HighlightFeature {
  title: string;
  desc: string;
  icon: string;
  colorScheme: 'cyan' | 'violet' | 'blue' | 'emerald';
}

export default function FeaturesHighlight() {
  const features: HighlightFeature[] = [
    {
      title: "WhatsApp Business API",
      desc: "Deploy green-badge verified direct messaging, broadcast engines, and transactional notifications.",
      icon: "MessageSquareCode",
      colorScheme: "emerald"
    },
    {
      title: "AI Chatbots",
      desc: "Fully autonomous 24/7 web assistants answering complex product or scheduling queries in seconds.",
      icon: "Bot",
      colorScheme: "cyan"
    },
    {
      title: "AI Lead Qualification",
      desc: "Extract prospect intentions, catalog pain points, and scoring lead metrics prior to human reps.",
      icon: "UserCheck",
      colorScheme: "blue"
    },
    {
      title: "Automated Follow-Ups",
      desc: "Synchronized email/SMS drop sequences triggering instantly to warm up cold system leads.",
      icon: "CheckSquare",
      colorScheme: "violet"
    },
    {
      title: "Appointment Automation",
      desc: "Zero-friction link booking integrated into workflows to eliminate scheduling drop-offs.",
      icon: "CalendarRange",
      colorScheme: "cyan"
    },
    {
      title: "CRM Integrations",
      desc: "Ensure seamless handoffs. Instantly log data across modern Hubspot, Salesforce, or Airtable systems.",
      icon: "Combine",
      colorScheme: "blue"
    },
    {
      title: "Customer Support Automations",
      desc: "Direct support pathways triggering automated ticket creation and instant solutions catalog matches.",
      icon: "Phone",
      colorScheme: "emerald"
    },
    {
      title: "Lead Nurturing Systems",
      desc: "Nurture unconverted opportunities using hyper-personalized content streams contextually mapped over months.",
      icon: "TrendingUp",
      colorScheme: "violet"
    },
    {
      title: "AI Business Agents",
      desc: "Autonomous digital agents configured to safely act on system databases to carry out administrative tasks.",
      icon: "Sparkles",
      colorScheme: "cyan"
    }
  ];

  const getColorClasses = (scheme: string) => {
    switch(scheme) {
      case 'emerald':
        return {
          iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20',
          borderHover: 'hover:border-emerald-500/30'
        };
      case 'violet':
        return {
          iconBg: 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20',
          borderHover: 'hover:border-violet-500/30'
        };
      case 'blue':
        return {
          iconBg: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
          borderHover: 'hover:border-blue-500/30'
        };
      case 'cyan':
      default:
        return {
          iconBg: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
          borderHover: 'hover:border-cyan-500/30'
        };
    }
  };

  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/60 via-slate-950 to-slate-950 relative overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
            Micro-Services Highlight Matrix
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Growth Capabilities
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">
            Our systems orchestrate precise, modern modules working together on autopilot to turn traffic into trusted, compounding revenue.
          </p>
        </div>

        {/* Feature Grid layout - 3 Cols Desktop, 2 cols Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const classes = getColorClasses(feat.colorScheme);
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-slate-950 border border-slate-850/80 transition-all duration-300 flex items-start gap-5 group cursor-default ${classes.borderHover}`}
              >
                {/* Responsive Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${classes.iconBg}`}>
                  <LucideIcon name={feat.icon} size={22} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="space-y-1.5 text-left">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-150 group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
