import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { getPost, posts } from '../data/blog.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/blog" replace />

  const others = posts.filter((p) => p.slug !== slug).slice(0, 2)
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Kalos Aligners' },
    publisher: { '@type': 'Organization', name: 'Kalos Aligners' },
    mainEntityOfPage: `https://kalosaligners.com/blog/${post.slug}`,
  }

  return (
    <article className="post">
      <Seo
        path={`/blog/${post.slug}`}
        title={`${post.title} | Kalos Aligners`}
        description={post.excerpt}
        jsonLd={articleLd}
      />
      <header className="post__head">
        <div className="container post__head-inner">
          <Link to="/blog" className="post__back">← All articles</Link>
          <span className="post__cat">{post.category} · {post.readTime}</span>
          <h1>{post.title}</h1>
        </div>
      </header>

      <div className="container post__body">
        {post.body.map((b, i) =>
          b.h ? <h2 key={i}>{b.h}</h2> : <p key={i}>{b.p}</p>
        )}

        <div className="post__cta">
          <h3>Curious if Kalos is right for you?</h3>
          <p>Get a free 3D scan and a personalised plan from our orthodontists.</p>
          <Link to="/check-eligibility" className="btn btn-primary btn-lg">Check eligibility</Link>
        </div>
      </div>

      {others.length > 0 && (
        <section className="blog bg-alt">
          <div className="container">
            <div className="section-head"><h2>Keep reading</h2></div>
            <div className="blog__grid blog__grid--page">
              {others.map((p) => (
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
      )}
    </article>
  )
}
