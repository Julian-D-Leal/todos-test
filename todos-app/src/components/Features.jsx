const features = [
  { title: "Task management", desc: "Create, edit, and delete your tasks easily." },
  { title: "Priorities", desc: "Organize by urgency and focus on what matters." },
  { title: "Reminders", desc: "Get alerts so you don't forget anything." },
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

