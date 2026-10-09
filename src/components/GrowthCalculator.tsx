import React, { useState } from 'react';
import { createWhatsAppLink } from '../data/agencyData';
import { Calculator, MessageCircle, ArrowRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

interface GrowthCalculatorProps {
  whatsappNumber: string;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ whatsappNumber }) => {
  const [platform, setPlatform] = useState('IDP');
  const [targetEnrollments, setTargetEnrollments] = useState<number>(10);
  const [avgCommission, setAvgCommission] = useState<number>(2000);

  // Math model
  const projectedRevenue = targetEnrollments * avgCommission;
  const estimatedQualifiedLeads = Math.round(targetEnrollments * 4.5); // ~22% closing rate with TM scripts
  const recommendedPlan =
    targetEnrollments <= 6
      ? 'Starter Plan (₹2,999)'
      : targetEnrollments <= 18
      ? 'Growth Plan (₹5,999)'
      : 'Premium Plan (₹9,999)';

  const calculatorWaMessage = `Hi Techmagnet, I ran the Enrollment Calculator for ${platform}. My goal is ${targetEnrollments} enrollments/month (Estimated target revenue: ₹${projectedRevenue.toLocaleString('en-IN')}). The recommended package is ${recommendedPlan}. Please review my campaign strategy.`;
  const waLink = createWhatsAppLink(calculatorWaMessage, whatsappNumber);

  return (
    <section className="py-16 bg-[#070B16] relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Campaign Planner</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Estimate Your Monthly Enrollment Potential
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Adjust the sliders to simulate campaign lead volume, required WhatsApp conversations, and projected commission outcomes.
                </p>
              </div>

              {/* Platform Selector */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  1. Your Affiliate Platform
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {['IDP', 'Bizzgurukull', 'LeadGuru', 'SkillPaisa', 'Other'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPlatform(item)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        platform === item
                          ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Enrollments Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">2. Target Monthly Enrollments:</span>
                  <span className="font-mono text-base font-bold text-blue-400">
                    {targetEnrollments} enrollments
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  step="1"
                  value={targetEnrollments}
                  onChange={(e) => setTargetEnrollments(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>3 (Beginner)</span>
                  <span>15 (Scaling)</span>
                  <span>40+ (Top Earner)</span>
                </div>
              </div>

              {/* Commission Per Enrollment Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">3. Avg. Commission Per Enrollment:</span>
                  <span className="font-mono text-base font-bold text-emerald-400">
                    ₹{avgCommission.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="7000"
                  step="250"
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹500 / sale</span>
                  <span>₹2,500 / sale</span>
                  <span>₹7,000 / sale</span>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5">
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Projected Gross Commission
                  </span>
                  <div className="text-3xl font-extrabold text-white font-mono mt-1 text-emerald-400 tabular-nums">
                    ₹{projectedRevenue.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Est. Inbound Leads</span>
                    <span className="text-lg font-bold text-white font-mono tabular-nums">
                      ~{estimatedQualifiedLeads}
                    </span>
                    <span className="text-[10px] text-blue-400 block">WhatsApp inquiries</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Recommended Tier</span>
                    <span className="text-xs font-bold text-indigo-400 block mt-1 leading-tight">
                      {recommendedPlan.split(' (')[0]}
                    </span>
                    <span className="text-[10px] text-slate-400 block">Optimized ROI</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-[11px] text-slate-300">
                  <span className="font-semibold text-blue-300 block mb-0.5">Strategy Insight:</span>
                  With Techmagnet&apos;s intent-filtering and WhatsApp closing templates, affiliates achieve an average 20–25% conversion on pre-qualified leads.
                </div>

                {/* Direct CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Discuss Strategy on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
