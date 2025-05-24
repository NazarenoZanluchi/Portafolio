"use client";
import { Menu, Mail, Info, Home as HomeIcon, Briefcase } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Mi Portafolio</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Inicio", icon: <HomeIcon />, href: "#home" },
            { name: "Sobre mí", icon: <Info />, href: "#about" },
            { name: "Servicios", icon: <Briefcase />, href: "#services" },
            { name: "Contacto", icon: <Mail />, href: "#contact" },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="mt-3 space-y-3 md:hidden bg-gray-800 p-4 rounded-lg shadow-inner border border-gray-700">
          {[
            { name: "Inicio", icon: <HomeIcon />, href: "#home" },
            { name: "Sobre mí", icon: <Info />, href: "#about" },
            { name: "Servicios", icon: <Briefcase />, href: "#services" },
            { name: "Contacto", icon: <Mail />, href: "#contact" },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
