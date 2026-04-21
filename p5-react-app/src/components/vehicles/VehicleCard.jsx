import { Car } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export const VehicleCard = ({ vehicle, onDelete }) => {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-2">
        <Car className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-display font-semibold">
          {vehicle.make} {vehicle.model}
        </h3>
      </div>

      <p className="text-sm text-muted font-body">
        {vehicle.year} • {vehicle.plate}
      </p>

      <Button
        variant="danger"
        onClick={() => onDelete(vehicle.id)}
        className="mt-4 w-full"
      >
        Delete
      </Button>
    </Card>
  );
};
