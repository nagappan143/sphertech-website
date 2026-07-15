import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { Portfolio } from '@/components/sections/portfolio';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected work by SpherTech across web, mobile, dashboards, ERP, AI, and SaaS.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title={
            <>
              Work we are <span className="text-gradient">proud of</span>
            </>
          }
          subtitle="A selection of products and platforms we have designed, built, and scaled."
        />
        <Portfolio />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
