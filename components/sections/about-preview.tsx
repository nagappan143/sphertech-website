'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { Reveal } from '@/components/animations';
import { Button } from '@/components/ui/button';

const values = [
  { icon: Target, title: 'Mission', text: 'Empower businesses with intelligent, scalable software.' },
  { icon: Eye, title: 'Vision', text: 'A world where every idea becomes a digital product.' },
  { icon: Heart, title: 'Values', text: 'Quality, integrity, and partnership in everything.' },
];

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="SpherTech team"
              className="relative rounded-3xl border border-border/60 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-3xl font-extrabold text-gradient">12+</p>
              <p className="text-xs text-muted-foreground">Years of excellence</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering the future, one product at a time
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              SpherTech Pvt. Ltd. is a global software company with 180+ senior
              engineers across 38 countries. We design, build, and scale
              digital products for startups and enterprises — combining
              craftsmanship, AI, and cloud-native engineering.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl">
                  <v.icon className="h-6 w-6 text-primary" />
                  <p className="mt-3 font-heading text-sm font-bold">{v.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Button asChild className="mt-8 font-button font-semibold">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
