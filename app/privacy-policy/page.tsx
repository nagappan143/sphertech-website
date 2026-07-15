import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SpherTech Pvt. Ltd. collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="Legal" title="Privacy Policy" />
        <section className="py-12">
          <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
            <LegalBlock title="1. Introduction">
              SpherTech Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;) respects your privacy.
              This policy explains what data we collect, why, and how we use it.
            </LegalBlock>
            <LegalBlock title="2. Data We Collect">
              We collect information you provide directly (e.g., contact form
              submissions) and usage data (e.g., analytics cookies) when you
              visit our website.
            </LegalBlock>
            <LegalBlock title="3. How We Use Data">
              We use your data to respond to inquiries, improve our services,
              and send relevant updates. We never sell your data to third
              parties.
            </LegalBlock>
            <LegalBlock title="4. Your Rights">
              You may request access, correction, or deletion of your personal
              data at any time by contacting{' '}
              <span className="text-primary">privacy@sphertech.example.com</span>.
            </LegalBlock>
            <LegalBlock title="5. Cookies">
              We use cookies to enhance your experience. You can control
              cookies through your browser settings.
            </LegalBlock>
            <LegalBlock title="6. Contact">
              For privacy questions, email{' '}
              <span className="text-primary">privacy@sphertech.example.com</span>.
            </LegalBlock>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl">
      <h2 className="font-heading text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
