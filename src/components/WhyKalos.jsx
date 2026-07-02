const ICONS = {
  invisible: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 14s4.5-8 12-8 12 8 12 8-4.5 8-12 8S2 14 2 14Z" />
      <circle cx="14" cy="14" r="3.2" />
    </svg>
  ),
  removable: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10a9 9 0 0 1 15-3l3 3" />
      <path d="M22 4v6h-6" />
      <path d="M24 18a9 9 0 0 1-15 3l-3-3" />
      <path d="M6 24v-6h6" />
    </svg>
  ),
  material: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3 5 6v6c0 5 3.8 8.5 9 10 5.2-1.5 9-5 9-10V6l-9-3Z" />
      <path d="M10 13.5 13 16.5 18.5 11" />
    </svg>
  ),
  expert: (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="10" r="6" />
      <path d="M9 15.5 7 25l7-3 7 3-2-9.5" />
    </svg>
  ),
}

const cards = [
  { icon: 'invisible', title: 'Virtually invisible', desc: 'Clear aligners almost no one will notice you’re wearing.' },
  { icon: 'removable', title: 'Removable', desc: 'Take them off to eat, drink and brush — no food limits.' },
  { icon: 'material', title: 'Medical-grade', desc: 'BPA-free, body-safe material that’s gentle on your gums.' },
  { icon: 'expert', title: 'Orthodontist-led', desc: 'Every plan is designed and monitored by certified experts.' },
]

export default function WhyKalos() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why choose Kalos</span>
          <h2>A smile you can trust</h2>
          <p>Thoughtfully designed for comfort, safety and real results.</p>
        </div>

        <div className="why__grid">
          {cards.map((c) => (
            <div key={c.title} className="why-card">
              <span className="why-card__icon">{ICONS[c.icon]}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
