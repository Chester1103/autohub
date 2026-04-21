const Card = ({ children, className = "", variant = "default" }) => {
  const base =
    "rounded-xl p-6 shadow-sm transition-all duration-300 focus:outline-none";

  const variants = {
    default:
      "bg-[var(--color-card)] border border-[var(--color-border)] hover:shadow-md",
    accent:
      "bg-[var(--color-accent)]/10 border border-[var(--color-accent)] hover:shadow-md",
    muted:
      "bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-md",
    metric:
      "bg-[var(--color-card)] border border-[var(--color-border)] hover:shadow-md text-center",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
