import React from 'react';
import LogoPlaceholder from './LogoPlaceholder';
import LucideIcon from './LucideIcon';

interface FooterProps {
  logoSrc: string | null;
  onLogoUpload: (base64: string | null) => void;
  onBookAudit: () => void;
}

export default function Footer({ logoSrc, onLogoUpload, onBookAudit }: FooterProps) {
  
  const socialLinks = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/roskyro.in/' },
    { name: 'Instagram', url: 'https://www.instagram.com/roskyro.in/' },
    { name: 'Facebook', url: 'https://www.facebook.com/roskyro.in/' },
    { name: 'Youtube', url: 'https://www.youtube.com/@ROSKYRO' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="bg-[#03050c] border-t border-slate-900 pt-20 pb-12 relative overflow-hidden text-left">
      
      {/* Decorative ambient orb */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core grid content layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* Brand Boilerplate - Column 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logo Slot */}
            <LogoPlaceholder logoSrc={logoSrc} onLogoUpload={onLogoUpload} variant="footer" />
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              ROSKYRO is an AI Growth Technology Company helping small and medium businesses scale visibility, trust, and revenue through result-oriented automation.
            </p>

            {/* Social Grid Row */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block font-bold">Connect With Us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 hover:border-neon-cyan hover:bg-neon-cyan/5 text-slate-400 hover:text-neon-cyan flex items-center justify-center transition-all duration-300 scale-100 hover:scale-110"
                    title={`Visit ROSKYRO on ${social.name}`}
                  >
                    <LucideIcon name={social.name} size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Links Column - Column 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-widest block border-l-2 border-neon-cyan pl-3.5">
              System Navigation
            </h4>
            
            <div className="flex flex-col space-y-3 pl-3.5">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Top Overview
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Framework Solutions
              </button>
              <button 
                onClick={() => scrollToSection('visibility')} 
                className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Search Visibility Tuning
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Pricing Structures
              </button>
              <button 
                onClick={() => scrollToSection('why-roskyro')} 
                className="text-left text-slate-400 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Competitive Advantage
              </button>
            </div>
          </div>

          {/* Contact Details Column - Column 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-widest block border-l-2 border-neon-violet pl-3.5">
              Central Office Contact
            </h4>
            
            <div className="space-y-4 pl-3.5 text-xs sm:text-sm text-slate-400 font-sans">
              
              {/* Deployment speed */}
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1">
                <span className="text-[8.5px] font-mono text-slate-500 uppercase block font-semibold">Standard System Setup SLA</span>
                <span className="text-slate-100 font-semibold text-xs flex items-center gap-1.5 font-display">
                  🏢 7 to 14 Business Days Turnaround
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="h-px bg-slate-900/85 my-6" />

        {/* Bottom Legal Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            <span>© 2026 ROSKYRO. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <span className="text-[9px] px-2 py-0.5 rounded bg-slate-900 border border-slate-850 select-none">
              SECURE TLS CONNECTED
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-slate-900 border border-slate-850 select-none">
              AEO READY
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
