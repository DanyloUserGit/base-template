import Hero from "@/components/Contact/Hero";
import ContactForm from "@/components/Contact/ContactForm";
import Map from "@/components/Contact/Map";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Kontakt — HeatPumpPro"
        description="Nehmen Sie Kontakt mit uns auf! Wir bieten professionelle Installation von Wärmepumpen und maßgeschneiderte Lösungen für Ihr Zuhause oder Geschäft."
        canonicalUrl="https://base-template-ivory.vercel.app/contact"
        businessName="HeatPumpPro Berlin"
        city="Berlin"
        phone="+49 12 3456789"
        websiteUrl="https://base-template-ivory.vercel.app"
      />
      <Header />
      <Hero />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}
