import {
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Puzzle,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string;
  url?: string;
};

export const products: Product[] = [
  {
    slug: 'codepedia',
    name: 'Codepedia',
    tagline: 'Programming dictionary, English + Tamil',
    description:
      'Every programming word explained in Tamil and English with real code examples, memory tricks, and interview tips — for students and professionals alike.',
    icon: BookOpen,
    features: ['English + Tamil definitions', 'School to professional levels', 'Real code examples'],
    accent: 'from-indigo-500 to-purple-400',
    url: 'https://spherkitcodepedia.netlify.app/',
  },
  {
    slug: 'familyhub-ai',
    name: 'FamilyHub AI',
    tagline: 'Smart family assistant',
    description:
      'Coordinate schedules, chores, budgets, and AI reminders for the whole family in one private hub.',
    icon: HeartPulse,
    features: ['Shared calendars', 'AI reminders', 'Private vault'],
    accent: 'from-rose-500 to-orange-400',
  },
  {
    slug: 'spherpos',
    name: 'SpherPOS',
    tagline: 'Point of sale system',
    description:
      'Fast, offline-capable POS for retail and restaurants with inventory and analytics built in.',
    icon: ShoppingCart,
    features: ['Offline mode', 'Inventory sync', 'Sales analytics'],
    accent: 'from-amber-500 to-yellow-400',
  },
  {
    slug: 'spherschool',
    name: 'SpherSchool',
    tagline: 'School management suite',
    description:
      'Manage students, staff, attendance, fees, and parent communication in one platform.',
    icon: GraduationCap,
    features: ['Attendance & fees', 'Online classes', 'Parent portal'],
    accent: 'from-sky-500 to-indigo-400',
  },
  {
    slug: 'spherhospital',
    name: 'SpherHospital',
    tagline: 'Hospital information system',
    description:
      'OPD, IPD, pharmacy, billing, and electronic health records for modern hospitals.',
    icon: Stethoscope,
    features: ['EHR records', 'OPD & IPD', 'Pharmacy billing'],
    accent: 'from-cyan-500 to-blue-400',
  },
  {
    slug: 'spherchess',
    name: 'SpherChess',
    tagline: 'Learn chess, the fun way',
    description:
      'An interactive chess learning game that teaches openings, tactics, and strategy through guided play.',
    icon: Puzzle,
    features: ['Guided lessons', 'Tactics puzzles', 'Play & practice mode'],
    accent: 'from-slate-500 to-zinc-400',
    url: 'https://spherkitchess.netlify.app/',
  },
];