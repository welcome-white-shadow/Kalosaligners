export default function AlignerArt() {
  return (
    <svg className="aligner-art" viewBox="0 0 240 230" role="img" aria-label="Kalos clear aligner with its carry case">
      <defs>
        <linearGradient id="kaBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--accent-soft)" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="kaCase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c2dc55" />
          <stop offset="1" stopColor="#93b41a" />
        </linearGradient>
        <linearGradient id="kaTray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <circle cx="120" cy="112" r="98" fill="url(#kaBg)" />
      <circle cx="120" cy="112" r="98" fill="none" stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="2 8" />

      {/* soft shadow under case */}
      <ellipse cx="120" cy="188" rx="70" ry="12" fill="#1b2a4a" opacity="0.07" />

      {/* ===== Clear aligner arch (hero) ===== */}
      <path
        d="M58 96 C58 64 88 48 120 48 C152 48 182 64 182 96 C182 116 171 128 156 128 C156 104 146 90 120 90 C94 90 84 104 84 128 C69 128 58 116 58 96 Z"
        fill="url(#kaTray)" stroke="var(--accent-dark)" strokeWidth="2.5" strokeLinejoin="round"
      />
      {/* tooth separations */}
      <g stroke="var(--accent-dark)" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="92" y1="58" x2="98" y2="86" />
        <line x1="110" y1="51" x2="112" y2="84" />
        <line x1="130" y1="51" x2="128" y2="84" />
        <line x1="148" y1="58" x2="142" y2="86" />
        <line x1="72" y1="74" x2="86" y2="92" />
        <line x1="168" y1="74" x2="154" y2="92" />
      </g>
      {/* shine */}
      <path d="M74 70 C92 56 148 56 166 70" fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />

      {/* ===== Kalos case (closed round compact) ===== */}
      <g>
        <path d="M68 170 a52 20 0 0 0 104 0 v10 a52 20 0 0 1 -104 0 Z" fill="#7f9c15" />
        <ellipse cx="120" cy="170" rx="52" ry="20" fill="url(#kaCase)" />
        <ellipse cx="120" cy="170" rx="52" ry="20" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <text x="120" y="176" textAnchor="middle" fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="18" fill="var(--primary)">KA</text>
      </g>

      {/* sparkles */}
      <g fill="var(--primary)">
        <path d="M192 58 l3.2 7.4 7.4 3.2 -7.4 3.2 -3.2 7.4 -3.2 -7.4 -7.4 -3.2 7.4 -3.2 z" />
        <path d="M44 120 l2.2 5 5 2.2 -5 2.2 -2.2 5 -2.2 -5 -5 -2.2 5 -2.2 z" opacity="0.8" />
      </g>
    </svg>
  )
}
