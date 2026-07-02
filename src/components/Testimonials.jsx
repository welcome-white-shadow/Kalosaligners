const reviews = [
  { text: 'I was so self-conscious about my smile. Six months with Kalos and I can’t stop smiling now. Nobody even noticed I was wearing aligners!', name: 'Ananya S.', city: 'Mumbai' },
  { text: 'Super convenient — no clinic queues, and the team checked in on my progress regularly. Worth every rupee.', name: 'Karan M.', city: 'Bengaluru' },
  { text: 'The smile preview convinced me and the result matched it almost exactly. Highly recommend Kalos.', name: 'Divya R.', city: 'Delhi' },
  { text: 'Honestly better than I expected. The aligners were comfortable and the EMI made it easy on my pocket.', name: 'Rohit K.', city: 'Pune' },
  { text: 'My front teeth gap is completely gone. The doctors were patient and answered all my doubts on WhatsApp.', name: 'Sneha P.', city: 'Hyderabad' },
  { text: 'Loved that I could eat whatever I wanted. Just removed them, ate, brushed and popped them back in.', name: 'Aditya N.', city: 'Chennai' },
  { text: 'Booking was smooth, scan was quick, and I got my plan the same week. Great experience overall.', name: 'Meera J.', city: 'Ahmedabad' },
  { text: 'People keep asking what I did to my teeth. Best decision — thank you Kalos team!', name: 'Farhan A.', city: 'Kolkata' },
  { text: 'Very professional and transparent about pricing. No hidden charges at all.', name: 'Pooja V.', city: 'Jaipur' },
]

function ReviewCard({ text, name, city }) {
  return (
    <article className="review-card">
      <div className="review-card__head">
        <span className="review-card__stars">★★★★★</span>
        <span className="review-card__verified">✓ Verified</span>
      </div>
      <p className="review-card__text">“{text}”</p>
      <div className="review-card__author">
        <span className="review-card__avatar">{name[0]}</span>
        <div>
          <strong>{name}</strong>
          <small>{city}</small>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const loop = [...reviews, ...reviews] // duplicated for a seamless loop
  return (
    <section className="reviews bg-alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Loved by our customers</span>
          <h2>Real reviews from real smiles</h2>
          <p>Genuine experiences from people who transformed their smiles with Kalos.</p>
        </div>
      </div>

      <div className="reviews__marquee" aria-label="Customer reviews">
        <div className="reviews__track">
          {loop.map((r, i) => <ReviewCard key={i} {...r} />)}
        </div>
      </div>
    </section>
  )
}
