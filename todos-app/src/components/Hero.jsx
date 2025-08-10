import Card from './Card'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Hero() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/').then(response => {
      setData(response.data);
    });
  }, []);

  const filteredData = data.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex items-center justify-center px-4 py-20 h-full">
      <div className="text-center max-w-xl">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Welcome to your Todo's administrator</h2>
        <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 px-4 py-2 border text-white border-gray-300 rounded w-full max-w-md"
      />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {filteredData.map((task) => (
            <Card key={task.id} title={task.title} state={task.completed} className="flex flex-col justify-between" />
          ))}
        </div>
        <button className="bg-blue-600 text-white mt-6 px-6 py-2 rounded hover:bg-blue-700 transition">
          Empezar ahora
        </button>
      </div>
    </section>
  );
}