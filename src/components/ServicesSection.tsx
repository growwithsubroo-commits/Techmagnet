import React from 'react';
import { INITIAL_SERVICES, ServiceItem, createWhatsAppLink } from '../data/agencyData';
import { UserCheck, Target, TrendingUp, MessageSquareText, Share2, Sparkles, MessageCircle, Check } from 'lucide-react';

interface ServicesSectionProps {
  services?: ServiceItem[];
  whatsappNumber: string;
}

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-blue-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-indigo-400" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-purple-400" />,
  Share2: <Share2 className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services = INITIAL_SERVICES,
  whatsappNumber,
}) => {
  return (
    <section id="services" className="py-20 bg-[#070B16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Growth Services for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Ambitious Affiliates
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From precision traffic acquisition to high-converting WhatsApp sales scripts, we deliver end-to-end execution to scale your affiliate income.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const serviceWaLink = createWhatsAppLink(
              `Hi Techmagnet, I am interested in your service: "${service.title}". Please explain how it works and pricing details.`,
              whatsappNumber
            );

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Sparkles className="w-5 h-5 text-blue-400" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Included in campaign:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="mt-7 pt-4 border-t border-slate-800/80">
                  <a
                    href={serviceWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-blue-600 rounded-xl border border-slate-700/80 hover:border-blue-500 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
