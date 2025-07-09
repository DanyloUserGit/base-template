import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHero from "@/components/Blog/ArticleHero";
import TipsSection from "@/components/Blog/TipsSection";
import TypesSection from "@/components/Blog/TypesSection";
import BenefitsSection from "@/components/Blog/BenefitsSection";

export default function BlogArticlePage() {
  return (
    <>
      <Seo
        title="So wählen Sie eine Wärmepumpe aus – Tipps von HeatPumpPro"
        description="Erfahren Sie, wie Sie die perfekte Wärmepumpe für Ihr Zuhause auswählen. Eine Erklärung der Typen, Vorteile und Punkte, die Sie bei der Auswahl beachten sollten."
        canonicalUrl="https://base-template-ivory.vercel.app/article"
        businessName="HeatPumpPro"
        city="Berlin"
        phone="+49 12 3456789"
        websiteUrl="https://base-template-ivory.vercel.app/"
      />
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        <ArticleHero />
        <TipsSection />
        <TypesSection />
        <BenefitsSection />
      </main>

      <Footer />
    </>
  );
}
