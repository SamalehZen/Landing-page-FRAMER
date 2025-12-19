import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkGallery from '@/components/WorkGallery';
import About from '@/components/About';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Profile from '@/components/Profile';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-x-hidden w-full">
      <Header />
      <Hero />
      <WorkGallery />
      <About />
      <Process />
      <Testimonials />
      <CaseStudies />
      <Profile />
      <Pricing />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
