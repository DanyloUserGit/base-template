export default function Features() {
  const features = [
    {
      title: "Energieeffizienz",
      description:
        "Unsere Wärmepumpen senken die Heiz- und Kühlkosten Ihres Hauses erheblich.",
      icon: (
        <svg
          className="w-10 h-10 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Umweltfreundlichkeit",
      description:
        "Wir setzen moderne Technologien ein, um die Umwelt so wenig wie möglich zu belasten.",
      icon: (
        <svg
          className="w-10 h-10 text-accent overflow-visible"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 0110 10v2a10 10 0 01-10 10H6a6 6 0 010-12h6z" />
        </svg>
      ),
    },
    {
      title: "Zuverlässigkeit",
      description:
        "Langlebige Geräte mit Garantie und Support durch unsere Experten.",
      icon: (
        <svg
          className="w-10 h-10 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-20 bg-gray-light rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">
        Unsere Vorteile
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
            <p className="text-gray-dark max-w-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
