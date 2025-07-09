export default function TipsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        Worauf Sie bei der Auswahl achten sollten
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-dark">
        <li>Größe und Wärmedämmung Ihres Hauses.</li>
        <li>Wärmequelle: Luft, Erde oder Wasser.</li>
        <li>Budget für Installation und Wartung.</li>
        <li>Geräuschpegel – besonders bei Luftwärmepumpen wichtig.</li>
        <li>Verfügbare Förderungen und staatliche Zuschüsse.</li>
      </ul>
    </section>
  );
}
