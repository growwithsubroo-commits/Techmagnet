import React from 'react';
import { AGENCY_CONTACT, createWhatsAppLink } from '../data/agencyData';
import { MessageCircle, ArrowRight, Layers, Headphones, Zap, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  const heroWhatsAppLink = createWhatsAppLink(
    'Hi Techmagnet, I want to get started with your affiliate enrollment growth campaigns. Please guide me.',
    whatsappNumber
  );

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Guarantee Tagline with Legal Qualifier */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Affiliate Enrollment & Growth Marketing Agency</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Guaranteed Enrollments.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Powerful Affiliate Growth.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Scale your affiliate business with Techmagnet. We help affiliates across 100+ platforms connect with potential customers and grow their enrollments through strategic marketing campaigns.
            </p>

            {/* Guarantee Terms Clarification Callout */}
            <p className="text-xs text-slate-400/90 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 max-w-xl mx-auto lg:mx-0 flex items-start gap-2">
              <span className="text-blue-400 font-bold shrink-0">Note:</span>
              <span>Guaranteed enrollment services are subject to the selected plan&apos;s written terms, minimum campaign periods, and platform eligibility conditions.</span>
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={heroWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Get Started on WhatsApp</span>
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Plans</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Trust Highlights (3 required highlights) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="w-9 h-9 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">100+ Platforms</h3>
                    <p className="text-[11px] text-slate-400">Broadest Network Coverage</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="w-9 h-9 rounded-md bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Growth Support</h3>
                    <p className="text-[11px] text-slate-400">Dedicated WhatsApp Team</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="w-9 h-9 rounded-md bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Custom Campaigns</h3>
                    <p className="text-[11px] text-slate-400">Strategic Enrollment Ads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Presentation with Animated Chart & Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card Glow */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl shadow-blue-950/40">
                {/* Main Visual Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/hero_marketing_growth_1791548288165.jpg"
                    alt="TECHMAGNET digital affiliate marketing command center"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating live indicator tag */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700/60 flex items-center gap-2 text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Real-Time Campaign Engine</span>
                  </div>
                </div>

                {/* Dashboard Metrics Overlay Box */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400">Campaign Acceleration</p>
                      <h4 className="text-lg font-bold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>High-Intent Leads Pipeline</span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Tier-1 & 2 Focus
                    </span>
                  </div>

                  {/* Animated Growth Graph Representation */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Enrollment Conversion Rate</span>
                      <span className="font-mono font-semibold text-emerald-400 tabular-nums">3.8x Industry Avg</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[84%] animate-pulse" />
                    </div>
                  </div>

                  {/* Live Simulation Card */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                      <span className="text-[11px] text-slate-400 block">Avg. Inquiry Time</span>
                      <span className="text-base font-bold text-white font-mono tabular-nums">&lt; 3 Hours</span>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">Direct to WhatsApp</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                      <span className="text-[11px] text-slate-400 block">Lead Intent Filter</span>
                      <span className="text-base font-bold text-white font-mono tabular-nums">98.4%</span>
                      <span className="text-[10px] text-blue-400 block mt-0.5">Budget Qualified</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Active coverage across IDP, Bizzgurukull, LeadGuru &amp; more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
