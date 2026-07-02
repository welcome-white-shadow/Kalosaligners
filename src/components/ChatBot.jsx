import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WA = 'https://wa.me/918888507223?text=' +
  encodeURIComponent('Hi Kalos! I have a question about clear aligners.')

// Free, rule-based knowledge base — answers common questions instantly,
// with no paid AI API. Anything it can't answer is handed to WhatsApp.
const KB = [
  { q: 'What are clear aligners?', keys: ['what are', 'aligner', 'clear', 'kya hai', 'kaise kaam'], a: 'Kalos clear aligners are custom-made, transparent trays that gently move your teeth into place — a comfortable, virtually invisible alternative to metal braces.' },
  { q: 'How much does it cost?', keys: ['cost', 'price', 'kitna', 'paisa', 'charge', 'fee', 'rupee', '₹', 'expensive'], a: 'Mild cases start at ₹25,000 and moderate cases are ₹30,000–₹50,000, with no-cost EMI from ₹1,799/month. Your exact price is confirmed after a free 3D scan.' },
  { q: 'How long does it take?', keys: ['how long', 'time', 'duration', 'month', 'kitne din', 'kitna time', 'days'], a: 'Most treatments take 4–12 months depending on your case. You’ll get a personalised timeline after your scan.' },
  { q: 'Is it painful?', keys: ['pain', 'hurt', 'dard', 'painful', 'safe'], a: 'You may feel mild pressure for a day or two when you switch to a new set — that’s normal and means it’s working. There are no metal wires to poke or irritate.' },
  { q: 'Are they invisible?', keys: ['invisible', 'visible', 'dikh', 'notice', 'look'], a: 'Yes — they’re clear, medical-grade trays that are very hard to notice. Most people won’t know you’re wearing them.' },
  { q: 'Do I need a clinic visit?', keys: ['clinic', 'visit', 'at home', 'home', 'jana', 'ghar'], a: 'You can choose a free at-home scan or an in-clinic scan. After that, most of your treatment is monitored remotely.' },
  { q: 'Can I eat with them?', keys: ['eat', 'food', 'drink', 'khana', 'khaa'], a: 'Simply remove your aligners before eating or drinking (anything except water), then pop them back in. No food restrictions!' },
  { q: 'Is EMI available?', keys: ['emi', 'instal', 'monthly', 'loan', 'kist'], a: 'Yes! No-cost EMI options are available, starting from around ₹1,799/month.' },
  { q: 'How do I book?', keys: ['book', 'start', 'appointment', 'scan', 'begin', 'shuru', 'kaise book'], a: 'Tap “Check eligibility” below to book your free 3D scan — it takes 2 minutes and our orthodontists create your personalised plan.', cta: true },
]

const GREET = 'Hi! 👋 I’m the Kalos smile assistant. Ask me anything about clear aligners, or tap a quick question below.'

function findAnswer(text) {
  const t = text.toLowerCase()
  let best = null, score = 0
  for (const item of KB) {
    const s = item.keys.reduce((n, k) => (t.includes(k) ? n + 1 : n), 0)
    if (s > score) { score = s; best = item }
  }
  return score > 0 ? best : null
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ from: 'bot', text: GREET }])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  // Always keep the latest message in view — real chat feel.
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [msgs, typing, open])

  const respond = (userText) => {
    setMsgs((m) => [...m, { from: 'user', text: userText }])
    setTyping(true)
    const hit = findAnswer(userText)
    window.setTimeout(() => {
      setTyping(false)
      setMsgs((m) => [
        ...m,
        hit
          ? { from: 'bot', text: hit.a, cta: hit.cta }
          : { from: 'bot', text: 'Good question! 🤔 Our team can answer that directly on WhatsApp — tap below and we’ll reply right away.', wa: true },
      ])
    }, 900)
  }

  const send = (e) => {
    e.preventDefault()
    const t = input.trim()
    if (!t || typing) return
    setInput('')
    respond(t)
  }

  return (
    <>
      <button
        className={`chat-fab ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with us'}
      >
        {open ? '✕' : (
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2Z" />
            <circle cx="9" cy="10.5" r="1.2" fill="#fff" />
            <circle cx="13" cy="10.5" r="1.2" fill="#fff" />
            <circle cx="17" cy="10.5" r="1.2" fill="#fff" />
          </svg>
        )}
      </button>

      {open && (
        <div className="chat" role="dialog" aria-label="Kalos smile assistant">
          <div className="chat__head">
            <span className="chat__ava">KA</span>
            <div>
              <strong>Kalos Assistant</strong>
              <small><span className="chat__dot" /> Online now</small>
            </div>
            <button className="chat__close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="chat__body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat__row chat__row--${m.from}`}>
                {m.from === 'bot' && <span className="chat__mini">KA</span>}
                <div className={`chat__bubble chat__bubble--${m.from}`}>
                  <span>{m.text}</span>
                  {m.cta && (
                    <Link to="/check-eligibility" className="chat__inline-btn" onClick={() => setOpen(false)}>Check eligibility →</Link>
                  )}
                  {m.wa && (
                    <a className="chat__inline-btn chat__inline-btn--wa" href={WA} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat__row chat__row--bot">
                <span className="chat__mini">KA</span>
                <div className="chat__bubble chat__bubble--bot chat__typing">
                  <i></i><i></i><i></i>
                </div>
              </div>
            )}
          </div>

          <div className="chat__quick">
            {KB.map((k) => (
              <button key={k.q} className="chat__chip" onClick={() => !typing && respond(k.q)}>{k.q}</button>
            ))}
          </div>

          <form className="chat__input" onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Type your message"
            />
            <button type="submit" aria-label="Send">➤</button>
          </form>
        </div>
      )}
    </>
  )
}
