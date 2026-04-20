import { useState } from "react";
import { TimeSlotGrid } from "./TimeSlotGrid";

export const BookingForm = ({ vehicles, bookings, onBook }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!vehicleId || !service || !time) return;

    onBook({
      vehicleId,
      service,
      time,
    });

    setVehicleId("");
    setService("");
    setTime("");
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl mb-6">
      <h2 className="text-lg font-semibold mb-4">Book Service</h2>

      {/* Vehicle Select */}
      <select
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
        className="w-full mb-3 p-2 bg-neutral-800 rounded"
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.id}>
            {v.make} {v.model}
          </option>
        ))}
      </select>

      {/* Service Input */}
      <input
        placeholder="Service Type (e.g. Oil Change)"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full mb-3 p-2 bg-neutral-800 rounded"
      />

      {/* Time Slots */}
      <p className="mb-2 text-sm text-neutral-400">Select Time Slot</p>

      <TimeSlotGrid selected={time} onSelect={setTime} bookings={bookings} />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-white text-black px-4 py-2 rounded w-full"
      >
        Confirm Booking
      </button>
    </div>
  );
};
