"use client";
import { Linkedin } from "lucide-react";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandTypescript, TbApi } from "react-icons/tb";
import {
  SiPostgresql,
  SiJsonwebtokens,
  SiPrisma,
  SiZod,
  SiSwagger,
  SiMercadopago,
} from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-12 px-4 md:py-20 bg-white dark:bg-gray-900 text-center transition-colors duration-300"
    >
      {/* Botón de modo oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="max-w-4xl">
        {/* Nombre y Rol */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-3 dark:text-white"
        >
          Nazareno Zanluchi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
        >
          Back-End Developer
        </motion.p>

        {/* Descripción Corta */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Apasionado por crear soluciones tecnológicas escalables, seguras y
          eficientes. Siempre buscando aprender e integrar nuevas tecnologías
          para mejorar la experiencia del usuario.
        </motion.p>

        {/* Enlaces a CV y redes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 flex justify-center gap-4"
        >
          {/* Botón Descargar CV */}
          <a
            href="/cv/Nazareno_Zanluchi_CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            📄 Descargar CV
          </a>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nazareno-zanluchi-82620b2a5/ "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </motion.div>

        {/* Habilidades principales con iconos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12"
        >
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Tecnologías que uso
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "TypeScript", icon: <TbBrandTypescript size={32} /> },
              { name: "Node.js", icon: <FaNodeJs size={32} /> },
              { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
              { name: "REST API", icon: <TbApi size={32} /> },
              { name: "JWT", icon: <SiJsonwebtokens size={32} /> },
              { name: "Prisma", icon: <SiPrisma size={32} /> },
              { name: "Zod", icon: <SiZod size={32} /> },
              { name: "Swagger", icon: <SiSwagger size={32} /> },
              { name: "Git / GitHub", icon: <FaGitAlt size={32} /> },
              { name: "Mercado Pago", icon: <SiMercadopago size={32} /> },
              { name: "Google Calendar", icon: <AiOutlineGoogle size={32} /> },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {tech.icon}
                </div>
                <span className="text-xs mt-1 text-gray-700 dark:text-gray-400">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
