import React, { useState, useEffect } from 'react';
import { AGENCY_CONTACT, createWhatsAppLink } from '../data/agencyData';
import { Menu, X, MessageCircle, Phone, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  whatsappNumber: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, whatsappNumber }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getEnrollmentWaLink = createWhatsAppLink(
    'Hi Techmagnet, I want to get enrollments for my affiliate business. Please share details.',
    whatsappNumber
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single line) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white text-base font-black shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              TM
            </span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {AGENCY_CONTACT.brandName}
            </span>
          </a>

          {/* Zone 2: Navigation Links (single line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-4 decoration-blue-500/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Live Pricing / Config Button for Administrator */}
            <button
              onClick={onOpenAdmin}
              title="Edit Pricing & Settings"
              className="hidden sm:flex items-center justify-center p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors text-xs"
              aria-label="Admin settings"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Primary Action CTA */}
            <a
              href={getEnrollmentWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white/90" />
              <span>Get Enrollments</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${AGENCY_CONTACT.officePhone}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/80 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700/70"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Office: {AGENCY_CONTACT.officePhoneDisplay}</span>
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex-1 py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 rounded-lg text-center"
              >
                ⚙️ Admin Editor
              </button>
              <a
                href={getEnrollmentWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-2 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-blue-600 rounded-lg text-center"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
