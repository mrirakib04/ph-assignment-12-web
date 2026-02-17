import ContactSupport from "@/components/home/ContactSupport";
import FeaturedServices from "@/components/home/FeaturedServices";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceCategory from "@/components/home/ServiceCategory";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection></HeroSection>
      <ServiceCategory></ServiceCategory>
      <FeaturedServices></FeaturedServices>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialSection></TestimonialSection>
      <ContactSupport></ContactSupport>
    </div>
  );
}
