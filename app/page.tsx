import ArticlesSection from "@/components/sections/ArticlesSection";
import ChooseUsSection from "@/components/sections/ChooseUsSection";
import CoreValues from "@/components/sections/CoreValues";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Hero />

      <CoreValues />

      <ServicesSection />

      <ChooseUsSection />

      <TestimonialsSection />

      <ArticlesSection />

      <FaqSection />

      <Footer />


    </div>
  );
}
