import React, { useState } from 'react';
import { PlatformItem, createWhatsAppLink } from '../data/agencyData';
import { Search, MessageCircle, ExternalLink, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface PlatformsSectionProps {
  platforms: PlatformItem[];
  whatsappNumber: string;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({ platforms, whatsappNumber }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Indian EdTech', 'Skill Learning', 'Affiliate Network'];

  const filteredPlatforms = platforms.filter((plat) => {
    const matchesSearch =
      plat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plat.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || plat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="platforms" className="py-20 bg-[#080D1D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Multi-Network Growth Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One Agency.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              100+ Affiliate Platforms.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you are promoting skill-learning packages, digital courses, or multi-tier affiliate programs, Techmagnet builds customized enrollment funnels that deliver targeted prospects.
          </p>

          {/* Legal Non-endorsement Disclaimer */}
          <div className="mt-4 inline-flex items-start gap-2 text-xs text-slate-400 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-lg text-left">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Platform Notice:</strong> Techmagnet provides independent digital marketing and lead acquisition services for affiliate marketers. We are not officially affiliated with, endorsed by, or authorized agents of the referenced third-party platforms.
            </span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platform (e.g. IDP, Bizzgurukull)..."
              className="w-full pl-9 pr-3 py-2 text-xs text-white bg-slate-950/80 border border-slate-700/80 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlatforms.map((plat) => {
            const cardWaLink = createWhatsAppLink(
              `Hi Techmagnet, I want to get enrollments for ${plat.name}. Please share your campaign strategy and plan pricing.`,
              whatsappNumber
            );

            return (
              <div
                key={plat.id}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-400">{plat.category}</span>
                    {plat.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {plat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    <span>{plat.name}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: plat.accent || '#3B82F6' }}
                    />
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed min-h-[48px]">
                    {plat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">Supported by TM</span>

                  {/* Primary CTA button on each platform card */}
                  <a
                    href={cardWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Get Enrollments</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPlatforms.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400">No platforms found matching &quot;{searchQuery}&quot;.</p>
            <p className="text-xs text-slate-500 mt-1">Techmagnet supports any custom affiliate program!</p>
            <a
              href={createWhatsAppLink(
                `Hi Techmagnet, I am promoting ${searchQuery || 'a custom platform'} and want to discuss enrollment campaigns.`,
                whatsappNumber
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire for Custom Platform</span>
            </a>
          </div>
        )}

        {/* Global Bottom Banner for Custom Networks */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Don&apos;t see your affiliate platform listed?</h4>
            <p className="text-sm text-slate-300">
              We create custom targeted campaigns for 100+ global and Indian affiliate networks. Tell us your product link.
            </p>
          </div>
          <a
            href={createWhatsAppLink('Hi Techmagnet, I promote a different platform not listed on the website. Can you run enrollment campaigns for it?', whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl whitespace-nowrap"
          >
            <span>Ask for Your Platform</span>
            <ExternalLink className="w-4 h-4 text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
