import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  HardHat,
  Landmark,
  Factory,
  Home,
  Truck,
  Building,
  Plane,
  ShoppingCart,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export type Industry = { name: string; icon: LucideIcon };

export const industries: Industry[] = [
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Construction', icon: HardHat },
  { name: 'Finance', icon: Landmark },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Real Estate', icon: Home },
  { name: 'Logistics', icon: Truck },
  { name: 'Government', icon: Building },
  { name: 'Travel', icon: Plane },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'Insurance', icon: ShieldCheck },
];
