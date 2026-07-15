import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';
import { Reveal } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on software, AI, cloud, and engineering from SpherTech.',
};

const posts = [
  { title: 'Designing RAG pipelines that scale', excerpt: 'A practical guide to retrieval-augmented generation in production.', tag: 'AI', date: 'Jul 2026' },
  { title: 'Edge rendering with Next.js 15', excerpt: 'How we cut TTFB by 60% using edge functions.', tag: 'Web', date: 'Jun 2026' },
  { title: 'Cloud cost optimization playbook', excerpt: '12 tactics to reduce your AWS bill without sacrificing scale.', tag: 'Cloud', date: 'Jun 2026' },
  { title: 'Building a design system in 2026', excerpt: 'Tokens, theming, and accessibility from day one.', tag: 'Design', date: 'May 2026' },
  { title: 'Kubernetes for small teams', excerpt: 'Right-sizing your K8s setup without the overhead.', tag: 'DevOps', date: 'May 2026' },
  { title: 'ERP modernization patterns', excerpt: 'How to migrate legacy ERP to cloud-native without downtime.', tag: 'Enterprise', date: 'Apr 2026' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title={
            <>
              Insights from the <span className="text-gradient">engineering</span> team
            </>
          }
          subtitle="Practical articles on AI, web, cloud, and enterprise software."
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.08}>
                  <article className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl transition hover:border-primary/40">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="flex h-full items-center justify-center">
                        <span className="rounded-full bg-background/60 px-3 py-1 text-xs font-semibold text-primary">
                          {p.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground">{p.date}</p>
                      <h3 className="mt-1 font-heading text-lg font-bold group-hover:text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
