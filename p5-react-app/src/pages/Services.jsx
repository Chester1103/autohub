import { ServiceCard } from "../components/services/ServiceCard";
import { servicesData } from "../data/servicesData";

export const Services = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Available Services</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
