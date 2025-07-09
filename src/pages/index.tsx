import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Header from "./../components/Header";

export default function Home() {
  return (
    <>
      <Seo
        title="Installation von Wärmepumpen in Berlin — HeatPumpPro"
        description="Professionelle Installation von Wärmepumpen in Berlin. Energieeffiziente Lösungen für Zuhause und Gewerbe."
        canonicalUrl="https://base-template-peach.vercel.app"
        businessName="HeatPumpPro Berlin"
        city="Berlin"
        phone="+49 12 3456789"
        websiteUrl="https://base-template-peach.vercel.app"
      />

      <Header />
      <main className="bg-white">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
