export default function Card({ title, state, className }) {
  return (
    <div className={`bg-white border border-gray-300 rounded-lg p-4 shadow-sm ${className}`}>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      <div>
        <button className={`p-2 rounded mt-4 ${
          state ? "bg-green-500 text-white" : "bg-gray-200 text-red-700"
        }`}>
            {state ? "Completed" : "Pending"}
        </button>
      </div> 
    </div>
  );
}
