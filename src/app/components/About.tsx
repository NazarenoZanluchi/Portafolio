"use client";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white"
        >
          Sobre Mí
        </motion.h2>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-gray-700 dark:text-gray-300"
        >
          <p className="text-lg leading-relaxed mb-6">
            Soy un apasionado <strong>Back-End Developer</strong>, enfocado en
            crear soluciones tecnológicas escalables, seguras y fáciles de
            mantener.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Me encanta resolver problemas complejos y construir sistemas
            robustos que soporten aplicaciones modernas. Siempre estoy
            aprendiendo sobre nuevas tecnologías y metodologías como{" "}
            <strong>Scrum</strong>, <strong>Clean Code</strong> y los principios{" "}
            <strong>SOLID</strong>. Disfruto trabajar en equipo y enfrentar
            desafíos técnicos que mejoren la experiencia del usuario final.
          </p>
          <p className="text-lg leading-relaxed">
            Fuera del trabajo, disfruto explorar nuevas tendencias tecnológicas,
            leer documentación técnica, jugar videojuegos y pasar tiempo al aire
            libre.
          </p>

          {/* Habilidades destacadas */}
          <div className="mt-10 space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
              <FaRegLightbulb className="text-yellow-500" /> Experiencia Técnica
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
              <li>• TypeScript / Node.js (Express)</li>
              <li>• GraphQL / REST API</li>
              <li>• PostgreSQL / Prisma ORM</li>
              <li>• JWT / Autenticación</li>
              <li>• Swagger / Documentación API</li>
              <li>• Git / GitHub / Version Control</li>
              <li>• Integraciones: Mercado Pago, Google Calendar</li>
              <li>• AWS / Despliegue</li>
            </ul>
          </div>

          {/* Idiomas */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
              <GiSkills className="text-blue-500" /> Idiomas
            </h3>
            <ul className="list-disc pl-5 mt-2 text-sm md:text-base">
              <li>
                <strong>Español:</strong> Nativo
              </li>
              <li>
                <strong>Inglés:</strong> Lectura técnica / Intermedio
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
