import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary text-white py-20 text-center max-w-7xl mx-auto px-6 rounded-xl my-12">
      <h2 className="text-3xl font-bold mb-4">
        Möchten Sie in dieser Saison Heizkosten sparen?
      </h2>
      <p className="mb-8 max-w-xl mx-auto">
        Bestellen Sie eine professionelle Auswahl und Installation einer
        Wärmepumpe – eine Investition in Komfort, Einsparungen und
        Umweltfreundlichkeit für Ihr Zuhause.
      </p>
      <Link
        href="#contact"
        className="inline-block bg-accent hover:bg-[#d87e00] px-8 py-4 rounded-lg font-semibold transition"
      >
        Beratung anfordern
      </Link>
    </section>
  );
}
