'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/constants/technologies';
import { Reveal } from '@/components/animations';

export function Technologies() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Technologies
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A modern stack for every layer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We work with the best tools across frontend, backend, data, and cloud.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {technologies.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                className="group flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 px-4 py-2.5 backdrop-blur-xl transition hover:border-primary/40"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full transition group-hover:scale-125"
                  style={{ backgroundColor: t.color }}
                />
                <span className="text-sm font-medium">{t.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
