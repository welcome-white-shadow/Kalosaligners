import SmartImg from './SmartImg.jsx'

const items = [
  { base: '/images/gallery1', label: 'Signature gift box' },
  { base: '/images/gallery2', label: 'Aligner kit' },
  { base: '/images/gallery3', label: 'Carry case & kit' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Product &amp; packaging</span>
          <h2>The Kalos experience</h2>
          <p>Premium branding &amp; packaging — from the gift box to your aligner case.</p>
        </div>

        <div className="gallery__grid">
          {items.map((it) => (
            <figure key={it.base} className="gallery__item">
              <SmartImg base={it.base} alt={it.label} className="gallery__img" />
              <figcaption className="gallery__cap">{it.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
