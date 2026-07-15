import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { Process } from '@/components/sections/process';
import { Technologies } from '@/components/sections/technologies';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software, web, mobile, AI, cloud, ERP, CRM, DevOps, and IT consulting services by SpherTech.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title={
            <>
              Full-cycle <span className="text-gradient">software services</span>
            </>
          }
          subtitle="From discovery to deployment and beyond — senior teams, proven processes, and world-class engineering."
        />
        <ServicesPreview />
        <Technologies />
        <Process />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
