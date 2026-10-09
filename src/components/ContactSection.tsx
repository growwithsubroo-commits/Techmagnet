import React, { useState } from 'react';
import { AGENCY_CONTACT, PricingPlan, createWhatsAppLink } from '../data/agencyData';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';

interface ContactSectionProps {
  whatsappNumber: string;
  plans: PricingPlan[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ whatsappNumber, plans }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [platform, setPlatform] = useState('IDP');
  const [selectedPlan, setSelectedPlan] = useState('Growth Plan (₹5,999)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Affiliate Inquiry — TECHMAGNET*
• *Full Name:* ${fullName || 'Not provided'}
• *Mobile Number:* ${mobileNumber || 'Not provided'}
• *Affiliate Platform:* ${platform}
• *Interested Plan:* ${selectedPlan}
• *Message:* ${message || 'Please share enrollment campaign details.'}`;

    const waUrl = createWhatsAppLink(formattedMessage, whatsappNumber);
    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#080D1D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Fast WhatsApp &amp; Direct Phone Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect with the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Techmagnet Team
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have questions about campaign timelines, guaranteed enrollments, or platform support? Reach us directly or submit your inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Agency Direct Desk</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our growth strategists operate 7 days a week to support active affiliate campaigns across India.
              </p>

              <div className="space-y-4">
                {/* Office Phone Click-to-call */}
                <a
                  href={`tel:${AGENCY_CONTACT.officePhone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Office Phone (Click to Call)
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 font-mono">
                      {AGENCY_CONTACT.officePhone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href={createWhatsAppLink(
                    'Hi Techmagnet, I want to inquire about starting an enrollment marketing campaign.',
                    whatsappNumber
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/50 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-emerald-400 block uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 font-mono">
                      {AGENCY_CONTACT.whatsappDisplay}
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${AGENCY_CONTACT.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Official Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300">
                      {AGENCY_CONTACT.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase tracking-wider">
                      Operating Headquarters
                    </span>
                    <span className="text-xs text-slate-300">{AGENCY_CONTACT.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-300 flex items-center gap-3">
              <Shield className="w-4 h-4 text-blue-400 shrink-0" />
              <span>We never share your contact details. Direct WhatsApp privacy guaranteed.</span>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send an Instant Campaign Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill the fields below to launch a pre-formatted WhatsApp chat with our lead strategist.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Verma"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950 border border-slate-700/80 rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Mobile Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950 border border-slate-700/80 rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Affiliate Platform Selection */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Affiliate Platform <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950 border border-slate-700/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                    >
                      <option value="IDP">IDP</option>
                      <option value="Bizzgurukull">Bizzgurukull</option>
                      <option value="LeadGuru">LeadGuru</option>
                      <option value="SkillPaisa">SkillPaisa</option>
                      <option value="SkillMize">SkillMize</option>
                      <option value="Millionaire Track">Millionaire Track</option>
                      <option value="Gyan Kamao">Gyan Kamao</option>
                      <option value="RichIND">RichIND</option>
                      <option value="Digistore24">Digistore24</option>
                      <option value="ClickBank">ClickBank</option>
                      <option value="Other Platform">Other Platform</option>
                    </select>
                  </div>

                  {/* Interested Plan Selection */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Interested Plan <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950 border border-slate-700/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                    >
                      {plans.map((p) => (
                        <option key={p.id} value={`${p.name} (${p.price})`}>
                          {p.name} ({p.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current daily enrollment targets, past experience, or specific questions..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950 border border-slate-700/80 rounded-xl placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Message via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp opened with your prefilled details! If not redirected, click the WhatsApp button directly.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
