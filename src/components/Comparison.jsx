const rows = [
  { feature: 'Virtually invisible', kalos: true, braces: false },
  { feature: 'Removable for eating & cleaning', kalos: true, braces: false },
  { feature: 'No metal wires or brackets', kalos: true, braces: false },
  { feature: 'Fewer clinic visits', kalos: true, braces: false },
  { feature: 'Comfortable, no poking', kalos: true, braces: false },
  { feature: 'Eat whatever you like', kalos: true, braces: false },
  { feature: 'Preview results before you start', kalos: true, braces: false },
]

export default function Comparison() {
  return (
    <section className="compare bg-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Kalos vs. traditional braces</span>
          <h2>Why people are switching to clear aligners</h2>
        </div>

        <div className="compare__table">
          <div className="compare__row compare__row--head">
            <div className="compare__cell compare__cell--feature">Feature</div>
            <div className="compare__cell compare__cell--kalos">Kalos Aligners</div>
            <div className="compare__cell">Metal braces</div>
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="compare__row">
              <div className="compare__cell compare__cell--feature">{r.feature}</div>
              <div className="compare__cell compare__cell--kalos">
                {r.kalos ? <span className="yes">✓</span> : <span className="no">✕</span>}
              </div>
              <div className="compare__cell">
                {r.braces ? <span className="yes">✓</span> : <span className="no">✕</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
