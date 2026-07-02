const stats = [
  { num: '1,50,000+', label: 'Smiles transformed' },
  { num: '4.8★', label: 'Average rating' },
  { num: '100%', label: 'At-home process' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__pill">Designed by expert orthodontists</span>
          <h1>
            Kalos clear aligners for <em>adults, teens &amp; kids</em>
          </h1>
          <p>
            Comfortable, virtually invisible teeth aligners that straighten your smile
            from the comfort of home. No metal braces, no monthly clinic visits — just a
            confident new smile.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn btn-primary btn-lg">Book a scan</a>
            <a href="#preview" className="btn btn-outline btn-lg">See your new smile</a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__smile" aria-hidden="true">😁</div>
            <div className="hero__badge">
              <span className="dot" /> Invisible &amp; removable
            </div>
          </div>
          <div className="hero__chip hero__chip--1">FDA-grade material</div>
          <div className="hero__chip hero__chip--2">From ₹1,799/mo*</div>
        </div>
      </div>
    </section>
  )
}
