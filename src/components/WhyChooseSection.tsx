import React from 'react';
import { Target, Users, Zap, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const points = [
    {
      icon: <Target className="w-5 h-5 text-blue-400" />,
      title: 'Pre-Qualified Intent Targeting',
      desc: 'We filter out students and job seekers who are merely browsing. We target people who are genuinely interested in learning high-income digital skills and have the budget ready.',
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      title: 'Dedicated WhatsApp Growth Manager',
      desc: 'You do not just get raw leads; you receive direct guidance on voice notes, objection responses, and daily status funnels that double your closing rate.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: '100+ Platform Domain Experience',
      desc: 'We understand the subtle nuances of IDP, Bizzgurukull, LeadGuru, SkillPaisa, and SkillMize. We speak the exact language that prospective learners resonate with.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Policy-Compliant Meta Ad Execution',
      desc: 'All our creative funnels follow strict advertising standards to ensure long-term stability and consistent delivery without ad account interruptions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#080D1D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/src/assets/images/agency_campaign_strategy_1791548301994.jpg"
                  alt="Techmagnet marketing team analyzing affiliate growth strategy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Stat highlight card */}
              <div className="p-5 bg-slate-900/90 border-t border-slate-800/90 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Performance Track Record</span>
                  <span className="text-xl font-extrabold text-white font-mono">100+ Platforms</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">Average Closing Boost</span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono">+185%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy & Pillars Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <span>Why Techmagnet</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built Specifically for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Affiliate Growth &amp; Real Conversions
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Most generic marketing agencies do not understand affiliate business models. They send cold, unqualified traffic that clogs your WhatsApp inbox with unhelpful messages. Techmagnet specializes solely in the affiliate education and skill-monetization sector.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
                    {pt.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{pt.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full transparency, clear campaign metrics, and guaranteed support standards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
