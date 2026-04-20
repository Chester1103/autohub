import Card from "../ui/Card";
import Button from "../ui/Button";
import { Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
  return (
    <Card className="hover:shadow-md transition flex flex-col">
      <div>
        <h3 className="text-lg font-display font-semibold">{service.name}</h3>
        <p className="text-sm text-muted mt-2 font-body">
          {service.description}
        </p>

        <div className="mt-4 text-sm font-body space-y-2">
          <p className="flex items-center gap-2 text-foreground">
            <Clock className="w-4 h-4 text-accent" /> Duration:{" "}
            {service.duration}
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <DollarSign className="w-4 h-4 text-accent" /> Price:{" "}
            {service.price}
          </p>
        </div>
      </div>

      {/* Book Now CTA pinned at bottom */}
      <Link
        to={`/booking?service=${encodeURIComponent(service.name)}`}
        className="mt-auto"
      >
        <Button className="w-full mt-6">Book Now</Button>
      </Link>
    </Card>
  );
};
