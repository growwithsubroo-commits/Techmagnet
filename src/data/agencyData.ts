export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  whatsappMessage: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  category: 'Indian EdTech' | 'Skill Learning' | 'Affiliate Network' | 'Digital & Tools';
  description: string;
  badge?: string;
  accent: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  platform: string;
  location: string;
  feedback: string;
  metric: string;
  metricLabel: string;
}

export const AGENCY_CONTACT = {
  brandName: 'TECHMAGNET',
  tagline: 'Your Growth. Our Strategy. Real Enrollments.',
  subheading:
    'Scale your affiliate business with Techmagnet. We help affiliates across 100+ platforms connect with potential customers and grow their enrollments through strategic marketing campaigns.',
  officePhone: '+91 8400763142',
  officePhoneDisplay: '+91 8400763142',
  whatsappNumber: '919023386997',
  whatsappDisplay: '+91 9023386997',
  email: 'helptechmagnet@gmail.com',
  address: 'Commercial Growth Hub, Sector 62, Noida, NCR, India',
};

export const createWhatsAppLink = (message: string, customNumber?: string) => {
  const number = customNumber || AGENCY_CONTACT.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const INITIAL_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: '₹2,999',
    period: 'per campaign',
    tagline: 'Ideal for beginners seeking initial enrollment momentum',
    features: [
      'Enrollment campaign consultation',
      'Single-platform targeting',
      'Basic marketing support',
      'WhatsApp assistance',
      'Campaign reporting',
      'Audience segmentation basics',
    ],
    whatsappMessage:
      'Hi Techmagnet, I am interested in the Starter Plan (₹2,999). Please share the enrollment details.',
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    price: '₹5,999',
    period: 'per campaign',
    popular: true,
    tagline: 'Most recommended for scaling affiliates looking for regular enrollments',
    features: [
      'Advanced campaign planning',
      'Up to 3 supported platforms',
      'Audience targeting assistance',
      'Priority WhatsApp support',
      'Performance reporting',
      'Ad creative copy optimization',
      'Dedicated campaign manager',
    ],
    whatsappMessage:
      'Hi Techmagnet, I am interested in the Growth Plan (₹5,999). Please share the enrollment details.',
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '₹9,999',
    period: 'per campaign',
    tagline: 'Full-funnel campaign acceleration for top-tier affiliate earners',
    features: [
      'Customized enrollment strategy',
      'Multi-platform campaign support',
      'Dedicated campaign assistance',
      'Priority consultation',
      'Detailed performance reporting',
      'Conversion funnel audit',
      'Custom high-converting scripts & templates',
      'Weekly strategy review calls',
    ],
    whatsappMessage:
      'Hi Techmagnet, I am interested in the Premium Plan (₹9,999). Please share the enrollment details.',
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise Plan',
    price: 'Custom',
    period: 'tailored setup',
    tagline: 'Tailored high-volume enrollment campaigns for teams and agency partners',
    features: [
      'High-volume enrollment acquisition pipeline',
      'Dedicated marketing pod & creative designer',
      'Multi-account tracking & CRM integration',
      'Custom landing funnel & video ad strategy',
      'Direct WhatsApp priority escalation',
      'Bespoke SLA and custom compliance terms',
    ],
    whatsappMessage:
      'Hi Techmagnet, I need a customized affiliate enrollment package. Please contact me.',
  },
];

