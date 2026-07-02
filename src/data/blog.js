// Original Kalos blog content — written for SEO (no copied competitor content).
export const posts = [
  {
    slug: 'clear-aligners-vs-braces',
    title: 'Clear aligners vs braces: which is right for you?',
    category: 'Guides',
    readTime: '5 min read',
    excerpt:
      'Confused between clear aligners and metal braces? Here’s a simple, honest comparison to help you choose the best option for your smile.',
    body: [
      { h: 'The quick answer' },
      { p: 'Clear aligners are removable, virtually invisible, and let you eat whatever you like. Metal braces are fixed, more visible, and need regular clinic visits. For most mild to moderate cases, clear aligners like Kalos are a comfortable, convenient choice.' },
      { h: 'Comfort & lifestyle' },
      { p: 'Aligners have no metal wires or brackets to poke your cheeks. You remove them to eat, brush and floss — so your daily routine barely changes. Braces, on the other hand, come with food restrictions and can feel sharp.' },
      { h: 'Visibility' },
      { p: 'Kalos aligners are made from clear, medical-grade material that’s hard to notice. Braces are visible whenever you smile, which many adults and teens prefer to avoid.' },
      { h: 'Which should you pick?' },
      { p: 'If your case is mild to moderate and you value convenience and discretion, clear aligners are usually the better fit. The best way to know for sure is a free scan — our orthodontists will tell you honestly if aligners suit your case.' },
    ],
  },
  {
    slug: 'clear-aligners-cost-india',
    title: 'How much do clear aligners cost in India?',
    category: 'Pricing',
    readTime: '4 min read',
    excerpt:
      'A transparent look at what clear aligner treatment actually costs in India, what affects the price, and how EMIs make it affordable.',
    body: [
      { h: 'Typical price range' },
      { p: 'Clear aligner treatment in India generally ranges from about ₹25,000 for mild cases to ₹50,000+ for moderate ones. With Kalos, mild cases start at ₹25,000 and moderate cases are ₹30,000–₹50,000, depending on how much your teeth need to move.' },
      { h: 'What affects the cost?' },
      { p: 'The main factor is complexity — how much movement your teeth need and how long treatment takes. More aligners and a longer plan mean a higher price. Your exact cost is confirmed after a free 3D scan.' },
      { h: 'Is EMI available?' },
      { p: 'Yes. Kalos offers no-cost EMI options, so you can split your treatment into easy monthly payments starting from around ₹1,799/month, instead of paying everything upfront.' },
      { h: 'What’s included?' },
      { p: 'A good price should be all-inclusive: your scan, orthodontist-designed plan, all aligners, a carry case, removal tool and remote monitoring. With Kalos, there are no hidden fees.' },
    ],
  },
  {
    slug: 'how-to-care-for-aligners',
    title: 'How to care for your clear aligners (daily routine)',
    category: 'Care tips',
    readTime: '3 min read',
    excerpt:
      'Simple daily habits to keep your aligners clear, hygienic and working — so you get the best results on time.',
    body: [
      { h: 'Wear them 20–22 hours a day' },
      { p: 'Aligners only work when you wear them. Keep them on for 20–22 hours daily — remove them only to eat, drink anything other than water, and clean your teeth.' },
      { h: 'Clean them gently' },
      { p: 'Rinse your aligners every time you take them out, and brush them gently with a soft toothbrush and mild soap. Avoid hot water — it can warp the plastic.' },
      { h: 'Brush before re-wearing' },
      { p: 'Always brush and floss before putting aligners back in. Trapping food or sugar against your teeth can cause cavities and bad breath.' },
      { h: 'Store them safely' },
      { p: 'When not wearing them, keep aligners in their case — never wrapped in a tissue (that’s how they get thrown away by mistake!).' },
    ],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
