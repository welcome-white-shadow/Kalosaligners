const experts = [
  { name: 'Dr. Samit Patil', role: 'Director, Kalos Dental Technologies Pvt. Ltd.' },
  { name: 'Dr. Goldi Kukreja', role: 'MDS, Orthodontics', exp: '10+ yrs experience' },
  { name: 'Dr. Gopika Patil', role: 'Orthodontist, Kalos Aligners' },
]

function initials(name) {
  const parts = name.replace(/^Dr\.?\s*/i, '').trim().split(/\s+/)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase()
}

export default function Experts() {
  return (
    <section className="experts" id="experts">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Meet the experts</span>
          <h2>Your smile, in expert hands</h2>
          <p>Every Kalos treatment plan is designed and supervised by certified orthodontists.</p>
        </div>

        <div className="experts__grid experts__grid--3 hscroll">
          {experts.map((e) => (
            <article key={e.name} className="expert-card">
              <div className="expert-card__avatar" aria-hidden="true">{initials(e.name)}</div>
              <h3>{e.name}</h3>
              <p className="expert-card__role">{e.role}</p>
              {e.exp && <span className="expert-card__exp">{e.exp}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
