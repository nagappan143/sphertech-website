import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { Technologies } from '@/components/sections/technologies';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'The modern stack SpherTech uses across frontend, backend, data, and cloud.',
};

export default function TechnologiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Technologies"
          title={
            <>
              A modern stack for <span className="text-gradient">every layer</span>
            </>
          }
          subtitle="We work with the best tools across frontend, backend, data, mobile, and cloud."
        />
        <Technologies />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
