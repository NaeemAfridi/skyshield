import Hero from "@/components/hero";
import About from "@/components/about";
import Objectives from "@/components/objectives";
import UseCases from "@/components/use-cases";
import Technology from "@/components/technology";
import Partners from "@/components/partners";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className=" w-full relative">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <UseCases />
      <Technology />
      <Partners />
      <Contact />
      <Footer />
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
