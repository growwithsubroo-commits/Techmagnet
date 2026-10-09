import React from 'react';
import { AGENCY_CONTACT, createWhatsAppLink } from '../data/agencyData';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'terms' | 'privacy' | 'refund') => void;
  whatsappNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, whatsappNumber }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-base font-black">
                TM
              </span>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {AGENCY_CONTACT.brandName}
              </span>
            </div>
            <p className="text-xs text-blue-400 font-semibold">{AGENCY_CONTACT.tagline}</p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier affiliate enrollment and growth marketing agency in India. We help affiliate creators, students, and digital course promoters scale with precision advertising and qualified WhatsApp leads.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Digital Agency · All Platforms Supported</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-blue-400 transition-colors">
                  Supported Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Pricing &amp; Plans
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Platforms quick list */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Featured Platforms</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={createWhatsAppLink('Hi Techmagnet, I want enrollments for IDP.', whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  IDP Affiliate Marketing
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink('Hi Techmagnet, I want enrollments for Bizzgurukull.', whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Bizzgurukull Campaigns
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink('Hi Techmagnet, I want enrollments for LeadGuru.', whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LeadGuru Lead Funnels
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink('Hi Techmagnet, I want enrollments for SkillPaisa.', whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  SkillPaisa Growth Strategy
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink('Hi Techmagnet, I want enrollments for SkillMize.', whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  SkillMize Promotions
                </a>
              </li>
              <li>
                <span className="text-slate-500">100+ Custom Affiliate Programs</span>
              </li>
            </ul>
          </div>

          {/* Direct Agency Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Agency</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${AGENCY_CONTACT.officePhone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Call: {AGENCY_CONTACT.officePhone}</span>
              </a>
              <a
                href={createWhatsAppLink('Hi Techmagnet, I want to discuss campaign support.', whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {AGENCY_CONTACT.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${AGENCY_CONTACT.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{AGENCY_CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Sector 62, Noida, NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Legal Notice &amp; Disclaimer:</strong> TECHMAGNET is an independent digital performance marketing agency based in India. TECHMAGNET is not an authorized distributor, partner, or subsidiary of IDP, Bizzgurukull, LeadGuru, SkillPaisa, SkillMize, Digistore24, or any other platform referenced. All trademarks, program logos, and brand titles belong to their respective proprietary holders. Guaranteed enrollment representations are service-level commitments governed by individual written campaign agreements and client adherence to sales lead response protocols.
          </p>
        </div>

        {/* Bottom Bar with Policy Links */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} {AGENCY_CONTACT.brandName}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Refund &amp; Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
