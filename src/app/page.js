import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ImageCollage from '@/components/ImageCollage';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import PreFooterCTA from '@/components/PreFooterCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ImageCollage />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <PreFooterCTA />
    </>
  );
}
