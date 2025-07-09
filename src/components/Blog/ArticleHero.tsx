import Image from "next/image";

export default function ArticleHero() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Wie wählt man eine Wärmepumpe? Ein umfassender Leitfaden
      </h1>
      <p className="text-gray-dark max-w-2xl mx-auto">
        Die Wahl der richtigen Wärmepumpe ist eine Investition in Komfort und
        Energieeffizienz. Doch welches System passt am besten zu Ihrem Zuhause?
      </p>

      <Image
        src="/img/pump.jpg"
        alt="Wärmepumpen-Auswahl"
        width={800}
        height={400}
        className="mt-8 rounded-xl mx-auto"
      />
    </section>
  );
}
