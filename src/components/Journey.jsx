import { Link } from 'react-router-dom'

const steps = [
  {
    icon: '📅',
    title: 'Book your scan',
    desc: 'Book a free at-home or in-clinic 3D scan. Our expert maps your smile in minutes.',
  },
  {
    icon: '📦',
    title: 'Get your aligners',
    desc: 'Your custom aligner kit is delivered to your door with everything you need to start.',
  },
  {
    icon: '😁',
    title: 'Track your progress',
    desc: 'Wear, switch and smile. Our team monitors your journey remotely, every step.',
  },
]

export default function Journey() {
  return (
    <section className="journey bg-alt" id="journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Your treatment journey</span>
          <h2>Three easy steps to your best smile</h2>
        </div>

        <div className="journey__track">
          {steps.map((s, i) => (
            <div key={s.title} className="journey-step">
              <div className="journey-step__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <span className="journey-step__line" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="journey__cta">
          <Link to="/check-eligibility" className="btn btn-primary btn-lg">Start my journey</Link>
        </div>
      </div>
    </section>
  )
}
