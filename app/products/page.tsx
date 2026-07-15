import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { ProductsPreview } from '@/components/sections/products-preview';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Production-ready software products by SpherTech — SlideForge, SpherHR, SpherCRM, SpherPOS, and more.',
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Products"
          title={
            <>
              Software you can <span className="text-gradient">deploy today</span>
            </>
          }
          subtitle="A suite of production-ready products across HR, CRM, POS, education, healthcare, finance, and construction."
        />
        <ProductsPreview />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
