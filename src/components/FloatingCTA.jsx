import { Link } from 'react-router-dom'

export default function FloatingCTA() {
  return (
    <>
      <a
        className="wa-float"
        href="https://wa.me/918888507223?text=Hi%20Kalos!%20I'd%20like%20to%20know%20more%20about%20clear%20aligners."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="#fff"
            d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.3-.4c-1-1.6-1.5-3.4-1.5-5.3C4.9 9.4 9.9 4.9 16 4.9S27.1 9.4 27.1 15 22.1 24.8 16 24.8zm6.1-7.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.6-.4z"
          />
        </svg>
      </a>

      <div className="sticky-cta">
        <div className="sticky-cta__info">
          <strong>From ₹1,799/mo*</strong>
          <small>Free scan &amp; consultation</small>
        </div>
        <Link to="/check-eligibility" className="btn btn-primary">Book a scan</Link>
      </div>
    </>
  )
}
