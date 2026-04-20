export const ServiceCard = ({ service }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:bg-neutral-800 transition">
      <h3 className="text-lg font-semibold">{service.name}</h3>

      <p className="text-sm text-neutral-400 mt-1">{service.description}</p>

      <div className="mt-3 text-sm text-neutral-300 space-y-1">
        <p>Duration: {service.duration}</p>
        <p>Price: {service.price}</p>
      </div>
    </div>
  );
};
