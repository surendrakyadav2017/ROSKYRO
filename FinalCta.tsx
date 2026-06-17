import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onBookAudit: () => void;
}

export default function FinalCta({ onBookAudit }: FinalCtaProps) {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900 text-center">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {/* Cyber lines decor */}
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-neon-cyan to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-neon-cyan to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-gradient-to-l from-neon-violet to-transparent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-gradient-to-t from-neon-violet to-transparent" />
          
          {/* Mini Tech Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-neon-cyan uppercase tracking-wider mb-6 select-none">
            <Sparkles className="w-3 h-3 text-neon-cyan animate-spin-slow" />
            <span>Instant System Deployment Available</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Ready for More Visibility, More Trust, and More Revenue?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Stop losing qualified buyers to manual overhead or static search listings. Deploy our result-oriented systems framework and capture compounding authority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Glowing button */}
            <button
              onClick={onBookAudit}
              className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl text-xs sm:text-sm font-bold text-white shadow-[0_4px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.6)] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Get Your Free Audit Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
            </button>

            {/* Quick whatsapp CTA */}
            <a
              href="https://wa.me/919244166752?text=Hi%20ROSKYRO%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all w-full sm:w-auto text-center"
            >
              Chat With Specialists
            </a>

          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>✓ Takes 3 Minutes</span>
            <span className="text-slate-700">|</span>
            <span>✓ Fully Detailed PDF</span>
            <span className="text-slate-700">|</span>
            <span>✓ Complete AEO Breakdown</span>
          </div>

        </div>

      </div>
    </section>
  );
}
