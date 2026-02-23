import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VisionMission from '@/components/VisionMission';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import FounderSection from '@/components/FounderSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTopButton from '@/components/BackToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FounderSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default Index;
