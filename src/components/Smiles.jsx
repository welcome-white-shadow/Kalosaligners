import { useState } from 'react'

// Real Kalos before/after results. Drop the actual images in public/images/
// named result1 / result2 / result3 — any of .png .jpg .jpeg .webp works.
const results = ['/images/result1', '/images/result2', '/images/result3']
const EXTS = ['.png', '.jpg', '.jpeg', '.webp']

function ResultCard({ base }) {
  const [i, setI] = useState(0)
  const failed = i >= EXTS.length
  return (
    <article className="smile-card">
      <div className="smile-card__media">
        {failed ? (
          <div className="smile-card__ph">
            <span>Before &amp; After</span>
            <small>Add real result image</small>
          </div>
        ) : (
          <img
            src={base + EXTS[i]}
            alt="Real Kalos before and after smile transformation"
            loading="lazy"
            onError={() => setI((n) => n + 1)}
          />
        )}
      </div>
    </article>
  )
}

export default function Smiles() {
  return (
    <section className="smiles" id="smiles">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Real people, real smiles</span>
          <h2>Smiles transformed with Kalos</h2>
          <p>Real before &amp; after results from our happy Kalos customers.</p>
        </div>

        <div className="smiles__grid hscroll">
          {results.map((base) => <ResultCard key={base} base={base} />)}
        </div>
      </div>
    </section>
  )
}
