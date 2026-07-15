'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/constants/process';
import { Reveal } from '@/components/animations';

export function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How We Work
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A proven development process
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 4) * 0.1}>
                <div className="relative">
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-card/80 font-heading text-xl font-extrabold text-gradient backdrop-blur-xl">
                    {s.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
