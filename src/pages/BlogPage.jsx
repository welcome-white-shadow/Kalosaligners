import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { posts } from '../data/blog.js'

export default function BlogPage() {
  return (
    <>
      <Seo
        path="/blog"
        title="Kalos Blog | Clear Aligner Tips, Costs & Smile Guides"
        description="Honest guides on clear aligners — costs in India, aligners vs braces, care tips and more, from the Kalos orthodontist team."
      />
      <section className="page-head">
        <div className="container">
          <span className="page-head__badge">Kalos blog</span>
          <h1>Smile tips, guides &amp; aligner advice</h1>
          <p>Everything you need to know about clear aligners, costs, care and confident smiles.</p>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="blog__grid blog__grid--page">
            {posts.map((p) => (
              <article key={p.slug} className="blog-card">
                <Link to={`/blog/${p.slug}`} className="blog-card__link">
                  <div className="blog-card__top">
                    <span className="blog-card__cat">{p.category}</span>
                    <span className="blog-card__time">{p.readTime}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="blog-card__more">Read more →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Ready to start your smile journey?</h2>
          <Link to="/check-eligibility" className="btn btn-accent btn-lg">Check eligibility</Link>
        </div>
      </section>
    </>
  )
}
