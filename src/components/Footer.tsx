import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-light pt-12 pb-4 text-center">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="text-primary font-bold text-2xl">
          HeatPumpPro
        </Link>
        <nav>
          {" "}
          <ul className="flex flex-col space-y-4 text-white font-semibold px-6 text-left">
            <li>
              <Link href="/services" className="hover:text-accent transition">
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p>© {new Date().getFullYear()} HeatPumpPro. All rights reserved.</p>
    </footer>
  );
}
