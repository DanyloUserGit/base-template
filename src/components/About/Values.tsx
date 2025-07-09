const values = [
  {
    title: "Qualität",
    description:
      "Wir arbeiten nur mit bewährten Geräten und halten uns an höchste Installationsstandards.",
  },
  {
    title: "Zuverlässigkeit",
    description:
      "Unsere Systeme bieten über Jahre hinweg stabile und sichere Heizleistung.",
  },
  {
    title: "Service",
    description:
      "Wir begleiten Sie vom ersten Gespräch bis zur Nachbetreuung – persönlich und kompetent.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((val) => (
          <div
            key={val.title}
            className="bg-gray-light p-6 rounded-xl shadow-card text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-accent">
              {val.title}
            </h3>
            <p className="text-gray-dark">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
