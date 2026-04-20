export const VehicleCard = ({ vehicle, onDelete }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
      <h3 className="text-lg font-semibold">
        {vehicle.make} {vehicle.model}
      </h3>

      <p className="text-sm text-neutral-400">
        {vehicle.year} • {vehicle.plate}
      </p>

      <button
        onClick={() => onDelete(vehicle.id)}
        className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};
