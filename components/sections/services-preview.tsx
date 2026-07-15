'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/constants/services';
import { Reveal } from '@/components/animations';

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build & scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From concept to cloud, we cover the full software lifecycle with
            senior teams and proven processes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl transition hover:border-primary/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition group-hover:from-primary/5 group-hover:to-accent/10 group-hover:opacity-100" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
