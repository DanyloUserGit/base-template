import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ServicesIntro from "@/components/Services/ServicesIntro";
import ServicesGrid from "@/components/Services/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Unsere Dienstleistungen – HeatPumpPro Berlin"
        description="Professionelle Installation, Wartung und Beratung rund um Wärmepumpen in Berlin. Umweltfreundliche und effiziente Lösungen für Ihr Zuhause oder Unternehmen."
        canonicalUrl="https://base-template-ivory.vercel.app/services"
        businessName="HeatPumpPro Berlin"
        city="Berlin"
        phone="+49 12 3456789"
        websiteUrl="https://base-template-ivory.vercel.app"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <ServicesIntro />
        <ServicesGrid />

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Kostenloses Beratungsgespräch vereinbaren
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
