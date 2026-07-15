'use client';

import { clientLogos } from '@/constants/site';

export function TrustedBy() {
  const row = [...clientLogos, ...clientLogos];
  return (
    <section className="py-14">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by leading companies worldwide
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12">
          {row.map((name, i) => (
            <span
              key={i}
              className="font-heading text-2xl font-bold text-muted-foreground/50 transition hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
