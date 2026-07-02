const items = [
  'Invisible',
  'Removable',
  'Painless',
  'At-home scan',
  'Orthodontist-led',
  'EMI available',
]

export default function LogoStrip() {
  return (
    <div className="logostrip">
      <div className="container logostrip__inner">
        {items.map((t) => (
          <span key={t} className="logostrip__item">✓ {t}</span>
        ))}
      </div>
    </div>
  )
}
