const SITE = 'https://kalosaligners.com'
const TEXT = 'Kalos Aligners — invisible clear teeth aligners by expert orthodontists. Mild cases from ₹25,000 with no-cost EMI. Book a free scan!'
const INSTAGRAM = 'https://www.instagram.com/kalosaligners/'
const FACEBOOK_PAGE = 'https://www.facebook.com/profile.php?id=61591582530900'

const waShare = `https://wa.me/?text=${encodeURIComponent(TEXT + ' ' + SITE)}`
const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE)}`

const ICON = {
  whatsapp: 'M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.1 14.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2 2.1.9 2.9 1 3.9.8.6-.09 1.9-.77 2.2-1.52.27-.74.27-1.38.19-1.51z',
  facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
  instagram: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z',
}

function Ico({ name, box = 24 }) {
  return (
    <svg viewBox={`0 0 ${name === 'whatsapp' ? 32 : 24} ${name === 'whatsapp' ? 32 : 24}`} width="20" height="20" aria-hidden="true">
      <path fill="currentColor" d={ICON[name]} />
    </svg>
  )
}

export default function ShareBrand() {
  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'Kalos Aligners', text: TEXT, url: SITE }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(SITE)
      alert('Link copied! Paste it anywhere to share.')
    }
  }
  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SITE)
      alert('Link copied!')
    }
  }

  return (
    <section className="share" id="share">
      <div className="container share__inner">
        <div className="share__copy">
          <span className="eyebrow">Share &amp; connect</span>
          <h2>Share Kalos with friends &amp; family</h2>
          <p>Love your smile journey? Share our brand, pricing and catalogue — or connect with us on social media.</p>
        </div>

        <div className="share__actions">
          <a className="sharebtn sharebtn--wa" href={waShare} target="_blank" rel="noopener noreferrer">
            <Ico name="whatsapp" /> Share on WhatsApp
          </a>
          <a className="sharebtn sharebtn--fb" href={fbShare} target="_blank" rel="noopener noreferrer">
            <Ico name="facebook" /> Share on Facebook
          </a>
          <a className="sharebtn sharebtn--ig" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Ico name="instagram" /> Follow on Instagram
          </a>
          <button className="sharebtn sharebtn--more" onClick={nativeShare}>
            🔗 Share more…
          </button>
        </div>

        <div className="share__extra">
          <a className="share__download" href="/kalos-catalogue.pdf" target="_blank" rel="noopener noreferrer">📄 Download brand catalogue</a>
          <button className="share__copy" onClick={copyLink}>Copy website link</button>
        </div>
      </div>
    </section>
  )
}
