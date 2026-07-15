'use client';

import { Reveal, Counter } from '@/components/animations';
import { stats } from '@/constants/site';

export function Stats() {
  return (
    <section className="relative border-y border-border/40 bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-gradient sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
