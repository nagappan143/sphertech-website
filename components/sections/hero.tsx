'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Activity, Users, TrendingUp, Cloud, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/animations';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <ParticleField />
      <div className="pointer-events-none absolute inset-0 aurora-bg" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Global Software & AI Solutions Company
            <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
              v2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Transforming Ideas into{' '}
            <span className="text-gradient">Intelligent</span>{' '}
            Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            SpherTech Pvt. Ltd. is a global software company delivering
            scalable digital products — from custom software and AI to cloud
            and enterprise platforms trusted by clients in 38+ countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-button text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-primary/50"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="/contact"
              strength={0.2}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 font-button text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-primary/50"
            >
              <Play className="h-4 w-4 text-primary" />
              Book Free Consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
          >
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="h-9 w-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">420+</span> happy
              clients worldwide
            </p>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <Globe3D />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-8 z-20 hidden w-44 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Activity className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-muted-foreground">Uptime</p>
            <p className="text-sm font-bold text-foreground">99.99%</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '99%' }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-2 top-24 z-20 hidden w-44 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Active users</span>
          <Users className="h-3.5 w-3.5 text-accent" />
        </div>
        <p className="mt-1 text-2xl font-bold text-foreground">24.8k</p>
        <div className="mt-2 flex items-center gap-1 text-xs text-emerald-500">
          <TrendingUp className="h-3 w-3" /> +12.4%
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 left-6 z-20 hidden w-52 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-2xl backdrop-blur-xl md:block"
      >
        <div className="mb-2 flex items-center gap-2">
          <Code2 className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">deploy.ts</span>
        </div>
        <pre className="overflow-hidden text-[10px] leading-relaxed text-muted-foreground">
{`const app = spher.deploy({
  cloud: 'aws',
  scale: 'auto',
  ai: true,
});`}
        </pre>
      </motion.div>

      <div className="relative z-10 overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-5 shadow-2xl backdrop-blur-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground">sphertech.cloud/overview</span>
          <Cloud className="h-4 w-4 text-primary" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Revenue', value: '$2.4M', trend: '+18%' },
            { label: 'Deploys', value: '1,284', trend: '+9%' },
            { label: 'Latency', value: '42ms', trend: '-7%' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/50 bg-background/40 p-3"
            >
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">{s.value}</p>
              <p className="text-[10px] text-emerald-500">{s.trend}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border/50 bg-background/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Traffic overview
            </span>
            <span className="text-[10px] text-primary">Last 30 days</span>
          </div>
          <ChartSVG />
        </div>

        <div className="mt-4 space-y-2">
          {[
            { name: 'API Gateway', pct: 92, color: 'from-primary to-accent' },
            { name: 'AI Inference', pct: 78, color: 'from-violet-500 to-fuchsia-400' },
            { name: 'Edge Cache', pct: 64, color: 'from-emerald-500 to-teal-400' },
          ].map((b) => (
            <div key={b.name}>
              <div className="mb-1 flex justify-between text-[11px]">
                <span className="text-muted-foreground">{b.name}</span>
                <span className="font-medium text-foreground">{b.pct}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${b.pct}%` }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className={`h-full rounded-full bg-gradient-to-r ${b.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ChartSVG() {
  return (
    <svg viewBox="0 0 300 90" className="h-24 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        d="M0,70 L30,55 L60,62 L90,40 L120,48 L150,28 L180,36 L210,18 L240,24 L270,10 L300,16"
        fill="none"
        stroke="url(#line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        d="M0,70 L30,55 L60,62 L90,40 L120,48 L150,28 L180,36 L210,18 L240,24 L270,10 L300,16 L300,90 L0,90 Z"
        fill="url(#area)"
      />
    </svg>
  );
}

function Globe3D() {
  return (
    <div className="pointer-events-none absolute -right-10 -top-16 z-0 hidden lg:block">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="relative h-56 w-56"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full opacity-30">
          <defs>
            <radialGradient id="globe-glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#globe-glow)" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
          <ellipse cx="100" cy="100" rx="70" ry="28" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="100" cy="100" rx="70" ry="55" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1="100" x2="170" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          {[
            [70, 60], [130, 80], [90, 130], [140, 120], [60, 110],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="hsl(var(--accent))" />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

function ParticleField() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
      })),
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
