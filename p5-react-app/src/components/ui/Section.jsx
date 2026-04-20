const Section = ({ title, children, align = "left" }) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <section className="mb-16 max-w-5xl mx-auto">
      {title && (
        <h2
          className={`text-2xl md:text-3xl font-display font-semibold mb-8 ${alignment}`}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
