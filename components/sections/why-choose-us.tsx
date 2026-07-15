'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/constants/why-choose-us';
import { Reveal } from '@/components/animations';

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Why SpherTech
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Reasons enterprises choose us
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 5) * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl transition hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition group-hover:scale-110">
                  <w.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {w.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
