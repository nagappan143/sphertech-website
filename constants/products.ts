import {
  Presentation,
  HeartPulse,
  Users,
  Contact,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Wallet,
  Package,
  HardHat,
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
};

export const products: Product[] = [
  {
    slug: 'slideforge',
    name: 'SlideForge',
    tagline: 'AI presentation studio',
    description:
      'Generate, design, and collaborate on stunning presentations with AI-assisted layouts and brand kits.',
    icon: Presentation,
    features: ['AI slide generation', 'Real-time collaboration', 'Brand kits'],
    accent: 'from-blue-500 to-cyan-400',
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
    slug: 'spherhr',
    name: 'SpherHR',
    tagline: 'Modern HR platform',
    description:
      'Hire, onboard, manage payroll, leave, and performance with a delightful HR experience.',
    icon: Users,
    features: ['Payroll & leave', 'Performance reviews', 'Self-service portal'],
    accent: 'from-violet-500 to-fuchsia-400',
  },
  {
    slug: 'sphercrm',
    name: 'SpherCRM',
    tagline: 'Sales & support CRM',
    description:
      'Track leads, deals, and tickets with automation pipelines and a 360° customer view.',
    icon: Contact,
    features: ['Pipeline automation', 'Ticketing', 'Email & SMS'],
    accent: 'from-emerald-500 to-teal-400',
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
    slug: 'spherfinance',
    name: 'SpherFinance',
    tagline: 'Personal finance manager',
    description:
      'Budget, track expenses, and get AI insights into your spending with bank-grade security.',
    icon: Wallet,
    features: ['Budget tracking', 'AI insights', 'Bank-grade security'],
    accent: 'from-green-500 to-emerald-400',
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    tagline: 'Warehouse & stock control',
    description:
      'Real-time stock, multi-warehouse, barcode scanning, and low-stock alerts at scale.',
    icon: Package,
    features: ['Multi-warehouse', 'Barcode scanning', 'Low-stock alerts'],
    accent: 'from-orange-500 to-red-400',
  },
  {
    slug: 'construction-erp',
    name: 'Construction ERP',
    tagline: 'Build & project control',
    description:
      'Project costing, BOQ, subcontractor management, and site progress tracking for constructors.',
    icon: HardHat,
    features: ['BOQ & costing', 'Subcontractor mgmt', 'Site progress'],
    accent: 'from-yellow-500 to-amber-400',
  },
];
