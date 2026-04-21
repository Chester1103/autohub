export const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-center">
      <div className="flex items-center justify-center gap-2 mb-2 text-muted">
        {Icon && <Icon className="w-5 h-5 text-accent" />}
        <p className="text-sm font-body">{title}</p>
      </div>
      <h2 className="text-3xl font-mono font-bold text-[var(--color-foreground)]">
        {value}
      </h2>
    </div>
  );
};
