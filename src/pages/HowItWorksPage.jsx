import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Journey from '../components/Journey.jsx'
import SmilePreview from '../components/SmilePreview.jsx'
import FAQ from '../components/FAQ.jsx'

export default function HowItWorksPage() {
  return (
    <>
      <Seo
        path="/how-it-works"
        title="How Clear Aligners Work | Kalos Treatment Process"
        description="See how Kalos clear aligners straighten your teeth — from your free 3D scan to your final smile. A simple, orthodontist-monitored process, mostly from home."
      />
      <section className="page-head">
        <div className="container">
          <span className="page-head__badge">How it works</span>
          <h1>From first scan to final smile</h1>
          <p>A simple, science-backed process — designed and monitored by orthodontists, mostly from home.</p>
        </div>
      </section>

      <Journey />
      <HowItWorks />
      <SmilePreview />
      <FAQ />

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Start your smile journey today</h2>
          <Link to="/check-eligibility" className="btn btn-accent btn-lg">Check eligibility</Link>
        </div>
      </section>
    </>
  )
}
