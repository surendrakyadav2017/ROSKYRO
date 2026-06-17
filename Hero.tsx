import React from 'react';
import { ArrowRight, Sparkles, Brain, TrendingUp, Star, Cpu } from 'lucide-react';

interface HeroProps {
  onBookAudit: () => void;
  onExploreSystems: () => void;
}

export default function Hero({ onBookAudit, onExploreSystems }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-950"
    >
      {/* Background Neon Glow Circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] animate-pulse-glow" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px] animate-pulse-glow" style={{ animationDuration: '12s' }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-neon-cyan select-none shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
              <span className="tracking-wide">AI Growth Technology Company</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              We Build Result-Oriented Systems For 
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 animate-gradient font-display">
                🧠 Knowledge
              </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">📈 Yield</span>
              <span className="inline-block mx-2 text-slate-500 font-light">·</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-350">⭐ Reputation</span>
              <span className="inline-block mx-2 text-slate-500 font-light">·</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">⚙️ Optimization</span>
            </h1>

            {/* Subheadline (Tagline Promise) */}
            <p className="text-lg md:text-xl font-normal text-slate-200 tracking-wide leading-relaxed font-sans max-w-2xl border-l-2 border-neon-cyan/40 pl-4 py-1">
              "More Visibility. More Trust. More Revenue. Less Manual Work."
            </p>

            {/* Mission / Brand Positioning Intro */}
            <p className="text-slate-450 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
              ROSKYRO builds advanced AI and automation systems that increase business visibility, strengthen reputation, and accelerate growth. We establish durable digital engines that perform continuously.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              
              {/* Primary Glowing Button */}
              <button
                onClick={onBookAudit}
                className="relative group px-6 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl text-sm font-bold text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] active:scale-[0.98] transition-all duration-300 cursor-pointer text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Visibility Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Glow Backdrop */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 blur opacity-40 group-hover:opacity-75 transition-opacity" />
              </button>

              {/* Secondary Outline */}
              <button
                onClick={onExploreSystems}
                className="px-6 py-3.5 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white rounded-xl text-sm font-semibold border border-slate-800 hover:border-slate-700 active:scale-[0.98] transition-all duration-300 cursor-pointer text-center"
              >
                Explore Our Systems
              </button>

            </div>

          </div>

          {/* Futuristic Visual Column - 5 Cols */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-md p-6 overflow-hidden flex flex-col justify-between group shadow-2xl shadow-blue-950/20">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [bg-size:16px_16px] opacity-40" />

              {/* Glowing core orbital lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-dashed border-slate-800 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-double border-slate-900/80 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '24s' }} />
              
              {/* Core AI Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-blue-600via-purple-600 to-cyan-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slate-900 border border-slate-800/80 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-neon-cyan animate-pulse" />
              </div>

              {/* Floating Node 1 - Knowledge */}
              <div className="absolute top-1/10 left-1/5 animate-float flex items-center gap-2 p-2 bg-slate-900/95 rounded-xl border border-blue-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono text-blue-200 tracking-wider">KNOWLEDGE</span>
              </div>

              {/* Floating Node 2 - Yield */}
              <div className="absolute bottom-1/5 left-1/10 animate-float-delayed flex items-center gap-2 p-2 bg-slate-900/95 rounded-xl border border-emerald-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-[10px] font-mono text-emerald-200 tracking-wider">YIELD</span>
              </div>

              {/* Floating Node 3 - Reputation */}
              <div className="absolute top-1/3 right-1/10 animate-float flex items-center gap-2 p-2 bg-slate-900/95 rounded-xl border border-violet-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <div className="w-6 h-6 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <span className="text-[10px] font-mono text-violet-200 tracking-wider">REPUTATION</span>
              </div>

              {/* Floating Node 4 - Optimization */}
              <div className="absolute bottom-1/10 right-1/5 animate-float-delayed flex items-center gap-2 p-2 bg-slate-900/95 rounded-xl border border-cyan-500/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono text-cyan-200 tracking-wider">OPTIMIZE</span>
              </div>

              {/* Live Status overlay metrics */}
              <div className="w-full h-full flex flex-col justify-end p-2 z-10 pointer-events-none">
                <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 backdrop-blur-lg flex justify-between items-center w-full">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">System Latency</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">1.8ms (Autonomous)</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] font-mono text-emerald-500 font-semibold tracking-wider uppercase">ACTIVE ENGINE</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
