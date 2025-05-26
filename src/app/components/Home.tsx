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
} from "react-icons/si";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nazarenozanluchi@gmail.com").then(
      () => {
        setCopySuccess("Correo copiado");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      () => {
        setCopySuccess("Error al copiar");
        setTimeout(() => setCopySuccess(""), 2000);
      }
    );
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-12 px-4 md:py-20 bg-gray-50 dark:bg-gray-900 text-center transition-colors duration-300"
    >
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
          eficientes.
        </motion.p>

        {/* Enlaces a CV, LinkedIn y Correo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 flex flex-wrap justify-center gap-6 items-center"
        >
          {/* Botón Descargar CV */}
          <a
            href="/cv/Nazareno_Zanluchi_CV.pdf"
            download
            className="px-5 py-2 bg-gradient-to-r  bg-gray-800 dark:bg-gray-800 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            📄 Descargar CV
          </a>

          {/* Botón LinkedIn */}
          <a
            href="https://linkedin.com/in/nazareno-zanluchi-82620b2a5 "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2  bg-gray-800 dark:bg-gray-800 text-white rounded-md hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>

          {/* Correo con recuadro e ícono de copia */}
          <div className="relative flex items-center gap-2">
            <span className="text-sm md:text-base font-mono bg-gray-800 dark:bg-gray-800 text-gray-300 dark:text-gray-300 px-4 py-2 rounded-md">
              nazarenozanluchi@gmail.com
            </span>
            <button
              onClick={handleCopyEmail}
              aria-label="Copiar correo electrónico"
              className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400 focus:outline-none"
            >
              {/* Icono de copiar (similar a Clipboard) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Mensaje de éxito */}
        {copySuccess && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-sm text-green-500"
          >
            {copySuccess}
          </motion.p>
        )}

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
              { name: "GraphQL", icon: <TbApi size={32} /> },
              { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
              { name: "JWT", icon: <SiJsonwebtokens size={32} /> },
              { name: "Prisma", icon: <SiPrisma size={32} /> },
              { name: "Zod", icon: <SiZod size={32} /> },
              { name: "Swagger", icon: <SiSwagger size={32} /> },
              { name: "Git / GitHub", icon: <FaGitAlt size={32} /> },
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
