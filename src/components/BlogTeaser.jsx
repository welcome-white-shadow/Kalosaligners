import { Link } from 'react-router-dom'
import { posts } from '../data/blog.js'

export default function BlogTeaser() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Smile tips &amp; guides</span>
          <h2>Learn about your smile journey</h2>
          <p>Honest, helpful guides on clear aligners, costs and care — from the Kalos team.</p>
        </div>

        <div className="blog__grid hscroll">
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
  )
}
