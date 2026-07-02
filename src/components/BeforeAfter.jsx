import { useRef, useState } from 'react'

// Lightweight before/after image comparison slider (mouse + touch).
export default function BeforeAfter({ before, after, alt = 'Smile transformation' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const setFromClientX = (clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }

  const onDown = (e) => {
    dragging.current = true
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onUp = () => { dragging.current = false }

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      <img className="ba__img" src={after} alt={`${alt} — after`} draggable="false" loading="lazy" />
      <span className="ba__tag ba__tag--after">After</span>

      <div className="ba__before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img className="ba__img" src={before} alt={`${alt} — before`} draggable="false" loading="lazy" />
        <span className="ba__tag ba__tag--before">Before</span>
      </div>

      <div className="ba__handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="ba__line" />
        <span className="ba__grip">‹ ›</span>
      </div>
    </div>
  )
}
