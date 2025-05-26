"use client";
import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejo del modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Efecto de scroll para transición visual
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Mi Portafolio
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6">
          {[
            { name: "Inicio", href: "#home" },
            { name: "Servicios", href: "#services" },
            { name: "Experiencia Laboral", href: "#projects" },
            { name: "Sobre mí", href: "#about" },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botones de Modo Oscuro / Menú móvil */}
        <div className="flex items-center space-x-4">
          {/* Botón de Modo Oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Cambiar modo oscuro"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Menú Hamburguesa (móvil) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            aria-label="Menú móvil"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg border-t border-gray-200 dark:border-gray-700 p-4 space-y-3">
          {[
            { name: "Inicio", href: "#home" },
            { name: "Servicios", href: "#services" },
            { name: "Experiencia Laboral", href: "#projects" },
            { name: "Sobre mí", href: "#about" },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="block text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
