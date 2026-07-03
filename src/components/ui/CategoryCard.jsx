export function CategoryCard({ label, title, description, className = '' }) {
  return (
    <article className={`bg-canvas p-8 md:p-10 flex flex-col gap-5 ${className}`}>
      <span className="font-mono text-tag-mono text-clay tracking-widest uppercase">
        {label}
      </span>
      <div className="w-8 h-px bg-iron opacity-30" />
      <h3 className="font-serif text-display-lg heading-dynamic text-iron leading-tight">
        {title}
      </h3>
      <p className="font-mono text-body-mono text-iron opacity-60 max-w-[40ch]">
        {description}
      </p>
    </article>
  )
}
