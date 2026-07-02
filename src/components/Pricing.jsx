import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Mild',
    price: '₹25,000',
    emi: 'from ₹1,799/mo*',
    desc: 'Small gaps, minor crowding or slightly uneven front teeth.',
    duration: '4–6 months',
    popular: false,
  },
  {
    name: 'Moderate',
    price: '₹30,000 – ₹50,000',
    emi: 'from ₹2,499/mo*',
    desc: 'Spacing, crowding and mild bite issues that need more movement.',
    duration: '6–10 months',
    popular: true,
  },
  {
    name: 'Complex',
    price: 'Custom quote',
    emi: 'shared after your scan',
    desc: 'Severe crowding or bite correction needing a detailed plan.',
    duration: '10–18 months',
    popular: false,
  },
]

const includes = [
  'Free 3D smile scan & consultation',
  'Orthodontist-designed treatment plan',
  'All custom aligners for your full plan',
  'Aligner case & removal tool',
  'Remote progress monitoring',
  'No-cost EMI options',
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Simple, transparent pricing</span>
          <h2>Pricing that fits your smile &amp; budget</h2>
          <p>Your price depends on how much your teeth need to move. No hidden fees, easy EMIs.</p>
        </div>

        <div className="ptiers">
          {tiers.map((t) => (
            <article key={t.name} className={`ptier ${t.popular ? 'ptier--popular' : ''}`}>
              {t.popular && <span className="ptier__tag">Most popular</span>}
              <h3 className="ptier__name">{t.name} cases</h3>
              <div className="ptier__price">{t.price}</div>
              <div className="ptier__emi">{t.emi}</div>
              <p className="ptier__desc">{t.desc}</p>
              <div className="ptier__dur">⏱ {t.duration}</div>
              <Link to="/check-eligibility" className={`btn ${t.popular ? 'btn-primary' : 'btn-outline'} ptier__cta`}>
                Check eligibility
              </Link>
            </article>
          ))}
        </div>

        <div className="pincludes">
          <h4>Every Kalos plan includes</h4>
          <ul>
            {includes.map((f) => (
              <li key={f}><span className="check">✓</span>{f}</li>
            ))}
          </ul>
          <p className="pincludes__note">*EMI shown on no-cost monthly plans. Final price is confirmed after your free 3D scan.</p>
        </div>
      </div>
    </section>
  )
}
