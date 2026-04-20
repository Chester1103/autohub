const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2";

  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[#e65f2f] focus:ring-[var(--color-accent)]/50",
    ghost:
      "bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-background)] hover:shadow focus:ring-[var(--color-border)]",
    secondary:
      "bg-[var(--color-foreground)] text-white hover:bg-[#081d33] focus:ring-[var(--color-foreground)]/50",
    danger:
      "bg-[var(--color-error)] text-white hover:bg-[#b91c1c] focus:ring-[var(--color-error)]/50",
    slot: "bg-[var(--color-muted)] text-white hover:bg-[#5b616a] focus:ring-[var(--color-muted)]/50",
    selected:
      "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30",
    disabled:
      "bg-[var(--color-border)] text-[var(--color-muted)] cursor-not-allowed opacity-60",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
