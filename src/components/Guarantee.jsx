import { Link } from 'react-router-dom'

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container guarantee__inner">
        <div className="guarantee__icon" aria-hidden="true">🛡️</div>
        <div className="guarantee__text">
          <h2>Only Kalos guarantees your results</h2>
          <p>
            If your smile goal isn’t met, we’ll cover the extra aligners needed to get
            you there — at no additional cost. You simply need to follow your treatment
            plan 100% as prescribed by your orthodontist.
          </p>
          <span className="guarantee__tnc">*Terms &amp; conditions apply</span>
        </div>
        <Link to="/check-eligibility" className="btn btn-accent btn-lg">Get started</Link>
      </div>
    </section>
  )
}
