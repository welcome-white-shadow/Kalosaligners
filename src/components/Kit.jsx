import { Link } from 'react-router-dom'

const ART = {
  pouch: (
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <rect x="26" y="14" width="44" height="68" rx="7" fill="var(--brand-gold)" />
      <rect x="26" y="14" width="44" height="12" rx="6" fill="#a8842f" />
      <rect x="30" y="18" width="36" height="4" rx="2" fill="#fff" opacity=".5" />
      <path d="M37 50c0-8 5-12 11-12s11 4 11 12c0 5-3 8-6 8 0-5-2-8-5-8s-5 3-5 8c-3 0-6-3-6-8z"
        fill="#fff" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  case: (
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <ellipse cx="48" cy="66" rx="34" ry="9" fill="#1b2a4a" opacity=".08" />
      <path d="M16 50a32 20 0 0 0 64 0v6a32 20 0 0 1-64 0z" fill="var(--accent-dark)" />
      <ellipse cx="48" cy="50" rx="32" ry="20" fill="var(--accent)" />
      <ellipse cx="48" cy="50" rx="32" ry="20" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="2" />
      <text x="48" y="56" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontWeight="800" fontSize="18" fill="var(--primary)">KA</text>
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 96 96" fill="none" stroke="var(--primary)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M30 78 58 50" />
      <circle cx="30" cy="80" r="3.2" fill="var(--primary)" stroke="none" />
      <path d="M58 50c-7-7-7-18 0-25s18-7 25 0c4 4 4 10 0 14s-10 4-14 0c-2-2-2-5 0-7s5-2 7 0" />
    </svg>
  ),
  guide: (
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <rect x="22" y="18" width="52" height="62" rx="6" fill="var(--accent-soft)" stroke="var(--primary)" strokeWidth="2.4" />
      <rect x="22" y="18" width="14" height="62" rx="6" fill="var(--primary)" />
      <path d="M44 34h22M44 44h22M44 54h16" stroke="var(--primary)" strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
    </svg>
  ),
}

const items = [
  { key: 'pouch', name: 'Custom aligner sets', desc: 'Your full series of 3D-printed aligners, sealed and labelled.' },
  { key: 'case', name: 'Smart carry case', desc: 'A sturdy case to keep your aligners safe on the go.' },
  { key: 'tool', name: 'Aligner remover tool', desc: 'Pop your aligners off easily, without hurting your nails.' },
  { key: 'guide', name: 'Step-by-step guide', desc: 'Clear instructions and care tips to get the best results.' },
]

export default function Kit() {
  return (
    <section className="kit bg-alt" id="kit">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What’s in the box</span>
          <h2>Everything you need, delivered to your door</h2>
          <p>Your Kalos kit arrives with everything to start your smile journey at home.</p>
        </div>

        <div className="kit__grid hscroll">
          {items.map((it) => (
            <article key={it.key} className="kit-card">
              <div className="kit-card__art">{ART[it.key]}</div>
              <h3>{it.name}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>

        <div className="kit__cta">
          <Link to="/check-eligibility" className="btn btn-primary btn-lg">Book a free scan</Link>
        </div>
      </div>
    </section>
  )
}
