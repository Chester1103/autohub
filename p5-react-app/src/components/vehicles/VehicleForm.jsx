import { useState } from "react";

export const VehicleForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
  });

  const handleSubmit = () => {
    if (!form.make || !form.model) return;

    onAdd(form);

    setForm({
      make: "",
      model: "",
      year: "",
      plate: "",
    });
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl mb-6">
      <h2 className="text-lg font-semibold mb-4">Add Vehicle</h2>

      <div className="grid grid-cols-2 gap-3">
        <input
          placeholder="Make"
          value={form.make}
          onChange={(e) => setForm({ ...form, make: e.target.value })}
          className="p-2 bg-neutral-800 rounded"
        />

        <input
          placeholder="Model"
          value={form.model}
          onChange={(e) => setForm({ ...form, model: e.target.value })}
          className="p-2 bg-neutral-800 rounded"
        />

        <input
          placeholder="Year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="p-2 bg-neutral-800 rounded"
        />

        <input
          placeholder="Plate"
          value={form.plate}
          onChange={(e) => setForm({ ...form, plate: e.target.value })}
          className="p-2 bg-neutral-800 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-white text-black px-4 py-2 rounded"
      >
        Add Vehicle
      </button>
    </div>
  );
};
