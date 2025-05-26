export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Mis Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              APIs y Backend Escalable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diseño y desarrollo de APIs REST seguras, rápidas y documentadas,
              con tecnologías como Node.js, TypeScript, Prisma y PostgreSQL.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Integraciones & Automatización
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Integración con Mercado Pago, Google Calendar y otros servicios
              externos.
            </p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Despliegue & Escalabilidad
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deploy en AWS, configuración de bases de datos y servidores,
              monitoreo y optimización del rendimiento del backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
