import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorsTeam } from "@/components/sections/DoctorsTeam";
import { Testimonials } from "@/components/sections/Testimonials";
import { OnlineConsultation } from "@/components/sections/OnlineConsultation";
import { BlogNews } from "@/components/sections/BlogNews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <DoctorsTeam />
      <Testimonials />
      <OnlineConsultation />
      <BlogNews />
      <FAQ />
      <CTA />
    </>
  );
}
