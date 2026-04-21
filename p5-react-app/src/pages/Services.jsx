import { ServiceCard } from "../components/services/ServiceCard";
import { servicesData } from "../data/servicesData";
import { Wrench } from "lucide-react";
import Section from "../components/ui/Section";

export const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <Section title="Available Services">
        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
};
