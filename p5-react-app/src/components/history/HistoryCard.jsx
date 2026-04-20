import Card from "../ui/Card";

export const HistoryCard = ({ item }) => {
  const statusVariants = {
    completed: "bg-[var(--color-success)] text-white",
    pending: "bg-[var(--color-warning)] text-black",
    error: "bg-[var(--color-error)] text-white",
  };

  return (
    <Card className="flex flex-col">
      {/* Service */}
      <h3 className="text-lg font-display font-semibold">{item.service}</h3>

      {/* Time */}
      <p className="text-sm text-muted mt-1 font-body">Time: {item.time}</p>

      {/* Status Badge pinned at bottom */}
      <div className="mt-auto pt-4">
        <span
          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-body font-medium shadow-sm ${statusVariants[item.status] || statusVariants.pending}`}
        >
          {item.status
            ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
            : "Pending"}
        </span>
      </div>
    </Card>
  );
};
