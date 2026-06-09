import Navbar from "@/components/ui/Nabar";

import Hero from "@/components/sections/Hero";
import Transformations from "@/components/sections/Transformations";
import Science from "@/components/sections/Science";
import HowItWorks from "@/components/sections/HowItWorks";
import Reinforcement from "@/components/sections/Reinforcement";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <Transformations />
      <Science />
      <HowItWorks />
      <Reinforcement />
      <CTA />
      <Footer />
    </main>
  );
}