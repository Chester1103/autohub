import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import Section from "../ui/Section";

export const VehicleForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
    <Section title="Add Vehicle" align="center">
      <Card className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Make"
            value={form.make}
            onChange={(e) => handleChange("make", e.target.value)}
          />
          <Input
            placeholder="Model"
            value={form.model}
            onChange={(e) => handleChange("model", e.target.value)}
          />
          <Input
            placeholder="Year"
            value={form.year}
            onChange={(e) => handleChange("year", e.target.value)}
          />
          <Input
            placeholder="Plate"
            value={form.plate}
            onChange={(e) => handleChange("plate", e.target.value)}
          />
        </div>

        <Button onClick={handleSubmit} className="mt-6 w-full">
          Add Vehicle
        </Button>
      </Card>
    </Section>
  );
};
