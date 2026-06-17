import React from 'react';
import { PROBLEM_GAPS } from '../data/solutionsData';
import LucideIcon from './LucideIcon';

export default function ProblemGaps() {
  return (
    <section id="problems" className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Background Decorative Mesh Filter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-650/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Systemic Failure points
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Most Businesses Have the Same 4 Gaps.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-md font-sans">
            Without automated infrastructure, standard businesses operating today leak potential growth to modern competitors at every step of the funnel.
          </p>
        </div>

        {/* Bento Grid layout - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_GAPS.map((gap, i) => (
            <div 
              key={i} 
              id={`problem-gap-card-${i}`}
              className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 glass-panel-hover overflow-hidden"
            >
              {/* Dynamic Number Index */}
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-800 group-hover:text-red-400/40 font-bold transition-colors">
                0{i + 1}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-red-500/40 group-hover:bg-red-550/5 transition-all duration-300">
                <LucideIcon name={gap.icon} className="text-slate-400 group-hover:text-red-400 transition-colors" size={24} />
              </div>

              {/* Gap Category Identifier */}
              <span className="text-[10px] font-mono tracking-widest text-red-400/80 font-bold uppercase block mb-1">
                {gap.indicator}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-white transition-colors">
                {gap.title}
              </h3>

              {/* Body */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {gap.description}
              </p>

              {/* Sleek bottom gradient strip */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Closing Action Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 shadow-xl">
          <p className="font-display font-semibold text-lg sm:text-xl text-slate-100 tracking-wide leading-relaxed">
            🚀 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 font-bold">ROSKYRO fixes all four</span> with one integrated system — not four different vendors.
          </p>
        </div>

      </div>
    </section>
  );
}
