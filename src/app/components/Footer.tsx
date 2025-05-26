"use client";
import { Linkedin } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 px-4 text-center text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Datos personales */}
        <div className="flex flex-col md:flex-row justify-center gap-2 items-center">
          <span>nazarenozanluchi@gmail.com</span>
          <span>•</span>
          <span>Mendoza, Argentina</span>
          <span>•</span>
          <a
            href="https://linkedin.com/in/nazareno-zanluchi-82620b2a5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        {/* Botón Ir arriba */}
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="mt-2 inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaArrowUp />
          <span>Volver arriba</span>
        </button>
      </div>
    </footer>
  );
}
