import React, { useState, useEffect } from 'react';
import LogoPlaceholder from './LogoPlaceholder';
import { Menu, X, HelpCircle, Edit2, Check } from 'lucide-react';

interface NavbarProps {
  logoSrc: string | null;
  onLogoUpload: (base64: string | null) => void;
  onBookAudit: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

export default function Navbar({ 
  logoSrc, 
  onLogoUpload, 
  onBookAudit,
  isEditMode,
  onToggleEditMode
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-930 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <LogoPlaceholder logoSrc={logoSrc} onLogoUpload={onLogoUpload} variant="nav" isEditMode={isEditMode} />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 font-sans">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('why-roskyro')} 
              className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium text-slate-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right Action Widgets */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Glowing Book Free Audit Button */}
            <button
              onClick={onBookAudit}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-bold text-slate-100 rounded-lg group bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-500 hover:text-white dark:text-white focus:outline-none cursor-pointer mt-2"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-md group-hover:bg-opacity-0">
                Book Free Audit
              </span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu and edit controls toggle - Right side of toolbar for smaller viewport */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 shadow-2xl py-6 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-left py-2 font-medium text-slate-300 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="text-left py-2 font-medium text-slate-300 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-left py-2 font-medium text-slate-300 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('why-roskyro')} 
              className="text-left py-2 font-medium text-slate-300 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left py-2 font-medium text-slate-300 hover:text-neon-cyan transition-colors cursor-pointer"
            >
              Contact
            </button>

            <div className="pt-4 border-t border-slate-900 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookAudit();
                }}
                className="w-full text-center py-2.5 rounded-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
