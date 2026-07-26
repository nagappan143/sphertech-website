'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '@/constants/site';
import { Reveal } from '@/components/animations';

const categories = [
  'All',
  'Web Applications',
  'Mobile Apps',
  'Dashboards',
  'ERP',
  'AI Products',
  'SaaS',
  'Enterprise Software',
];

export function Portfolio() {
  const [active, setActive] = React.useState('All');
  const filtered =
    active === 'All'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Work we are proud of
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === c
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border/60 bg-card/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const CardInner = (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </>
              );

              const cardClassName =
                'group relative block overflow-hidden rounded-2xl border border-border/60 break-inside-avoid';

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClassName}
                    >
                      {CardInner}
                    </a>
                  ) : (
                    <div className={cardClassName}>{CardInner}</div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}