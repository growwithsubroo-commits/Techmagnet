import React from 'react';
import { HOW_IT_WORKS_STEPS, createWhatsAppLink } from '../data/agencyData';
import { CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  whatsappNumber: string;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ whatsappNumber }) => {
  const startCampaignWaLink = createWhatsAppLink(
    'Hi Techmagnet, I am ready to start my affiliate enrollment campaign. Please guide me through onboarding.',
    whatsappNumber
  );

  return (
    <section id="how-it-works" className="py-20 bg-[#070B16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Structured 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works —{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              From Setup to Enrollments
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A seamless, battle-tested launch workflow designed to get your affiliate campaign live and generating qualified student inquiries in 24–48 hours.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 group"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.step}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 text-xs flex items-center justify-center font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                {/* Brief description from prompt */}
                <p className="mt-2 text-sm font-medium text-slate-200 leading-snug">
                  {item.desc}
                </p>

                {/* Additional workflow details */}
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900 to-indigo-950/50 border border-blue-600/30 max-w-2xl mx-auto shadow-xl">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Ready to elevate your affiliate conversions?</h4>
              <p className="text-xs text-slate-300 mt-0.5">Let our media buyers launch your tailored campaign today.</p>
            </div>
            <a
              href={startCampaignWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start Your Campaign Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
