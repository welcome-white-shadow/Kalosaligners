import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Hero image: drop your own at public/images/hero.(jpg|png|webp).
// Falls back to model.jpg until you add one.
const HERO_IMGS = ['/images/hero.jpg', '/images/hero.png', '/images/hero.webp', '/images/model.jpg']

export default function HeroLead() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ first: '', last: '', mobile: '', wa: true, tnc: true })
  const [errors, setErrors] = useState({})
  const [heroI, setHeroI] = useState(0)

  const update = (key) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: val }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!form.first.trim()) er.first = 'Please enter your first name'
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) er.mobile = 'Enter a valid 10-digit mobile number'
    if (!form.tnc) er.tnc = 'Please accept the Terms & Privacy Policy'
    setErrors(er)
    if (Object.keys(er).length === 0) {
      // Continue into the eligibility wizard with contact pre-filled.
      navigate('/check-eligibility', { state: { first: form.first, last: form.last, mobile: form.mobile } })
    }
  }

  return (
    <section className="lead" id="top">
      <div className="container lead__inner">
        {/* Left — pitch + form */}
        <div className="lead__left">
          <h1 className="lead__title">
            Invisible aligners.<br />
            A confident smile in <span>4–8 months.</span>
          </h1>
          <p className="lead__sub">Custom clear aligners starting at just ₹1,799/month*</p>

          <form className="lead__form" onSubmit={submit} noValidate>
              <div className="lead__row">
                <div className="lead__field">
                  <input
                    type="text"
                    placeholder="First name*"
                    value={form.first}
                    onChange={update('first')}
                    aria-label="First name"
                    className={errors.first ? 'is-error' : ''}
                  />
                  {errors.first && <span className="lead__err">{errors.first}</span>}
                </div>
                <div className="lead__field">
                  <input
                    type="text"
                    placeholder="Last name"
                    value={form.last}
                    onChange={update('last')}
                    aria-label="Last name"
                  />
                </div>
              </div>

              <div className="lead__field">
                <div className="lead__mobile">
                  <span className="lead__cc">+91</span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Mobile number*"
                    value={form.mobile}
                    onChange={update('mobile')}
                    aria-label="Mobile number"
                    className={errors.mobile ? 'is-error' : ''}
                  />
                </div>
                {errors.mobile && <span className="lead__err">{errors.mobile}</span>}
              </div>

              <label className="lead__check">
                <input type="checkbox" checked={form.wa} onChange={update('wa')} />
                <span>I agree to receive updates on WhatsApp</span>
              </label>
              <label className="lead__check">
                <input type="checkbox" checked={form.tnc} onChange={update('tnc')} />
                <span>I accept the <a href="#contact">Terms</a> &amp; <a href="#contact">Privacy Policy</a></span>
              </label>
              {errors.tnc && <span className="lead__err">{errors.tnc}</span>}

              <button type="submit" className="btn btn-primary btn-lg lead__submit">
                Book a Free Scan
              </button>
            </form>
        </div>

        {/* Right — model image with offer badges */}
        <div className="lead__right">
          <div className="hero-model">
            <img
              src={HERO_IMGS[heroI]}
              alt="A happy, confident smile with Kalos aligners"
              onError={() => setHeroI((i) => Math.min(i + 1, HERO_IMGS.length - 1))}
            />
            <div className="hero-model__offer">
              <span className="hero-model__offer-flat">Flat ₹10,000 OFF</span>
              <span className="hero-model__offer-sub">Launch offer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
