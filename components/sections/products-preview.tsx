'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/constants/products';
import { Reveal } from '@/components/animations';

export function ProductsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Products
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Production-ready software you can deploy today
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl transition hover:border-primary/40"
              >
                <div className={`relative h-32 bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p.icon className="h-12 w-12 text-white/90" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {p.tagline}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-muted/60 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                      View Product <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={`/products#${p.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                      View Product <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}