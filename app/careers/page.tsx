import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';
import { Reveal } from '@/components/animations';
import { MapPin, Briefcase, Clock, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join SpherTech — build world-class software with a global team.',
};

const perks = [
  { icon: Heart, title: 'Health & wellness', desc: 'Comprehensive medical, dental, and wellness stipends.' },
  { icon: Briefcase, title: 'Remote-first', desc: 'Work from anywhere with flexible hours.' },
  { icon: Clock, title: 'Generous PTO', desc: '25+ paid days off plus public holidays.' },
  { icon: MapPin, title: 'Learning budget', desc: '$2,000/year for courses, books, and conferences.' },
];

const roles = [
  'Senior Frontend Engineer (Next.js)',
  'Senior Backend Engineer (Node.js / NestJS)',
  'AI/ML Engineer (LLMs, RAG)',
  'Cloud DevOps Engineer (AWS / K8s)',
  'Product Designer (UI/UX)',
  'QA Automation Engineer',
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title={
            <>
              Build the future with <span className="text-gradient">SpherTech</span>
            </>
          }
          subtitle="We are a remote-first team of senior engineers, designers, and product thinkers."
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl">
                    <p.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 font-heading text-base font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <h2 className="mt-16 font-heading text-2xl font-bold">Open roles</h2>
              <div className="mt-6 space-y-3">
                {roles.map((r) => (
                  <div
                    key={r}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl transition hover:border-primary/40"
                  >
                    <span className="font-medium">{r}</span>
                    <span className="text-sm text-muted-foreground">Remote · Worldwide</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
