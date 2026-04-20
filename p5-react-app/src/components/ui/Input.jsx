const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] font-body placeholder:text-[var(--color-muted)] outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition ${className}`}
      {...props}
    />
  );
};

export default Input;
