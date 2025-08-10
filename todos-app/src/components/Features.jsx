const features = [
  { title: "Gestión de tareas", desc: "Crea, edita y elimina tus pendientes fácilmente." },
  { title: "Prioridades", desc: "Organiza por urgencia y enfócate en lo importante." },
  { title: "Recordatorios", desc: "Recibe alertas para no olvidar nada." },
];

export default function Features() {
  return (
    <section className="py-12 px-4 grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="bg-white shadow rounded p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

