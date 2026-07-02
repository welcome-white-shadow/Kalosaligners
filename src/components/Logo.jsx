import { useState } from 'react'
import { Link } from 'react-router-dom'

// Kalos Aligners wordmark.
// If a real logo file is dropped at public/images/logo.png (and logo-white.png
// for the dark footer), it is used automatically. Otherwise a clean "Kalos
// aligners" serif wordmark is shown — no monogram, no icon.
export default function Logo({ variant = 'dark' }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const src = variant === 'light' ? '/images/logo-white.png' : '/images/logo.png'

  const main = variant === 'light' ? '#ffffff' : 'var(--primary)'
  const tag = variant === 'light' ? 'var(--accent)' : 'var(--primary)'
  const serif = "'Playfair Display', Georgia, serif"

  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Kalos Aligners home">
      <img
        className="logo__img"
        src={src}
        alt="Kalos Aligners"
        onLoad={() => setImgLoaded(true)}
        style={{ display: imgLoaded ? 'block' : 'none' }}
      />

      {!imgLoaded && (
        <svg className="logo__lockup" viewBox="0 0 210 70" role="img" aria-label="Kalos Aligners">
          <text x="2" y="46" fontFamily={serif} fontWeight="700" fontSize="48" fill={main}>Kalos</text>
          <text x="206" y="65" textAnchor="end" fontFamily={serif} fontStyle="italic" fontWeight="500" fontSize="16" letterSpacing="2" fill={tag}>aligners</text>
        </svg>
      )}
    </Link>
  )
}
