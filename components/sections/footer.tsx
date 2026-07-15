'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo';
import { services } from '@/constants/services';
import { products } from '@/constants/products';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: services.slice(0, 6).map((s) => ({
      label: s.title,
      href: `/services#${s.slug}`,
    })),
  },
  {
    title: 'Products',
    links: products.slice(0, 6).map((p) => ({
      label: p.name,
      href: `/products#${p.slug}`,
    })),
  },
  {
    title: 'Resources',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Clients', href: '/#clients' },
    ],
  },
];

const socials = ['Twitter', 'LinkedIn', 'GitHub', 'Instagram', 'YouTube'];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-heading text-lg font-bold">
                Spher<span className="text-gradient">Tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Transforming ideas into intelligent digital solutions for
              clients in 38+ countries.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold">Newsletter</p>
              <div className="mt-2 flex gap-2">
                <Input placeholder="Your email" type="email" className="max-w-xs" />
                <Button size="icon" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-sm font-bold">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SpherTech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
