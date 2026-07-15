import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms governing the use of SpherTech Pvt. Ltd. services and website.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="Legal" title="Terms & Conditions" />
        <section className="py-12">
          <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
            <Block title="1. Acceptance">
              By accessing this website you agree to these terms. If you do not
              agree, please discontinue use.
            </Block>
            <Block title="2. Services">
              Services are delivered per the signed statement of work. Any
              scope changes must be agreed in writing.
            </Block>
            <Block title="3. Intellectual Property">
              All IP created under an engagement is transferred to the client
              per the contract, unless otherwise stated.
            </Block>
            <Block title="4. Confidentiality">
              Both parties agree to keep confidential information private per
              the mutual NDA.
            </Block>
            <Block title="5. Limitation of Liability">
              SpherTech is not liable for indirect or consequential damages
              beyond the fees paid under the engagement.
            </Block>
            <Block title="6. Governing Law">
              These terms are governed by the laws of India.
            </Block>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl">
      <h2 className="font-heading text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
