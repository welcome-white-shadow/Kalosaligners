import { useState } from 'react'

// Tries base + common extensions; shows a helpful placeholder until the
// image file is dropped into public/images.
const EXTS = ['.jpg', '.png', '.jpeg', '.webp']

export default function SmartImg({ base, alt, className = '' }) {
  const [i, setI] = useState(0)
  if (i >= EXTS.length) {
    return (
      <div className={`smartimg-ph ${className}`}>
        <span>＋ Add image</span>
        <small>{base.split('/').pop()}.jpg</small>
      </div>
    )
  }
  return (
    <img
      className={className}
      src={base + EXTS[i]}
      alt={alt}
      loading="lazy"
      onError={() => setI((n) => n + 1)}
    />
  )
}
