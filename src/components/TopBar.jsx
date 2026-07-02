import Logo from './Logo.jsx'

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Logo variant="dark" />
        <a href="#top" className="topbar__cta">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1Z"
            />
          </svg>
          <span>Talk to an expert</span>
        </a>
      </div>
    </header>
  )
}
