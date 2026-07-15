import {
  Building2,
  BrainCircuit,
  Headphones,
  BadgeDollarSign,
  Rocket,
  Lock,
  Network,
  Cloud,
  Repeat,
  Award,
  type LucideIcon,
} from 'lucide-react';

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyItem[] = [
  {
    title: 'Enterprise-grade architecture',
    description: 'Scalable, modular, and secure systems built to handle millions of users.',
    icon: Building2,
  },
  {
    title: 'AI-powered development',
    description: 'We embed AI across the SDLC to ship faster and smarter.',
    icon: BrainCircuit,
  },
  {
    title: 'Dedicated support',
    description: 'A named team and SLAs that keep your product running 24/7.',
    icon: Headphones,
  },
  {
    title: 'Affordable pricing',
    description: 'Transparent, flexible engagement models that fit your budget.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Fast delivery',
    description: 'Agile sprints with weekly releases and continuous feedback.',
    icon: Rocket,
  },
  {
    title: 'Secure applications',
    description: 'Security-by-design with audits, encryption, and compliance.',
    icon: Lock,
  },
  {
    title: 'Scalable infrastructure',
    description: 'Cloud-native setups that grow with zero re-architecture.',
    icon: Network,
  },
  {
    title: 'Cloud-ready solutions',
    description: 'Multi-cloud, IaC, and edge deployments from day one.',
    icon: Cloud,
  },
  {
    title: 'Agile methodology',
    description: 'Scrum and Kanban with full transparency and predictability.',
    icon: Repeat,
  },
  {
    title: 'Experienced engineers',
    description: 'Senior engineers with 10+ years across 20+ industries.',
    icon: Award,
  },
];
