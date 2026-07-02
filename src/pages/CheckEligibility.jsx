import { useState } from 'react'
import { Link, useSearchParams, useLocation } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

const CONCERNS = ['Crowding', 'Gaps', 'Spacing', 'Bite issues', 'Not sure yet']
const AGES = ['Adult', 'Teen', 'Kid']
const SCAN = [
  { key: 'home', title: 'At-home scan', desc: 'Our expert visits you with a 3D scanner.' },
  { key: 'clinic', title: 'In-clinic scan', desc: 'Visit a nearby Kalos partner clinic.' },
]
const SLOTS = ['Morning (9am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–8pm)']

const STEPS = ['Your goal', 'Contact', 'Your scan', 'Done']

const WHATSAPP = '918888507223'

function buildWaLink(d) {
  const scanLabel = d.scan === 'clinic' ? 'In-clinic scan' : d.scan === 'home' ? 'At-home scan' : '—'
  const lines = [
    '🦷 *New Smile Enquiry — Kalos Aligners*',
    '',
    '👤 *Name:* ' + [d.first, d.last].filter(Boolean).join(' '),
    '📱 *Mobile:* +91 ' + d.mobile,
    '📧 *Email:* ' + (d.email || '—'),
    '📍 *City:* ' + d.city,
    '',
    '🔎 *Concern:* ' + (d.concern || '—'),
    '👥 *Treatment for:* ' + (d.age || '—'),
    '🏠 *Scan preference:* ' + scanLabel,
    '🕘 *Preferred time:* ' + (d.slot || '—'),
    '',
    'Please share my personalised aligner plan. 🙏',
    '— sent from kalosaligners.com',
  ]
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function CheckEligibility() {
  const [params] = useSearchParams()
  const location = useLocation()
  const presetAge = (params.get('for') || '').toLowerCase()
  const initialAge = presetAge === 'teens' ? 'Teen' : presetAge === 'kids' ? 'Kid' : presetAge === 'adults' ? 'Adult' : ''
  const prefill = location.state || {}

  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [waLink, setWaLink] = useState('')
  const [data, setData] = useState({
    concern: '',
    age: initialAge,
    first: prefill.first || '', last: prefill.last || '', mobile: prefill.mobile || '', email: '', city: '',
    scan: '', slot: '',
  })

  const set = (key, val) => {
    setData((d) => ({ ...d, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }
  const onInput = (key) => (e) => set(key, e.target.value)

  const validate = () => {
    const e = {}
    if (step === 0) {
      if (!data.concern) e.concern = 'Please select what you’d like to fix'
      if (!data.age) e.age = 'Please select an age group'
    }
    if (step === 1) {
      if (!data.first.trim()) e.first = 'Please enter your first name'
      if (!/^[6-9]\d{9}$/.test(data.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number'
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email.trim())) e.email = 'Enter a valid email'
      if (!data.city.trim()) e.city = 'Please enter your city'
    }
    if (step === 2) {
      if (!data.scan) e.scan = 'Please choose a scan option'
      if (!data.slot) e.slot = 'Please choose a preferred time'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (!validate()) return
    if (step === 2) {
      // Send the lead to the business WhatsApp as a clean, formatted message.
      const link = buildWaLink(data)
      setWaLink(link)
      window.open(link, '_blank', 'noopener')
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const progress = ((step + (step === STEPS.length - 1 ? 1 : 0)) / STEPS.length) * 100

  return (
    <div className="wiz">
      <header className="wiz__bar">
        <div className="container wiz__bar-inner">
          <Logo variant="dark" />
          <Link to="/" className="wiz__close" aria-label="Back to home">✕</Link>
        </div>
        <div className="wiz__progress"><span style={{ width: `${progress}%` }} /></div>
      </header>

      <div className="wiz__body container">
        {step < STEPS.length - 1 && (
          <div className="wiz__steps">
            {STEPS.slice(0, 3).map((s, i) => (
              <span key={s} className={`wiz__chip ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}>
                {i < step ? '✓' : i + 1} {s}
              </span>
            ))}
          </div>
        )}

        {/* STEP 1 — goal */}
        {step === 0 && (
          <section className="wiz__card">
            <h1 className="wiz__title">What would you like to improve?</h1>
            <p className="wiz__sub">Pick the option closest to your smile goal.</p>
            <div className="wiz__chips">
              {CONCERNS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`wiz__opt ${data.concern === c ? 'is-selected' : ''}`}
                  onClick={() => set('concern', c)}
                >
                  {c}
                </button>
              ))}
            </div>
            {errors.concern && <span className="wiz__err">{errors.concern}</span>}

            <h2 className="wiz__subhead">Who is the treatment for?</h2>
            <div className="wiz__chips">
              {AGES.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`wiz__opt ${data.age === a ? 'is-selected' : ''}`}
                  onClick={() => set('age', a)}
                >
                  {a}
                </button>
              ))}
            </div>
            {errors.age && <span className="wiz__err">{errors.age}</span>}
          </section>
        )}

        {/* STEP 2 — contact */}
        {step === 1 && (
          <section className="wiz__card">
            <h1 className="wiz__title">Where can our expert reach you?</h1>
            <p className="wiz__sub">We’ll call to confirm your free scan — no spam, promise.</p>
            <div className="wiz__form">
              <div className="wiz__row">
                <Field label="First name*" error={errors.first}>
                  <input value={data.first} onChange={onInput('first')} placeholder="First name" className={errors.first ? 'is-error' : ''} />
                </Field>
                <Field label="Last name">
                  <input value={data.last} onChange={onInput('last')} placeholder="Last name" />
                </Field>
              </div>
              <Field label="Mobile number*" error={errors.mobile}>
                <div className="wiz__mobile">
                  <span className="wiz__cc">+91</span>
                  <input
                    type="tel" inputMode="numeric" maxLength={10}
                    value={data.mobile} onChange={onInput('mobile')}
                    placeholder="10-digit mobile" className={errors.mobile ? 'is-error' : ''}
                  />
                </div>
              </Field>
              <Field label="Email (optional)" error={errors.email}>
                <input type="email" value={data.email} onChange={onInput('email')} placeholder="you@email.com" className={errors.email ? 'is-error' : ''} />
              </Field>
              <Field label="City*" error={errors.city}>
                <input value={data.city} onChange={onInput('city')} placeholder="Your city" className={errors.city ? 'is-error' : ''} />
              </Field>
            </div>
          </section>
        )}

        {/* STEP 3 — scan preference */}
        {step === 2 && (
          <section className="wiz__card">
            <h1 className="wiz__title">How would you like your scan?</h1>
            <p className="wiz__sub">Choose what’s most convenient for you.</p>
            <div className="wiz__scan">
              {SCAN.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={`wiz__scanopt ${data.scan === s.key ? 'is-selected' : ''}`}
                  onClick={() => set('scan', s.key)}
                >
                  <strong>{s.title}</strong>
                  <small>{s.desc}</small>
                </button>
              ))}
            </div>
            {errors.scan && <span className="wiz__err">{errors.scan}</span>}

            <h2 className="wiz__subhead">Preferred time</h2>
            <div className="wiz__chips">
              {SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`wiz__opt ${data.slot === s ? 'is-selected' : ''}`}
                  onClick={() => set('slot', s)}
                >
                  {s}
                </button>
              ))}
            </div>
            {errors.slot && <span className="wiz__err">{errors.slot}</span>}
          </section>
        )}

        {/* STEP 4 — done */}
        {step === 3 && (
          <section className="wiz__card wiz__done">
            <div className="wiz__tick">✓</div>
            <h1 className="wiz__title">Almost done, {data.first || 'there'}!</h1>
            <p className="wiz__sub">
              We’ve opened WhatsApp with your details — just tap <strong>Send</strong> and our
              smile expert will confirm your free {data.scan === 'clinic' ? 'in-clinic' : 'at-home'} scan.
            </p>
            {waLink && (
              <a className="btn btn-primary btn-lg wiz__wa" href={waLink} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.1 14.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.1.9 2.9 1 3.9.8.6-.09 1.9-.77 2.2-1.52.27-.74.27-1.38.19-1.51z"/></svg>
                Send on WhatsApp
              </a>
            )}
            <Link to="/" className="wiz__done-home">Back to home</Link>
          </section>
        )}

        {/* Nav buttons */}
        {step < STEPS.length - 1 && (
          <div className="wiz__nav">
            {step > 0
              ? <button type="button" className="btn btn-outline" onClick={back}>← Back</button>
              : <span />}
            <button type="button" className="btn btn-primary btn-lg" onClick={next}>
              {step === 2 ? 'Submit & book' : 'Continue →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="wiz__field">
      <span className="wiz__label">{label}</span>
      {children}
      {error && <span className="wiz__err">{error}</span>}
    </label>
  )
}
