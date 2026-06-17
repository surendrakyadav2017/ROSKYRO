import React, { useState, useEffect } from 'react';

// Core layout segments
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemGaps from './components/ProblemGaps';
import KyroFramework from './components/KyroFramework';
import VisibilityLayer from './components/VisibilityLayer';
import FeaturesHighlight from './components/FeaturesHighlight';
import WhyRoskyro from './components/WhyRoskyro';
import PricingSection from './components/PricingSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AuditModal from './components/AuditModal';

// Shared structured datasets
import { PRICING_PLANS } from './data/solutionsData';
import { PricingPlan } from './types';
import LucideIcon from './components/LucideIcon';

export default function App() {
  // 1. Core Persistent State
  const [logoSrc, setLogoSrc] = useState<string | null>(() => {
    return localStorage.getItem('roskyro_logo_cache') || null;
  });

  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(() => {
    const cached = localStorage.getItem('roskyro_pricing_cache');
    return cached ? JSON.parse(cached) : PRICING_PLANS;
  });

  // 2. Interactive States & Modes
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [planContext, setPlanContext] = useState<string>('');

  // 3. Cache synchronizers
  const handleLogoUpload = (base64: string | null) => {
    setLogoSrc(base64);
    if (base64) {
      localStorage.setItem('roskyro_logo_cache', base64);
    } else {
      localStorage.removeItem('roskyro_logo_cache');
    }
  };

  const handleUpdatePricing = (updated: PricingPlan[]) => {
    setPricingPlans(updated);
    localStorage.setItem('roskyro_pricing_cache', JSON.stringify(updated));
  };

  const handleBookAudit = () => {
    setPlanContext('');
    setIsAuditModalOpen(true);
  };

  const handlePlanBooking = (planName: string) => {
    setPlanContext(planName);
    setIsAuditModalOpen(true);
  };

  const scrollToSolutions = () => {
    const elem = document.getElementById('solutions');
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // 4. Highlight indicator for testing edit features
  const handleClearCache = () => {
    if (confirm("Restore logo and pricing back to default values?")) {
      localStorage.removeItem('roskyro_logo_cache');
      localStorage.removeItem('roskyro_pricing_cache');
      setLogoSrc(null);
      setPricingPlans(PRICING_PLANS);
      setIsEditMode(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">

      {/* Sticky Header */}
      <Navbar 
        logoSrc={logoSrc} 
        onLogoUpload={handleLogoUpload} 
        onBookAudit={handleBookAudit}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
      />

      {/* Component Core Segments */}
      <main className="flex-grow">
        
        {/* B. Hero Call */}
        <Hero 
          onBookAudit={handleBookAudit} 
          onExploreSystems={scrollToSolutions} 
        />
        
        {/* C. Gaps checklist */}
        <ProblemGaps />
        
        {/* D. KYRO Interactive Switcher */}
        <KyroFramework onBookAudit={handleBookAudit} />
        
        {/* E. AI Search optimization details */}
        <VisibilityLayer />
        
        {/* F. Mini highlight strip */}
        <FeaturesHighlight />
        
        {/* G. Advantages bento */}
        <WhyRoskyro />
        
        {/* H. Pricing parameters */}
        <PricingSection 
          plans={pricingPlans} 
          onUpdatePlan={handleUpdatePricing} 
          isEditMode={isEditMode} 
          onBookAuditForPlan={handlePlanBooking}
        />
        
        {/* J. Bottom Action frame */}
        <FinalCta onBookAudit={handleBookAudit} />

      </main>

      {/* K. Brand Footer */}
      <Footer 
        logoSrc={logoSrc} 
        onLogoUpload={handleLogoUpload} 
        onBookAudit={handleBookAudit} 
      />

      {/* L. Float WhatsApp Contact */}
      <FloatingWhatsApp />

      {/* M. Shared audit flow overlay */}
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
        selectedPlanContext={planContext}
      />

    </div>
  );
}
