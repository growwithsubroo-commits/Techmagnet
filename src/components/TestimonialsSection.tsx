import React from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data/agencyData';
import { Quote, Sparkles, CheckCircle2, Info } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = TESTIMONIALS,
}) => {
  return (
    <section className="py-20 bg-[#080D1D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Real Growth Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Affiliate Growth Stories &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Campaign Outcomes
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See how active affiliate marketers across Indian platforms transformed their monthly enrollments using Techmagnet campaigns.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-md">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Illustrative client case spotlights; editable review framework for verified promoters.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                {/* Metric pill */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="text-xs text-slate-400">{item.metricLabel}</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {item.metric}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.platform}</p>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
