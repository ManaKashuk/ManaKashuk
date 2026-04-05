import Credentials from "@/components/Credentials";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIBring from "@/components/WhatIBring";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import PresentationsGallery from "@/components/PresentationsGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <Hero />
      <WhatIBring />
      <Projects />
      <Experience />
      <Credentials />
      <Publications />
      <PresentationsGallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
