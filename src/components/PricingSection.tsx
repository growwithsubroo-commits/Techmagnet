import React from 'react';
import { PricingPlan, createWhatsAppLink } from '../data/agencyData';
import { Check, MessageCircle, Sparkles, Shield, Info, Edit3 } from 'lucide-react';

interface PricingSectionProps {
  plans: PricingPlan[];
  whatsappNumber: string;
  onOpenAdmin: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  plans,
  whatsappNumber,
  onOpenAdmin,
}) => {
  return (
    <section id="pricing" className="py-20 bg-[#080D1D] relative border-t border-slate-800/80">
      {/* Background glow behind pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Transparent Investment Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Plans Engineered for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Real Affiliate Enrollments
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select the tier that aligns with your campaign goals. All packages include direct WhatsApp consultation and strategic ad setup.
          </p>

          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 font-medium transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Admin: Customize plan prices &amp; features</span>
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs max-w-4xl mx-auto flex items-start gap-3">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Plan &amp; Guarantee Terms:</strong> Pricing figures shown below are standard agency campaign retainers and can be customized based on platform scope. Guaranteed enrollment commitments are strictly contingent upon written contractual terms, minimum qualifying campaign duration, verification of valid affiliate links, and mutual adherence to conversion protocols.
          </p>
        </div>

        {/* Pricing Cards Grid (4 cards: Starter, Growth, Premium, Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const waLink = createWhatsAppLink(plan.whatsappMessage, whatsappNumber);

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/40 border-2 border-blue-500 shadow-2xl shadow-blue-950/50 lg:-translate-y-2'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price display with Tabular figures */}
                  <div className="pb-6 mb-6 border-b border-slate-800 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ {plan.period}</span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      What&apos;s included:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-blue-400' : 'text-slate-400'}`} />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA: Choose Plan opening WhatsApp */}
                <div className="pt-6 border-t border-slate-800/80">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Choose Plan</span>
                  </a>

                  <p className="text-[11px] text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span>Direct WhatsApp confirmation</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
