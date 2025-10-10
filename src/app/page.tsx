import { Hero } from "@/components/hero";
import { Welcome } from "@/components/welcome";
import { Approach } from "@/components/approach";
import { Reflections } from "@/components/reflections";
import { FactsTips } from "@/components/facts-tips";
import { EmotionalTriggers } from "@/components/emotional-triggers";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Approach />
      <Reflections />
      <FactsTips />
      <EmotionalTriggers />
      <Services />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
