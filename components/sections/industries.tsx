'use client';

import { motion } from 'framer-motion';
import { industries } from '@/constants/industries';
import { Reveal } from '@/components/animations';

export function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Industries We Serve
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Deep expertise across 12+ industries
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card/50 p-6 text-center backdrop-blur-xl transition hover:border-primary/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition group-hover:scale-110">
                  <ind.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold">{ind.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
