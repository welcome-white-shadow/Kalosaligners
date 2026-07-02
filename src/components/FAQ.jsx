import { useState } from 'react'

const faqs = [
  {
    q: 'What are Kalos clear aligners?',
    a: 'Kalos aligners are custom-made, transparent trays that gently move your teeth into place over time. They are removable, comfortable and virtually invisible — a modern alternative to metal braces.',
  },
  {
    q: 'How long does treatment take?',
    a: 'Most treatments take between 4 and 12 months depending on your case. After your scan, our orthodontists give you a personalised timeline.',
  },
  {
    q: 'Are the aligners painful?',
    a: 'You may feel mild pressure for a day or two when you switch to a new set — that’s a sign they’re working. There are no metal wires or brackets to poke or irritate.',
  },
  {
    q: 'How much do Kalos aligners cost?',
    a: 'Complete treatment starts at ₹49,999, with no-cost EMI options from ₹1,799/month. Your final price depends on the complexity of your case.',
  },
  {
    q: 'Do I need to visit a clinic?',
    a: 'You can choose a free at-home scan or visit one of our partner clinics. After that, most of your treatment is monitored remotely.',
  },
  {
    q: 'Can I eat and drink with aligners on?',
    a: 'Simply remove your aligners before eating or drinking anything other than water, then pop them back in. That means no food restrictions at all.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <div className="section-head">
          <span className="eyebrow">FAQs</span>
          <h2>Questions? We’ve got answers</h2>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-item__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-item__a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
