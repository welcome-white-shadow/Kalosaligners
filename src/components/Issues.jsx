const Teeth = ({ children }) => (
  <g fill="#fff" stroke="var(--primary)" strokeWidth="2.2" strokeLinejoin="round">{children}</g>
)

const ICONS = {
  gaps: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="6" y="14" width="10" height="22" rx="3" />
        <rect x="17" y="14" width="10" height="22" rx="3" />
        <rect x="37" y="14" width="10" height="22" rx="3" />
        <rect x="48" y="14" width="10" height="22" rx="3" />
      </Teeth>
      <path d="M30 18v16M34 18v16" stroke="var(--accent-dark)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  forward: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="8" y="16" width="10" height="20" rx="3" />
        <rect x="19" y="16" width="10" height="20" rx="3" />
        <rect x="34" y="10" width="10" height="22" rx="3" transform="rotate(14 39 21)" />
        <rect x="47" y="16" width="10" height="20" rx="3" />
      </Teeth>
      <path d="M40 6l5 4-6 1z" fill="var(--accent-dark)" stroke="none" />
    </svg>
  ),
  crowding: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="8" y="16" width="11" height="20" rx="3" transform="rotate(-12 13 26)" />
        <rect x="20" y="14" width="11" height="22" rx="3" transform="rotate(8 25 25)" />
        <rect x="30" y="16" width="11" height="20" rx="3" transform="rotate(-9 35 26)" />
        <rect x="42" y="14" width="11" height="22" rx="3" transform="rotate(11 47 25)" />
      </Teeth>
    </svg>
  ),
  deep: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="14" y="8" width="11" height="18" rx="3" />
        <rect x="26" y="8" width="11" height="18" rx="3" />
        <rect x="38" y="8" width="11" height="18" rx="3" />
        <rect x="18" y="20" width="11" height="18" rx="3" />
        <rect x="34" y="20" width="11" height="18" rx="3" />
      </Teeth>
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="10" y="9" width="11" height="17" rx="3" />
        <rect x="30" y="9" width="11" height="17" rx="3" />
        <rect x="20" y="23" width="11" height="17" rx="3" />
        <rect x="40" y="23" width="11" height="17" rx="3" />
      </Teeth>
    </svg>
  ),
  open: (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <Teeth>
        <rect x="10" y="9" width="10" height="15" rx="3" />
        <rect x="44" y="9" width="10" height="15" rx="3" />
        <rect x="10" y="26" width="10" height="15" rx="3" />
        <rect x="44" y="26" width="10" height="15" rx="3" />
      </Teeth>
      <path d="M26 24h12" stroke="var(--accent-dark)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  ),
}

const issues = [
  { key: 'gaps', title: 'Teeth gaps', desc: 'Spaces between teeth closed gently and evenly.' },
  { key: 'forward', title: 'Forward teeth', desc: 'Forwardly placed front teeth eased back into line.' },
  { key: 'crowding', title: 'Crowding', desc: 'Overlapping, crowded teeth straightened for easy cleaning.' },
  { key: 'deep', title: 'Deep bite', desc: 'Upper teeth overlapping lower teeth corrected.' },
  { key: 'cross', title: 'Cross bite', desc: 'Misaligned upper and lower jaws realigned.' },
  { key: 'open', title: 'Open bite', desc: 'Front teeth that don’t meet brought together.' },
]

export default function Issues() {
  return (
    <section className="issues" id="issues">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we fix</span>
          <h2>Teeth alignment issues we can correct</h2>
          <p>From mild to complex cases, Kalos aligners are designed for a wide range of conditions.</p>
        </div>

        <div className="issues__grid hscroll">
          {issues.map((i) => (
            <article key={i.key} className="issue-card">
              <span className="issue-card__icon">{ICONS[i.key]}</span>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
