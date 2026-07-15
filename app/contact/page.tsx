import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { PageHero } from '@/components/page-hero';
import { ContactSection } from '@/components/sections/contact';
import { FloatingButtons } from '@/components/floating-buttons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SpherTech Pvt. Ltd. — we reply within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title={
            <>
              Let&apos;s <span className="text-gradient">talk</span>
            </>
          }
          subtitle="Tell us about your project and our team will get back to you within 24 hours."
        />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
