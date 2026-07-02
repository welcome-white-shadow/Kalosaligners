import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Experts from '../components/Experts.jsx'
import Guarantee from '../components/Guarantee.jsx'
import WhyKalos from '../components/WhyKalos.jsx'

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About Kalos Aligners | Expert Orthodontist-Led Care"
        description="Kalos Dental Technologies Private Limited makes beautiful smiles simple — expert orthodontists, modern aligner technology, at-home convenience. Meet the team behind Kalos."
      />
      <section className="page-head">
        <div className="container">
          <span className="page-head__badge">About Kalos</span>
          <h1>Beautiful smiles, made simple</h1>
          <p>“Kalos” means beautiful — and that’s our promise. We combine expert orthodontics with modern technology to make straightening your teeth comfortable, affordable and convenient.</p>
          <p className="page-head__legal">Kalos Aligners is a brand of <strong>Kalos Dental Technologies Private Limited</strong>.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__grid">
          {[
            { t: 'Our mission', d: 'To make confident, healthy smiles accessible to everyone — without the discomfort and hassle of traditional braces.' },
            { t: 'Expert-led care', d: 'Every treatment plan is designed and supervised by certified orthodontists, so you’re always in safe hands.' },
            { t: 'Built around you', d: 'From at-home scans to remote monitoring, our process fits into your life — not the other way around.' },
          ].map((c) => (
            <div key={c.t} className="about-story__card">
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyKalos />
      <Experts />
      <Guarantee />

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Join the Kalos smile family</h2>
          <Link to="/check-eligibility" className="btn btn-accent btn-lg">Check eligibility</Link>
        </div>
      </section>
    </>
  )
}
