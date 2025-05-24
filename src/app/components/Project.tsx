export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Plataforma web para gestión de tareas colaborativas.",
      link: "#",
    },
    {
      title: "Proyecto 2",
      description: "Aplicación móvil para seguimiento de hábitos diarios.",
      link: "#",
    },
    {
      title: "Proyecto 3",
      description: "E-commerce para venta de productos artesanales.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
