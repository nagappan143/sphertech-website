import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Process } from '@/components/sections/process';
import { Stats } from '@/components/sections/stats';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'SpherTech Pvt. Ltd. — a global software company with 180+ senior engineers across 38 countries.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Who We Are"
          title={
            <>
              We are <span className="text-gradient">SpherTech</span>
            </>
          }
          subtitle="A global software company engineering intelligent digital solutions for startups and enterprises worldwide."
        />
        <Stats />
        <AboutPreview />
        <WhyChooseUs />
        <Process />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
