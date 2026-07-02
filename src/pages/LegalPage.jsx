import { Navigate } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { getLegal } from '../data/legal.js'

export default function LegalPage({ slug }) {
  const doc = getLegal(slug)
  if (!doc) return <Navigate to="/" replace />

  return (
    <article className="post">
      <Seo
        path={`/${slug}`}
        title={`${doc.title} | Kalos Aligners`}
        description={`${doc.title} for Kalos Aligners (Kalos Dental Technologies Private Limited).`}
      />
      <header className="post__head">
        <div className="container post__head-inner">
          <span className="post__cat">Legal</span>
          <h1>{doc.title}</h1>
          <p className="legal__updated">Last updated: {doc.updated}</p>
        </div>
      </header>

      <div className="container post__body legal__body">
        <p className="legal__intro">{doc.intro}</p>
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para, i) => <p key={i}>{para}</p>)}
          </section>
        ))}

        <section className="legal__company">
          <h2>Company details</h2>
          <p><strong>Kalos Dental Technologies Private Limited</strong></p>
          <p>CIN: U32509MR2026PTC476925</p>
          <p>Registered office: C/O Samit Dnyaneshwar, Patilkumar Nagar, Sakri Road, Dhule, Maharashtra 424001, India</p>
          <p>Email: hello@kalosaligners.in</p>
        </section>
      </div>
    </article>
  )
}
