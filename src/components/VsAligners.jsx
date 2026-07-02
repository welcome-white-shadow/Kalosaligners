const rows = [
  { f: 'Orthodontist-designed & monitored plan', k: true, o: 'Varies' },
  { f: 'Free 3D scan & consultation', k: true, o: 'Varies' },
  { f: 'Transparent pricing from ₹25,000', k: true, o: 'Often higher' },
  { f: 'No-cost EMI options', k: true, o: 'Varies' },
  { f: 'At-home + in-clinic scan', k: true, o: 'Varies' },
  { f: 'Assured results guarantee', k: true, o: false },
  { f: 'Dedicated WhatsApp support', k: true, o: 'Varies' },
  { f: 'Made in India', k: true, o: true },
]

function Cell({ v, kalos }) {
  if (v === true) return <span className="yes">✓</span>
  if (v === false) return <span className="no">✕</span>
  return <span className={kalos ? 'yes' : 'compare__txt'}>{v}</span>
}

export default function VsAligners() {
  return (
    <section className="compare" id="vs-aligners">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kalos vs other aligners</span>
          <h2>Why people choose Kalos</h2>
          <p>How Kalos compares to other clear aligner options — on care, price and support.</p>
        </div>

        <div className="compare__table">
          <div className="compare__row compare__row--head">
            <div className="compare__cell compare__cell--feature">Feature</div>
            <div className="compare__cell compare__cell--kalos">Kalos</div>
            <div className="compare__cell">Other aligners</div>
          </div>
          {rows.map((r) => (
            <div key={r.f} className="compare__row">
              <div className="compare__cell compare__cell--feature">{r.f}</div>
              <div className="compare__cell compare__cell--kalos"><Cell v={r.k} kalos /></div>
              <div className="compare__cell"><Cell v={r.o} /></div>
            </div>
          ))}
        </div>
        <p className="compare__disclaimer">Comparison reflects Kalos’s standard offering; features of other providers vary by brand and plan.</p>
      </div>
    </section>
  )
}
