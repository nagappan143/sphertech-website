import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Companies that trust SpherTech to build and scale their software.',
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Clients"
          title={
            <>
              Trusted by <span className="text-gradient">leaders worldwide</span>
            </>
          }
          subtitle="From startups to enterprises, 420+ organizations rely on SpherTech."
        />
        <TrustedBy />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
