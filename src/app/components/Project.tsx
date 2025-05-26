"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      title: "Backend Developer",
      company: "Startup de e-commerce",
      period: "Septiembre 2023 – Junio 2024",
      description:
        "Trabajé en el diseño estructural y modelado de la base de datos. Desarrollé las funciones del backend usando TypeScript y Node.js con Express, implementando validaciones con Zod y documentación con Swagger.",
      impact:
        "Asumí la responsabilidad total del backend, manteniendo y mejorando la estabilidad del sistema tras la salida del equipo técnico original.",
      challenges:
        "Aprender y aplicar herramientas como Zod, Swagger y PostgreSQL desde cero, enfrentando la curva de aprendizaje mientras desarrollaba en producción.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "Zod",
        "Swagger",
        "REST",
        "PostgreSQL",
      ],
      liveUrl: null,
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Proyecto Gestor de Reservas",
      period: "Julio 2024 – Abril 2025",
      description:
        "Diseñé y desarrollé por completo el back-end del sistema: modelado de base de datos, autenticación, lógica de reservas, documentación y despliegue. Integré pagos con Mercado Pago, sincronización con Google Calendar y deploy en AWS EC2.",
      impact:
        "El sistema resultante es más robusto, escalable y fácil de mantener, permitiendo una gestión de reservas más confiable.",
      challenges:
        "La mayor complejidad fue integrar pagos con Mercado Pago de forma segura, y configurar correctamente el despliegue y dominio en AWS.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "JWT",
        "Prisma",
        "PostgreSQL",
        "Swagger",
        "Zod",
        "Mercado Pago",
        "Google Calendar",
        "AWS",
        "Helmet",
        "Winston",
        "Axios",
      ],
      liveUrl: "https://mansionaventura.com ",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Experiencia Laboral
        </h2>

        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {/* Tarjetas */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`relative mb-10 flex flex-col md:flex-row ${
                  isLeft ? "md:items-start" : "md:items-end md:flex-row-reverse"
                }`}
              >
                {/* Tarjeta de experiencia */}
                <article
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`w-full md:w-5/12 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 relative z-10 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-[1.02]" : "scale-100"
                  } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                  aria-label={`Experiencia como ${exp.title} en ${exp.company}`}
                >
                  <time className="block text-sm font-medium text-blue-600 dark:text-blue-400">
                    {exp.period}
                  </time>
                  <h3 className="text-xl font-bold mt-1 dark:text-white">
                    {exp.title}
                    {exp.liveUrl && (
                      <span className="ml-2 inline-block text-xs px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400 rounded-full">
                        En producción
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>

                  {/* Impacto */}
                  {exp.impact && (
                    <p className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      💡 <strong>Impacto:</strong> {exp.impact}
                    </p>
                  )}

                  {/* Desafío */}
                  {exp.challenges && (
                    <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                      ⚙️ <strong>Desafío:</strong> {exp.challenges}
                    </p>
                  )}

                  {/* Tecnologías */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlace al sitio */}
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 text-sm underline"
                    >
                      Ver sitio en producción →
                    </a>
                  )}
                </article>

                {/* Círculo del timeline */}
                <div className="hidden md:flex w-8 justify-center items-center absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-0">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
