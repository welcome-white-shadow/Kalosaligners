import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const audience = [
  { to: '/aligners/adults', label: 'For Adults', desc: 'Discreet aligners for work & life' },
  { to: '/aligners/teens', label: 'For Teens', desc: 'Confident smiles through school' },
  { to: '/aligners/kids', label: 'For Kids', desc: 'Early, gentle correction' },
]

const links = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => { setOpen(false); setDrop(false) }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo variant="dark" />

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <div
            className={`nav__item nav__has-drop ${drop ? 'is-open' : ''}`}
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button className="nav__droptrigger" onClick={() => setDrop((v) => !v)} aria-expanded={drop}>
              Clear Aligners <span className="nav__caret">▾</span>
            </button>
            <div className="nav__dropdown">
              {audience.map((a) => (
                <Link key={a.to} to={a.to} className="nav__dropitem" onClick={close}>
                  <strong>{a.label}</strong>
                  <small>{a.desc}</small>
                </Link>
              ))}
            </div>
          </div>

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__item nav__link ${isActive ? 'is-active' : ''}`}
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}

          <Link to="/check-eligibility" className="btn btn-primary nav__cta-mobile" onClick={close}>
            Check eligibility
          </Link>
        </nav>

        <div className="nav__right">
          <Link to="/check-eligibility" className="btn btn-primary nav__cta">Check eligibility</Link>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
