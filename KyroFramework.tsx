import React, { useState } from 'react';
import { KYRO_PILLARS } from './solutionsData
import { KyroPillar } from '../types';
import LucideIcon from './LucideIcon';

interface KyroFrameworkProps {
  onBookAudit: () => void;
}

export default function KyroFramework({ onBookAudit }: KyroFrameworkProps) {
  const [activePillarId, setActivePillarId] = useState<string>(KYRO_PILLARS[0].id);
  
  const activePillar = KYRO_PILLARS.find(p => p.id === activePillarId) || KYRO_PILLARS[0];

  const getPillarColor = (id: string, state: 'bg' | 'border' | 'text' | 'glow') => {
    switch (id) {
      case 'knowledge':
        if (state === 'bg') return 'bg-blue-600';
        if (state === 'border') return 'border-blue-500/40';
        if (state === 'text') return 'text-blue-400';
        return 'shadow-blue-500/10';
      case 'yield':
        if (state === 'bg') return 'bg-emerald-600';
        if (state === 'border') return 'border-emerald-500/40';
        if (state === 'text') return 'text-emerald-400';
        return 'shadow-emerald-500/10';
      case 'reputation':
        if (state === 'bg') return 'bg-violet-600';
        if (state === 'border') return 'border-violet-500/40';
        if (state === 'text') return 'text-violet-400';
        return 'shadow-violet-500/10';
      case 'optimization':
        if (state === 'bg') return 'bg-cyan-600';
        if (state === 'border') return 'border-cyan-500/40';
        if (state === 'text') return 'text-cyan-400';
        return 'shadow-cyan-500/10';
      default:
        return '';
    }
  };

  return (
    <section id="solutions" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Decorative Gradient Background Orbs */}
      <div className={`absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-15 transition-all duration-700 pointer-events-none ${
        activePillarId === 'knowledge' ? 'bg-blue-600' :
        activePillarId === 'yield' ? 'bg-emerald-600' :
        activePillarId === 'reputation' ? 'bg-violet-600' :
        'bg-cyan-600'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
              Our Core Solutions Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The K-Y-R-O Systems Framework
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans">
              We design, build, and maintain result-oriented technological infrastructures grouped elegantly across four core business pillars.
            </p>
          </div>
          
          <button
            onClick={onBookAudit}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-100 hover:text-white rounded-xl text-xs font-bold border border-slate-800 hover:border-slate-700 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-black/80"
          >
            Deploy KYRO Audit
            <LucideIcon name="ArrowRight" className="w-4 h-4 text-neon-cyan group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Pillar Tabs Navigation Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {KYRO_PILLARS.map((pillar) => {
            const isActive = activePillarId === pillar.id;
            const activeBorderColor = getPillarColor(pillar.id, 'border');
            const activeTextColor = getPillarColor(pillar.id, 'text');
            const activeGlow = getPillarColor(pillar.id, 'glow');

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`flex flex-col items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer group ${
                  isActive 
                    ? `bg-slate-900/90 ${activeBorderColor} shadow-xl ${activeGlow} z-10 scale-[1.02]` 
                    : 'bg-slate-950/40 border-slate-900 hover:border-slate-850 hover:bg-slate-900/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isActive 
                    ? `${getPillarColor(pillar.id, 'bg')} text-white` 
                    : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-slate-200'
                }`}>
                  <span className="text-lg">{pillar.emoji}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">Pillar {pillar.id.substring(0,1).toUpperCase() + pillar.id.substring(1,3)}</div>
                  <h3 className={`font-display text-md font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {pillar.title}
                  </h3>
                </div>

                {/* Accent glow line inside tab */}
                {isActive && (
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-${pillar.id === 'knowledge' ? 'blue-400' : pillar.id === 'yield' ? 'emerald-400' : pillar.id === 'reputation' ? 'violet-400' : 'cyan-400'} to-transparent`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Panel Showcase */}
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Pillar Meta Info Columns - 5 Cols */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Core Pillar System</span>
                <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-2.5">
                  <span>{activePillar.emoji}</span>
                  <span>{activePillar.title}</span>
                </h4>
                <p className={`text-md font-medium font-sans italic ${getPillarColor(activePillar.id, 'text')}`}>
                  "{activePillar.tagline}"
                </p>
              </div>

              <div className="h-px bg-slate-800/80" />

              {/* Result expectation metrics */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase block">Measurable Outcomes</span>
                <div className="flex flex-wrap gap-2">
                  {activePillar.resultTags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border tracking-wide uppercase font-mono ${
                        activePillarId === 'knowledge' ? 'bg-blue-500/10 border-blue-500/25 text-blue-300' :
                        activePillarId === 'yield' ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' :
                        activePillarId === 'reputation' ? 'bg-violet-500/10 border-violet-500/25 text-violet-300' :
                        'bg-cyan-500/10 border-cyan-500/25 text-cyan-300'
                      }`}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Abstract dashboard graphic panel mini mockup */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850/80 space-y-3 shadow-inner">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
                  <span className="text-[9px] font-mono text-slate-500 ml-auto uppercase tracking-widest">KYRO STATE AGENT</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-900 rounded-lg overflow-hidden">
                    <div className={`h-full rounded-lg animate-pulse ${
                      activePillarId === 'knowledge' ? 'bg-blue-500 w-11/12' :
                      activePillarId === 'yield' ? 'bg-emerald-500 w-4/5' :
                      activePillarId === 'reputation' ? 'bg-violet-500 w-[95%]' :
                      'bg-cyan-500 w-[88%]'
                    }`} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-450">
                    <span>Performance index</span>
                    <span className="text-slate-350">
                      {activePillarId === 'knowledge' ? '98.4%' :
                       activePillarId === 'yield' ? '94.2%' :
                       activePillarId === 'reputation' ? '99.1%' :
                       '96.7%'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Pillar Services Grid - 7 Cols */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-2">Systems & Integrations Included</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activePillar.services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-850 hover:border-slate-800 hover:bg-slate-950 flex items-start gap-3 transition-colors duration-200 group/item"
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                      activePillarId === 'knowledge' ? 'bg-blue-550/10' :
                      activePillarId === 'yield' ? 'bg-emerald-550/10' :
                      activePillarId === 'reputation' ? 'bg-violet-550/10' :
                      'bg-cyan-550/10'
                    }`}>
                      <LucideIcon 
                        name="Check" 
                        className={`w-3.5 h-3.5 transition-colors ${
                          activePillarId === 'knowledge' ? 'text-blue-400 group-hover/item:text-blue-300' :
                          activePillarId === 'yield' ? 'text-emerald-400 group-hover/item:text-emerald-300' :
                          activePillarId === 'reputation' ? 'text-violet-400 group-hover/item:text-violet-300' :
                          'text-cyan-400 group-hover/item:text-cyan-300'
                        }`} 
                      />
                    </div>
                    
                    <span className="text-slate-200 text-xs sm:text-sm font-medium pr-1 group-hover/item:text-white transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
