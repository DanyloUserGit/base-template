import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Installation",
    description:
      "Fachgerechte Planung und Montage von modernen Wärmepumpensystemen für Wohn- und Gewerbeimmobilien.",
  },
  {
    title: "Wartung & Service",
    description:
      "Regelmäßige Wartung für optimale Leistung, Effizienz und eine lange Lebensdauer Ihrer Wärmepumpe.",
  },
  {
    title: "Beratung",
    description:
      "Persönliche Energieberatung, individuelle Lösungen und Fördermittelberatung vom Experten.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
