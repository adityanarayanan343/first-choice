import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="values">
        <ValuesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}