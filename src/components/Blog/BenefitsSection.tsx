export default function BenefitsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Vorteile von Wärmepumpen</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-dark">
        <div>
          <h3 className="font-semibold">Energieeffizienz</h3>
          <p>
            Sparen Sie bis zu 60 % Heizkosten im Vergleich zu Gas oder Strom.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Umweltfreundlichkeit</h3>
          <p>Geringe CO₂-Emissionen – gut für Umwelt und Klima.</p>
        </div>
        <div>
          <h3 className="font-semibold">Wertsteigerung der Immobilie</h3>
          <p>Moderne Heizsysteme erhöhen den Marktwert Ihrer Immobilie.</p>
        </div>
        <div>
          <h3 className="font-semibold">Vielseitigkeit</h3>
          <p>Heizen, Kühlen und Warmwasser – alles aus einer Hand.</p>
        </div>
      </div>
    </section>
  );
}
