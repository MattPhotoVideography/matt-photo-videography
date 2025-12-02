// components/Section.jsx
export default function Section({
  title,
  subtitle,
  tone = "default", // default | tint | dim
  children,
}) {
  // Wrapper surface (remove solid white)
  const toneClass =
    tone === "tint"
      ? "bg-white/60 backdrop-blur-sm ring-1 ring-black/5" // very light card
      : tone === "dim"
      ? "bg-white/70 backdrop-blur-sm ring-1 ring-black/5" // a bit stronger
      : "bg-transparent"; // fully transparent (shows paper)

  return (
    <section className="py-16">
      <div className="container">
        {(title || subtitle) && (
          <header className="mb-8">
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 mt-2">{subtitle}</p>
            )}
          </header>
        )}

        <div className={`rounded-2xl ${toneClass} p-0 md:p-0`}>
          {/* Note: We don’t force a white inner background either. */}
          {children}
        </div>
      </div>
    </section>
  );
}
