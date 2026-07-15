import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { Industries } from '@/components/sections/industries';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Deep software expertise across 12+ industries.',
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Industries We Serve"
          title={
            <>
              Expertise across <span className="text-gradient">12+ industries</span>
            </>
          }
          subtitle="Domain knowledge that accelerates delivery and de-risks your project."
        />
        <Industries />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
