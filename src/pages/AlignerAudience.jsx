import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Issues from '../components/Issues.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Comparison from '../components/Comparison.jsx'
import Guarantee from '../components/Guarantee.jsx'
import FAQ from '../components/FAQ.jsx'
import AlignerArt from '../components/AlignerArt.jsx'

const DATA = {
  adults: {
    badge: 'Clear aligners for adults',
    title: 'Straighten your teeth without anyone noticing',
    sub: 'Virtually invisible aligners that fit into your busy life — no metal braces, no awkward clinic visits, just a confident new smile.',
    points: ['Wear them through meetings & meetings', 'Removable for meals and photos', 'Most plans finish in 4–8 months'],
  },
  teens: {
    badge: 'Clear aligners for teens',
    title: 'A confident smile, all through the teen years',
    sub: 'Comfortable, removable aligners designed for teenagers — no food restrictions, no brackets, and easy to keep clean.',
    points: ['No metal to poke or irritate', 'Eat all your favourite foods', 'Easy to clean — better oral hygiene'],
  },
  kids: {
    badge: 'Clear aligners for kids',
    title: 'Gentle, early correction for growing smiles',
    sub: 'Orthodontist-guided aligners for children, designed to correct alignment early and comfortably as their smile develops.',
    points: ['Gentle, age-appropriate movement', 'Removable & comfortable', 'Supervised by certified orthodontists'],
  },
}

const SEO = {
  adults: {
    title: 'Clear Aligners for Adults | Invisible Braces — Kalos',
    description: 'Discreet clear aligners for adults in India. Straighten your teeth at home, virtually invisibly. From ₹25,000 with no-cost EMI. Book a free scan.',
  },
  teens: {
    title: 'Clear Aligners for Teens | Comfortable Invisible Braces — Kalos',
    description: 'Comfortable, removable clear aligners for teenagers — no metal, no food limits. Orthodontist-designed. Book a free scan with Kalos.',
  },
  kids: {
    title: 'Clear Aligners for Kids | Early Smile Correction — Kalos',
    description: 'Gentle, orthodontist-guided clear aligners for kids. Early, comfortable smile correction. Book a free scan with Kalos.',
  },
}

export default function AlignerAudience({ audience }) {
  const d = DATA[audience] || DATA.adults
  const s = SEO[audience] || SEO.adults

  return (
    <>
      <Seo path={`/aligners/${audience}`} title={s.title} description={s.description} />
      <section className="phero">
        <div className="container phero__inner">
          <div className="phero__copy">
            <span className="phero__badge">{d.badge}</span>
            <h1>{d.title}</h1>
            <p>{d.sub}</p>
            <ul className="phero__points">
              {d.points.map((p) => <li key={p}>✓ {p}</li>)}
            </ul>
            <div className="phero__actions">
              <Link to={`/check-eligibility?for=${audience}`} className="btn btn-primary btn-lg">Check your eligibility</Link>
              <Link to="/pricing" className="btn btn-outline btn-lg">See pricing</Link>
            </div>
          </div>
          <div className="phero__art"><AlignerArt /></div>
        </div>
      </section>

      <Issues />
      <HowItWorks />
      <Comparison />
      <Guarantee />
      <FAQ />
    </>
  )
}
