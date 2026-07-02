import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const cols = [
  {
    title: 'Treatments',
    links: [
      { label: 'Aligners for adults', to: '/aligners/adults' },
      { label: 'Aligners for teens', to: '/aligners/teens' },
      { label: 'Aligners for kids', to: '/aligners/kids' },
      { label: 'Pricing & EMI', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Kalos', to: '/about' },
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Our orthodontists', to: '/about' },
      { label: 'Check eligibility', to: '/check-eligibility' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQs', to: '/#faq' },
      { label: 'Aligner care', to: '/how-it-works' },
      { label: 'Book a free scan', to: '/check-eligibility' },
      { label: 'Contact us', to: '/check-eligibility' },
    ],
  },
]

const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad']

const socials = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/kalosaligners/',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61591582530900',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
  },
  {
    label: 'WhatsApp',
    box: 32,
    url: 'https://wa.me/918888507223',
    path: 'M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.1 14.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.1.9 2.9.97 3.9.82.6-.09 1.9-.77 2.2-1.52.27-.74.27-1.38.19-1.51z',
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* CTA band */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <h3>Ready for your new smile?</h3>
            <p>Book a free scan and get your personalised treatment plan.</p>
          </div>
          <Link to="/check-eligibility" className="btn btn-accent btn-lg">Check eligibility</Link>
        </div>
      </div>

      {/* Main */}
      <div className="container footer__main">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>
            Comfortable, virtually invisible clear aligners designed by expert
            orthodontists — for a smile you’ll love.
          </p>
          <ul className="footer__contact">
            <li><span>✉</span><a href="mailto:hello@kalosaligners.in">hello@kalosaligners.in</a></li>
            <li><span>🕘</span>Mon – Sat, 9:00am – 8:00pm</li>
          </ul>
          <div className="footer__social">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="footer__soc" aria-label={s.label}>
                <svg viewBox={`0 0 ${s.box || 24} ${s.box || 24}`} width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <nav key={c.title} className="footer__col" aria-label={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}

        <nav className="footer__col" aria-label="Top cities">
          <h4>Top cities</h4>
          <ul className="footer__cities">
            {cities.map((c) => (
              <li key={c}><Link to="/check-eligibility">{c}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Payment + trust strip */}
      <div className="container footer__pay">
        <div className="footer__pay-methods">
          <span className="footer__pay-label">We accept</span>
          <span className="paybadge paybadge--visa">VISA</span>
          <span className="paybadge paybadge--mc">
            <i /><i />
          </span>
          <span className="paybadge">UPI</span>
          <span className="paybadge">RuPay</span>
          <span className="paybadge">EMI</span>
        </div>
        <span className="footer__india">
          <span className="footer__india-flag"><i /><i /><i /></span>
          Made in India
        </span>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container footer__company">
          <strong>Kalos Dental Technologies Private Limited</strong> · CIN: U32509MR2026PTC476925<br />
          Registered office: C/O Samit Dnyaneshwar, Patilkumar Nagar, Sakri Road, Dhule, Maharashtra 424001, India
        </div>
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Kalos Dental Technologies Pvt. Ltd. All rights reserved.</span>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
