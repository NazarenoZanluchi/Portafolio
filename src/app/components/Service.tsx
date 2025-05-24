export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">
              Creación de sitios web responsivos y dinámicos con tecnologías
              modernas.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Diseño centrado en el usuario para ofrecer mejores experiencias
              digitales.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Consultoría Tech</h3>
            <p className="text-gray-600">
              Asesoramiento técnico para startups y empresas en sus proyectos
              digitales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
