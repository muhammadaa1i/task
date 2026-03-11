export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={className}>
      <h2 className="font-['Space_Grotesk'] text-3xl leading-tight font-bold text-(--text) md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-(--text-muted)">{subtitle}</p> : null}
    </div>
  )
}
