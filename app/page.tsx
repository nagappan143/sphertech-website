import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { TrustedBy } from '@/components/sections/trusted-by';
import { AboutPreview } from '@/components/sections/about-preview';
import { ServicesPreview } from '@/components/sections/services-preview';
import { ProductsPreview } from '@/components/sections/products-preview';
import { Technologies } from '@/components/sections/technologies';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { Portfolio } from '@/components/sections/portfolio';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { FloatingButtons, CookieConsent } from '@/components/floating-buttons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustedBy />
        <AboutPreview />
        <ServicesPreview />
        <ProductsPreview />
        <Technologies />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Portfolio />
        <Testimonials />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </>
  );
}
