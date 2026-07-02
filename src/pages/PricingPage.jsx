import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Pricing from '../components/Pricing.jsx'
import Comparison from '../components/Comparison.jsx'
import FAQ from '../components/FAQ.jsx'

export default function PricingPage() {
  return (
    <>
      <Seo
        path="/pricing"
        title="Clear Aligner Cost in India | Kalos Pricing & EMI"
        description="Transparent clear aligner pricing: mild cases ₹25,000, moderate ₹30,000–₹50,000. No-cost EMI from ₹1,799/month. Free 3D scan, all-inclusive plans."
      />
      <section className="page-head">
        <div className="container">
          <span className="page-head__badge">Pricing & EMI</span>
          <h1>One clear price. No surprises.</h1>
          <p>Pay upfront or split your treatment into easy, no-cost monthly EMIs.</p>
        </div>
      </section>

      <Pricing />

      <section className="emi bg-alt">
        <div className="container emi__grid">
          {[
            { t: 'No-cost EMI', d: 'Convert your treatment into 0% interest monthly instalments.' },
            { t: 'Everything included', d: 'All aligners, your treatment plan and remote monitoring — one price.' },
            { t: 'Free consultation', d: 'Your 3D scan and expert consultation are completely free.' },
          ].map((c) => (
            <div key={c.t} className="emi__card">
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Comparison />
      <FAQ />

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Ready to start? Check if you’re a candidate.</h2>
          <Link to="/check-eligibility" className="btn btn-accent btn-lg">Check eligibility</Link>
        </div>
      </section>
    </>
  )
}
