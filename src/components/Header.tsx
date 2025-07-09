"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-primary font-bold text-2xl">
          HeatPumpPro
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-dark font-semibold">
            <li>
              <Link href="#services" className="hover:text-accent transition">
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-accent transition">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-accent transition">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-gray-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü umschalten"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden px-6 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-gray-dark font-semibold bg-white rounded-xl shadow-md p-6">
          <li>
            <Link
              href="#services"
              className="hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              Dienstleistungen
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
