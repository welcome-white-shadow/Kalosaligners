import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <span className="notfound__code">404</span>
        <h1>This page wandered off</h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn-primary btn-lg">Back to home</Link>
      </div>
    </section>
  )
}
