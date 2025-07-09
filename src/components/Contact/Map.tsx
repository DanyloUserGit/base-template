export default function Map() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Finden Sie uns hier
      </h2>
      <div className="relative w-full h-80 bg-gray-light rounded-xl overflow-hidden">
        <img
          src="/img/Map.jpg" // Тут буде заглушка карти
          alt="Kartenansicht"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </section>
  );
}
