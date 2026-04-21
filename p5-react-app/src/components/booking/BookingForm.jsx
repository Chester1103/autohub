import { useState } from "react";
import { TimeSlotGrid } from "./TimeSlotGrid";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import Section from "../ui/Section";
import { Car, Wrench } from "lucide-react";

export const BookingForm = ({ vehicles, bookings, onBook }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!vehicleId || !service || !time) return;
    onBook({ vehicleId, service, time });
    setVehicleId("");
    setService("");
    setTime("");
  };

  return (
    <Section title="Book Service" align="center">
      <Card className="mb-6">
        {/* Vehicle Select */}
        <label className="block mb-2 text-sm font-body text-muted flex items-center gap-2">
          <Car className="w-4 h-4 text-accent" /> Select Vehicle
        </label>
        <select
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-[var(--color-accent)] outline-none"
        >
          <option value="">Select Vehicle</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.id}>
              {v.make} {v.model}
            </option>
          ))}
        </select>

        {/* Service Input */}
        <label className="block mb-2 text-sm font-body text-muted flex items-center gap-2">
          <Wrench className="w-4 h-4 text-accent" /> Service Type
        </label>
        <Input
          placeholder="e.g. Oil Change"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mb-4"
        />

        {/* Time Slots */}
        <p className="mb-2 text-sm text-muted font-body">Select Time Slot</p>
        <TimeSlotGrid selected={time} onSelect={setTime} bookings={bookings} />

        {/* Submit */}
        <Button onClick={handleSubmit} className="mt-6 w-full">
          Confirm Booking
        </Button>
      </Card>
    </Section>
  );
};
