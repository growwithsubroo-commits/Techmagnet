import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformsSection } from './components/PlatformsSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PolicyModal } from './components/PolicyModal';
import { AdminEditModal } from './components/AdminEditModal';
import {
  INITIAL_PLANS,
  INITIAL_PLATFORMS,
  AGENCY_CONTACT,
  PricingPlan,
} from './data/agencyData';

export default function App() {
  const [plans, setPlans] = useState<PricingPlan[]>(() => {
    try {
      const saved = localStorage.getItem('techmagnet_plans');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback to initial
    }
    return INITIAL_PLANS;
  });

  const [whatsappNumber, setWhatsappNumber] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('techmagnet_whatsapp');
      if (saved) return saved;
    } catch {
      // fallback
    }
    return AGENCY_CONTACT.whatsappNumber;
  });

  const [policyState, setPolicyState] = useState<{
    isOpen: boolean;
    tab: 'terms' | 'privacy' | 'refund';
  }>({
    isOpen: false,
    tab: 'terms',
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('techmagnet_plans', JSON.stringify(plans));
      localStorage.setItem('techmagnet_whatsapp', whatsappNumber);
    } catch {
      // ignore
    }
  }, [plans, whatsappNumber]);

  const handleOpenPolicy = (tab: 'terms' | 'privacy' | 'refund') => {
    setPolicyState({ isOpen: true, tab });
  };

  const handleClosePolicy = () => {
    setPolicyState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSaveAdmin = (updatedPlans: PricingPlan[], updatedWhatsApp: string) => {
    setPlans(updatedPlans);
    setWhatsappNumber(updatedWhatsApp);
  };

  const handleResetAdmin = () => {
    setPlans(INITIAL_PLANS);
    setWhatsappNumber(AGENCY_CONTACT.whatsappNumber);
    localStorage.removeItem('techmagnet_plans');
    localStorage.removeItem('techmagnet_whatsapp');
  };

  return (
    <div className="min-h-screen bg-[#070B16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        whatsappNumber={whatsappNumber}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero whatsappNumber={whatsappNumber} />

        {/* 2. Platforms Section */}
        <PlatformsSection
          platforms={INITIAL_PLATFORMS}
          whatsappNumber={whatsappNumber}
        />

        {/* 3. Our Services Section */}
        <ServicesSection whatsappNumber={whatsappNumber} />

        {/* 4. Pricing and Plans Section */}
        <PricingSection
          plans={plans}
          whatsappNumber={whatsappNumber}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 5. How It Works Section */}
        <HowItWorksSection whatsappNumber={whatsappNumber} />

        {/* 6. Why Choose Techmagnet Section */}
        <WhyChooseSection />

        {/* 7. Interactive Growth & Enrollment Calculator */}
        <GrowthCalculator whatsappNumber={whatsappNumber} />

        {/* 8. Testimonials & Verified Case Outlines */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Contact Section */}
        <ContactSection
          whatsappNumber={whatsappNumber}
          plans={plans}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={handleOpenPolicy}
        whatsappNumber={whatsappNumber}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp whatsappNumber={whatsappNumber} />

      {/* Policy Dialog Modal */}
      <PolicyModal
        isOpen={policyState.isOpen}
        activeTab={policyState.tab}
        onClose={handleClosePolicy}
        onTabChange={(tab) => setPolicyState({ isOpen: true, tab })}
      />

      {/* Admin Settings Modal */}
      <AdminEditModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        plans={plans}
        whatsappNumber={whatsappNumber}
        onSave={handleSaveAdmin}
        onReset={handleResetAdmin}
      />
    </div>
  );
}
