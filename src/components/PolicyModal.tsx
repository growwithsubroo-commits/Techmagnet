import React from 'react';
import { X, Shield, FileText, RefreshCw } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  activeTab: 'terms' | 'privacy' | 'refund';
  onClose: () => void;
  onTabChange: (tab: 'terms' | 'privacy' | 'refund') => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0B1120] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
              {activeTab === 'terms' && <FileText className="w-4 h-4" />}
              {activeTab === 'privacy' && <Shield className="w-4 h-4" />}
              {activeTab === 'refund' && <RefreshCw className="w-4 h-4" />}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {activeTab === 'terms' && 'Terms and Conditions'}
              {activeTab === 'privacy' && 'Privacy Policy'}
              {activeTab === 'refund' && 'Refund and Cancellation Policy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800/60 bg-slate-950/40 text-xs">
          <button
            onClick={() => onTabChange('terms')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Terms &amp; Conditions
          </button>
          <button
            onClick={() => onTabChange('privacy')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onTabChange('refund')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'refund'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Refund &amp; Cancellation
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">1. Agreement Overview</h4>
              <p>
                Welcome to TECHMAGNET. By accessing our website or retaining our digital marketing, advertising consultation, or affiliate enrollment services, you agree to comply with and be bound by these Terms and Conditions.
              </p>

              <h4 className="text-white font-bold text-base">2. Scope of Services &amp; Independent Relationship</h4>
              <p>
                TECHMAGNET provides independent performance marketing, audience targeting, ad campaign creation, and lead generation consultation to individual affiliate promoters. TECHMAGNET is not an employee, agent, joint venture partner, or authorized distributor of IDP, Bizzgurukull, LeadGuru, SkillPaisa, SkillMize, or any other platform. All transactions and platform registrations occur strictly between the prospective student/customer and your official affiliate links.
              </p>

              <h4 className="text-white font-bold text-base">3. Guaranteed Enrollment Terms &amp; Eligibility</h4>
              <p>
                Any guaranteed enrollment claims or service level expectations are subject to the specific terms set out in your plan agreement:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>You must hold an active, verified affiliate account in good standing on your chosen platform.</li>
                <li>You agree to follow the recommended communication timelines and respond to delivered WhatsApp prospects within a 4-hour window during business hours.</li>
                <li>Campaign guarantees are measured over full qualifying cycles (minimum 14–30 business days).</li>
                <li>Guarantees do not apply if client affiliate accounts are suspended by the third-party platform or if incorrect affiliate URLs are provided.</li>
              </ul>

              <h4 className="text-white font-bold text-base">4. Compliance &amp; Truth in Advertising</h4>
              <p>
                TECHMAGNET creates advertising campaigns that respect the advertising policies of Meta, Google, and Indian consumer protection guidelines. Misleading claims regarding instant wealth, guaranteed returns on investment without study, or false course promises are strictly forbidden in our campaigns.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">1. Information We Collect</h4>
              <p>
                We collect information you provide directly to us when filling out our inquiry forms, initiating WhatsApp chats, or scheduling consultation sessions. This includes your Full Name, Mobile Number, Affiliate Platform name, and campaign notes.
              </p>

              <h4 className="text-white font-bold text-base">2. How We Use Your Information</h4>
              <p>
                We use collected contact details strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Prepare and execute your custom affiliate advertising campaigns.</li>
                <li>Communicate with you directly via WhatsApp, phone, or email regarding lead progress and campaign analytics.</li>
                <li>Provide customer care and process billing invoices.</li>
              </ul>

              <h4 className="text-white font-bold text-base">3. Data Protection &amp; Third Parties</h4>
              <p>
                We do not sell, rent, or trade your personal information to third-party data brokers. Lead information generated through our advertising campaigns is routed directly to your designated WhatsApp account for your private follow-up.
              </p>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">1. Campaign Onboarding &amp; Media Expenses</h4>
              <p>
                Due to direct ad network expenditures (paid ad delivery costs incurred on Meta and Google networks), setup fees and running media spends are non-refundable once an advertising campaign has been created, approved, and launched into live auction delivery.
              </p>

              <h4 className="text-white font-bold text-base">2. Guaranteed Service Review Protocol</h4>
              <p>
                For plans purchased with an enrollment guarantee clause:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>If the verified campaign performance milestones are not attained within the agreed duration despite full compliance with client response protocols, TECHMAGNET will first provide complimentary campaign extensions and audience re-optimizations at no extra agency fee.</li>
                <li>If the extension cycle fails to deliver qualified lead milestones, a prorated agency fee credit or partial refund is processed as specified in the signed WhatsApp service confirmation.</li>
              </ul>

              <h4 className="text-white font-bold text-base">3. Cancellation Requests</h4>
              <p>
                Cancellations requested before campaign assets are finalized and prior to ad launch are eligible for a refund less a 15% administrative preparation fee. Notice must be sent via WhatsApp to +91 9023386997 or emailed to helptechmagnet@gmail.com.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Effective from October 2026 · TECHMAGNET Agency</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
