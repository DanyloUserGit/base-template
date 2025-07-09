export default function ContactForm() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Kontaktformular</h2>
      <form
        action="https://formspree.io/f/xyyznklr" // Поставте правильну URL-адресу для відправки форми
        method="POST"
        className="space-y-6 max-w-2xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            <label className="block text-gray-dark mb-2" htmlFor="name">
              Ihr Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Max Mustermann"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-dark mb-2" htmlFor="email">
              Ihre E-Mail-Adresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="max@beispiel.de"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-dark mb-2" htmlFor="message">
            Ihre Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Ihre Nachricht hier..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Absenden
          </button>
        </div>
      </form>
    </section>
  );
}