export const INITIAL_PLATFORMS: PlatformItem[] = [
  {
    id: 'idp',
    name: 'IDP',
    category: 'Indian EdTech',
    description: 'Targeted student & affiliate lead funnels for IDP educational packages.',
    badge: 'High Demand',
    accent: '#3B82F6',
  },
  {
    id: 'bizzgurukull',
    name: 'Bizzgurukull',
    category: 'Skill Learning',
    description: 'Strategic enrollment acceleration and audience targeting for Bizzgurukull courses.',
    badge: 'Popular',
    accent: '#8B5CF6',
  },
  {
    id: 'leadguru',
    name: 'LeadGuru',
    category: 'Indian EdTech',
    description: 'High-intent lead nurturing and conversion campaign support for LeadGuru promoters.',
    badge: 'Trending',
    accent: '#06B6D4',
  },
  {
    id: 'skillpaisa',
    name: 'SkillPaisa',
    category: 'Skill Learning',
    description: 'Digital performance marketing and WhatsApp conversion setups for SkillPaisa affiliates.',
    badge: 'Fast Growing',
    accent: '#10B981',
  },
  {
    id: 'skillmize',
    name: 'SkillMize',
    category: 'Skill Learning',
    description: 'Custom social ad funnels and enrollment guidance tailored for SkillMize packages.',
    badge: 'Popular',
    accent: '#F59E0B',
  },
  {
    id: 'millionaire-track',
    name: 'Millionaire Track',
    category: 'Indian EdTech',
    description: 'Performance outreach and verified prospect routing for active course promoters.',
    badge: 'Supported',
    accent: '#EC4899',
  },
  {
    id: 'gyan-kamao',
    name: 'Gyan Kamao',
    category: 'Skill Learning',
    description: 'Social media growth strategy and qualified leads for Gyan Kamao affiliate packages.',
    badge: 'Supported',
    accent: '#6366F1',
  },
  {
    id: 'richind',
    name: 'RichIND',
    category: 'Indian EdTech',
    description: 'Multi-channel acquisition strategies for RichIND digital product distributors.',
    badge: 'Supported',
    accent: '#14B8A6',
  },
  {
    id: 'digistore24',
    name: 'Digistore24',
    category: 'Affiliate Network',
    description: 'Global affiliate traffic generation and high-EPC product funnel optimization.',
    badge: 'Global',
    accent: '#3B82F6',
  },
  {
    id: 'clickbank',
    name: 'ClickBank',
    category: 'Affiliate Network',
    description: 'Audience testing, targeted social campaigns, and bridge page funnel consultation.',
    badge: 'Global',
    accent: '#F97316',
  },
  {
    id: 'skillbazaar',
    name: 'SkillBazaar',
    category: 'Skill Learning',
    description: 'Direct enrollment lead generation and conversion follow-up workflows.',
    badge: 'Supported',
    accent: '#8B5CF6',
  },
  {
    id: 'other-platforms',
    name: '100+ Other Affiliate Platforms',
    category: 'Affiliate Network',
    description: 'Customized strategy for any regional or international affiliate affiliate program you promote.',
    badge: 'Custom Platform',
    accent: '#60A5FA',
  },
];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Affiliate Enrollment Generation',
    shortDesc:
      'Engineered outreach and targeted campaigns specifically built to bring real students, members, and customers into your affiliate packages.',
    deliverables: [
      'Pre-qualified prospect routing',
      'Platform-specific campaign setup',
      'Real-time lead delivery to WhatsApp',
      'Guaranteed performance under plan terms',
    ],
    icon: 'UserCheck',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Qualified Lead Generation',
    shortDesc:
      'Filter out non-serious inquiries and target candidates with active buying interest, budget readiness, and platform familiarity.',
    deliverables: [
      'Demographic & interest filtering',
      'Location-based targeting (Tier 1 & 2 cities)',
      'Intent verification questionnaires',
      'High conversion readiness',
    ],
    icon: 'Target',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Conversion-Focused Marketing Campaigns',
    shortDesc:
      'High-impact paid advertising campaigns across Meta, Instagram Reels, and YouTube designed for maximum ROI per rupee spent.',
    deliverables: [
      'Engaging ad visual copy & hooks',
      'Continuous A/B testing & cost control',
      'Click-to-WhatsApp direct routing',
      'Exclusion of junk clicks & bot traffic',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Affiliate Growth Consultation',
    shortDesc:
      '1-on-1 strategic guidance on objection handling, WhatsApp sales scripts, voice note closing techniques, and daily routine optimization.',
    deliverables: [
      'Proven WhatsApp closing scripts',
      'Status strategy & broadcast frameworks',
      'Objection handling cheat-sheets',
      'Personal branding advice',
    ],
    icon: 'MessageSquareText',
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Social Media Marketing',
    shortDesc:
      'Elevate your digital footprint on Instagram, Facebook, and Telegram with professional content concepts that build instant authority.',
    deliverables: [
      'Reel concept templates & hooks',
      'Bio & profile optimization for trust',
      'Organic engagement blueprints',
      'Story sequence templates that sell',
    ],
    icon: 'Share2',
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Custom Affiliate Promotion Strategies',
    shortDesc:
      'Bespoke promotional roadmaps for high-ticket packages, regional language audiences, and specialized affiliate niches.',
    deliverables: [
      'Localized vernacular messaging (Hindi & English)',
      'High-ticket course closing funnels',
      'Seasonal launch campaign planning',
      'Detailed competitor & market audits',
    ],
    icon: 'Sparkles',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'Step 1',
    title: 'Choose Your Platform',
    desc: 'Tell us which affiliate platform you work with (IDP, Bizzgurukull, LeadGuru, SkillPaisa, SkillMize, or any other).',
    details: 'We assess your current platform tier, product commission structures, and target learner demographics to tailor our messaging.',
  },
  {
    step: 'Step 2',
    title: 'Select Your Plan',
    desc: 'Choose an enrollment marketing package suitable for your monthly growth goals and investment appetite.',
    details: 'Select Starter, Growth, or Premium. Our transparent pricing outlines exact campaign scopes and deliverables before you pay.',
  },
  {
    step: 'Step 3',
    title: 'Campaign Setup',
    desc: 'Our team discusses your requirements and prepares your campaign strategy, creative assets, and lead funnel.',
    details: 'Within 24–48 hours, our media specialists craft targeted ads, optimize tracking parameters, and configure direct WhatsApp lead routing.',
  },
  {
    step: 'Step 4',
    title: 'Enrollment Support',
    desc: 'Track campaign progress and receive enrollment-related assistance, objection-handling tips, and daily reports.',
    details: 'Receive qualified prospects directly in your inbox, alongside consultation notes to help you close enrollments smoothly.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Guarantees & Policies',
    question: 'How does Techmagnet guarantee enrollments?',
    answer:
      'Our guaranteed enrollment campaigns utilize targeted performance marketing funnels designed to deliver qualified, high-intent prospects directly to your WhatsApp. All guarantees are strictly subject to the selected plan\'s written terms, minimum campaign periods, adherence to our conversion follow-up guidelines, and platform eligibility conditions. Detailed terms are shared upon onboarding.',
  },
  {
    category: 'Platforms',
    question: 'Are you affiliated with IDP, Bizzgurukull, LeadGuru, or other platforms?',
    answer:
      'No. TECHMAGNET is an independent affiliate enrollment and digital marketing agency. We provide growth marketing, advertising, and lead consulting services to independent affiliates. We do not claim official partnership, direct endorsement, or authorization from any mentioned platforms.',
  },
  {
    category: 'Campaign & Process',
    question: 'How quickly does a campaign begin after payment?',
    answer:
      'Once your plan is finalized and onboarding details are submitted via WhatsApp, campaign planning starts immediately. Our media team prepares targeting assets and ad copies within 24 to 48 hours, with live traffic typically kicking off shortly after.',
  },
  {
    category: 'Process',
    question: 'Do I need prior advertising experience or ad accounts?',
    answer:
      'No technical advertising knowledge is required from your end. Techmagnet handles campaign planning, audience targeting, and ad execution. You focus on interacting with prospects and completing their course enrollment process using our provided sales scripts.',
  },
  {
    category: 'Pricing',
    question: 'Are there any hidden ad costs?',
    answer:
      'Our transparent plan fees cover agency consultation, campaign strategy, audience targeting, and WhatsApp growth support. Depending on your chosen tier, campaign ad spend budgets are either incorporated or specified upfront during onboarding.',
  },
  {
    category: 'Refunds',
    question: 'What is your refund and cancellation policy?',
    answer:
      'We stand behind our commitments. In the event a guaranteed campaign does not meet the agreed eligibility milestones despite full adherence to written campaign guidelines, review terms apply according to our documented Refund Policy.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Aman Sharma',
    platform: 'IDP & Bizzgurukull Affiliate',
    location: 'Lucknow, Uttar Pradesh',
    feedback:
      'Before Techmagnet, I struggled to get genuine queries for IDP. Within 10 days of launching the Growth Plan, I was receiving 15–20 filtered WhatsApp messages each day. Closed 8 enrollments in my first cycle.',
    metric: '8 Enrollments',
    metricLabel: 'Generated in 10 Days',
  },
  {
    id: 't-2',
    author: 'Pooja Verma',
    platform: 'SkillPaisa & SkillMize Affiliate',
    location: 'Indore, Madhya Pradesh',
    feedback:
      'The biggest difference with Techmagnet is the lead quality. The prospects already understood what digital courses were, so closing conversations took less than 10 minutes using Techmagnet scripts.',
    metric: '₹42,000+',
    metricLabel: 'Affiliate Commissions',
  },
  {
    id: 't-3',
    author: 'Rahul Jaiswal',
    platform: 'LeadGuru Marketer',
    location: 'Patna, Bihar',
    feedback:
      'Techmagnet’s team is extremely responsive on WhatsApp. Whenever my campaign needed adjustments, they optimized the audience quickly. Outstanding support for Indian affiliates.',
    metric: '3.4x ROI',
    metricLabel: 'Campaign Return',
  },
];
