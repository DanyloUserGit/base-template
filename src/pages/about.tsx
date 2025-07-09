import Hero from "@/components/About/Hero";
import Values from "@/components/About/Values";
import Team from "@/components/About/Team";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Über uns — HeatPumpPro"
        description="HeatPumpPro ist Ihr Partner für moderne Wärmepumpenlösungen in Berlin. Wir bieten Qualität, Zuverlässigkeit und exzellenten Kundenservice."
        canonicalUrl="https://base-template-ivory.vercel.app/about"
        businessName="HeatPumpPro Berlin"
        city="Berlin"
        phone="+49 30 1234567"
        websiteUrl="https://base-template-ivory.vercel.app"
      />
      <Header />
      <Hero />
      <Values />
      <Team />
      <Footer />
    </>
  );
}
