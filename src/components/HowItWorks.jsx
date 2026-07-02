const steps = [
  {
    n: '01',
    title: 'Custom-made for you',
    desc: 'Each aligner is 3D-printed from a digital scan of your teeth — a perfect, personalised fit.',
  },
  {
    n: '02',
    title: 'Gentle, gradual movement',
    desc: 'Aligners apply light, controlled pressure that moves your teeth a little at a time.',
  },
  {
    n: '03',
    title: 'A new set every 1–2 weeks',
    desc: 'You switch to the next aligner in your series as your teeth move closer to the final result.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How aligners work</span>
          <h2>Straighter teeth, one aligner at a time</h2>
          <p>A simple, science-backed process — designed and monitored by orthodontists.</p>
        </div>

        <div className="how__grid">
          {steps.map((s) => (
            <div key={s.n} className="how-card">
              <span className="how-card__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
