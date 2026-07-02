// Original starter legal content for Kalos Dental Technologies Private Limited.
// NOTE: Have a legal professional review before publishing.
const COMPANY = 'Kalos Dental Technologies Private Limited'
const UPDATED = '1 July 2026'
const CONTACT = 'hello@kalosaligners.in'

export const legal = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: UPDATED,
    intro: `This Privacy Policy explains how ${COMPANY} (“Kalos”, “we”, “us”) collects, uses and protects your information when you use our website and clear aligner services. By using our services, you agree to this policy.`,
    sections: [
      {
        h: 'Information we collect',
        p: [
          'Contact details you share — such as your name, mobile number, email and city — when you book a scan or contact us.',
          'Health and dental information relevant to your treatment, including details you provide and records created during your assessment.',
          'Photos or selfies you choose to upload for the smile preview. In the on-site preview, your photo is processed in your browser and is not uploaded to our servers unless you choose to share it with us (for example, on WhatsApp).',
          'Payment information needed to process your treatment, handled through secure third-party payment providers.',
          'Basic usage data (like pages visited) to help us improve the website.',
        ],
      },
      {
        h: 'How we use your information',
        p: [
          'To provide your consultation, treatment plan and aligner services.',
          'To contact you about your enquiry, bookings, treatment and support.',
          'To process payments and EMIs.',
          'To improve our products, website and customer experience.',
          'To meet legal and regulatory obligations.',
        ],
      },
      {
        h: 'Sharing your information',
        p: [
          'We share your information only with the orthodontists and clinical team involved in your care, and with trusted service providers (such as payment, logistics and communication partners) who help us deliver our services.',
          'We do not sell your personal information. We may disclose information where required by law.',
        ],
      },
      {
        h: 'Data security',
        p: [
          'We use reasonable technical and organisational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You may request access to, correction of, or deletion of your personal information, and you may withdraw consent, subject to applicable law (including India’s Digital Personal Data Protection Act, 2023).',
          `To exercise your rights, contact us at ${CONTACT}.`,
        ],
      },
      {
        h: 'Cookies',
        p: [
          'Our website may use cookies or similar technologies to remember your preferences and understand how the site is used. You can control cookies through your browser settings.',
        ],
      },
      {
        h: 'Contact us',
        p: [`For any privacy questions, email us at ${CONTACT}.`],
      },
    ],
  },

  'terms-of-service': {
    title: 'Terms of Service',
    updated: UPDATED,
    intro: `These Terms govern your use of the website and services of ${COMPANY} (“Kalos”). By using our website or services, you agree to these Terms.`,
    sections: [
      {
        h: 'Our services',
        p: [
          'Kalos provides clear aligner treatment and related services, including scans, orthodontist-designed treatment plans and aligners.',
          'Our website and smile preview are informational tools only and do not constitute medical advice or a diagnosis. They are not a substitute for an in-person clinical assessment.',
        ],
      },
      {
        h: 'Eligibility & medical disclaimer',
        p: [
          'Suitability for clear aligner treatment is determined by a qualified orthodontist after an assessment. Not everyone is a candidate for aligners.',
          'Treatment outcomes, timelines and aligner counts are estimates and vary from person to person. Results depend on following your prescribed treatment plan.',
        ],
      },
      {
        h: 'Bookings, pricing & payments',
        p: [
          'Prices shown on the website are indicative starting prices. Your final price is confirmed after your scan and assessment.',
          'Payments and any EMI arrangements are subject to the terms shared with you at the time of purchase and those of our payment/financing partners.',
        ],
      },
      {
        h: 'Your responsibilities',
        p: [
          'You agree to provide accurate information and to follow your orthodontist’s instructions, including wearing your aligners as prescribed.',
          'You are responsible for attending recommended check-ins and informing us of any concerns during treatment.',
        ],
      },
      {
        h: 'Intellectual property',
        p: [
          `All content on this website — including text, graphics, logos and design — is owned by or licensed to ${COMPANY} and may not be copied or used without permission.`,
        ],
      },
      {
        h: 'Limitation of liability',
        p: [
          'To the extent permitted by law, Kalos is not liable for indirect or consequential losses arising from use of the website. Nothing in these Terms limits liability that cannot be excluded under applicable law.',
        ],
      },
      {
        h: 'Governing law',
        p: [
          'These Terms are governed by the laws of India, and disputes are subject to the jurisdiction of the appropriate courts in India.',
        ],
      },
      {
        h: 'Changes & contact',
        p: [
          'We may update these Terms from time to time; the latest version will always be available on this page.',
          `Questions? Email us at ${CONTACT}.`,
        ],
      },
    ],
  },

  'refund-policy': {
    title: 'Refund Policy',
    updated: UPDATED,
    intro: `This Refund Policy explains how refunds work for services provided by ${COMPANY} (“Kalos”). Because aligners are custom-made for each person, refund eligibility depends on the stage of your treatment.`,
    sections: [
      {
        h: 'Free scan & consultation',
        p: ['Your initial 3D scan and consultation are free, so no payment or refund is involved at this stage.'],
      },
      {
        h: 'Before your aligners are manufactured',
        p: [
          'If you have paid but your custom aligners have not yet gone into production, you may request a refund of amounts paid, less any consultation, scan or planning costs already incurred, as communicated to you.',
        ],
      },
      {
        h: 'After manufacturing has started',
        p: [
          'Once your custom aligners are in production or have been delivered, the amount for the manufactured aligners is generally non-refundable, as they are made specifically for you.',
        ],
      },
      {
        h: 'Results guarantee',
        p: [
          'If you follow your prescribed treatment plan and your smile goal is not met, our orthodontists will review your case and provide additional aligners as needed, subject to the terms of the guarantee shared with you.',
        ],
      },
      {
        h: 'How to request a refund',
        p: [
          `To request a refund, email us at ${CONTACT} with your name, registered mobile number and details of your request. Our team will guide you through the process.`,
          'Approved refunds are processed to your original payment method within a reasonable time, typically 7–14 business days.',
        ],
      },
      {
        h: 'Contact us',
        p: [`For any billing or refund questions, email ${CONTACT}.`],
      },
    ],
  },
}

export const getLegal = (slug) => legal[slug]
