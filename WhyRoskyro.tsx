import React from 'react';
import { WHY_ROSKYRO } from '../data/solutionsData';
import LucideIcon from './LucideIcon';

export default function WhyRoskyro() {
  return (
    <section id="why-roskyro" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Background ambient filters */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-650/5 blur-[120px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-violet bg-neon-violet/10 px-3 py-1 rounded-full border border-neon-violet/20">
            Competitive Distinction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Visionaries Choose ROSKYRO
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            We are redefining how businesses capture and convert digital interest by building structural assets, not generic marketing campaigns.
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 layout on desktop, single on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_ROSKYRO.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/30 border border-slate-850 hover:border-neon-violet/25 hover:bg-slate-900/50 transition-all duration-300 relative group"
            >
              <div className="flex gap-6 items-start">
                
                {/* Floating Glow Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-neon-violet/40 group-hover:bg-neon-violet/5 transition-all duration-300 shadow-xl shadow-black/45">
                  <LucideIcon name={item.icon} size={26} className="text-neon-violet animate-float" style={{ animationDelay: `${idx * 0.4}s`, animationDuration: '5.5s' }} />
                </div>
                
                <div className="space-y-2 text-left">
                  <div className="text-xs font-mono tracking-widest text-neon-violet/75 uppercase font-medium">Distinctive Principle 0{idx + 1}</div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-violet transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
                    {item.subtitle}
                  </p>
                </div>

              </div>

              {/* Absolute aesthetic node numbers in backdrop */}
              <div className="absolute bottom-5 right-6 text-sm font-mono text-slate-850 select-none group-hover:text-neon-violet/10 font-bold transition-colors">
                RO-0{idx + 1}
              </div>

            </div>
          ))}
        </div>

        {/* Brand Position Statement Blocks */}
        <div className="mt-20 border border-slate-850/60 bg-gradient-to-br from-slate-950 via-[#070914] to-slate-950 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-4 space-y-2 border-l-2 border-neon-cyan pl-5 py-1 text-left">
              <span className="text-[10px] font-mono tracking-widest text-neon-cyan uppercase">System positioning</span>
              <h3 className="font-display text-2xl font-bold text-white">Result-Oriented Architecture</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans uppercase tracking-widest leading-relaxed">
                NOT ONE-OFF GIMMICKY SERVICES.
              </p>
            </div>

            <div className="lg:col-span-8 text-left">
              <p className="text-slate-300 text-sm sm:text-md md:text-lg leading-relaxed font-sans font-light">
                "ROSKYRO is an AI Growth Technology Company helping small and medium businesses get more customers, more trust, and more revenue through automation and digital systems. We build result-oriented systems — not one-off services — across four pillars: Knowledge, Yield, Reputation, and Optimization (K-Y-R-O), combining AI automation with next-generation search visibility (SEO + AEO + GEO)."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
