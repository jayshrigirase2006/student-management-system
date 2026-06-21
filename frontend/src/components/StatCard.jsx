
function StatCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h1 className={`text-3xl font-bold ${color}`}>
        {value}
      </h1>

    </div>
  );
}

export default StatCard;