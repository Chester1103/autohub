import { useEffect, useState } from "react";
import { VehicleForm } from "../components/vehicles/VehicleForm";
import { VehicleCard } from "../components/vehicles/VehicleCard";
import {
  getVehicles,
  addVehicle,
  deleteVehicle,
} from "../services/vehicleService";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(getVehicles());
  }, []);

  const handleAdd = (data) => {
    const updated = addVehicle(data);
    setVehicles(updated);
  };

  const handleDelete = (id) => {
    const updated = deleteVehicle(id);
    setVehicles(updated);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <h1 className="text-3xl font-display font-bold mb-8">Vehicles</h1>

      <VehicleForm onAdd={handleAdd} />

      {vehicles.length === 0 ? (
        <p className="text-muted mt-6">No vehicles yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
