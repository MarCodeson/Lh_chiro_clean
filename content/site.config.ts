export const site = {
  brand: {
    name: 'LH Chiropractic',
    gold: '#C9A646',
  },
  contacts: {
    email: 'drleshall@aol.com',
    phoneUK: '+44 07715 168864',
    phoneBB: '+1 (246) 254-8864',
    whatsapp: '+44 7715 168864',
  },
 media: {
  hero: '/images/hero.png',
  aboutPortrait: '/images/about.png',
  equine: '/images/horse-chiro.png',
  vimeoId: '598294286',
},

  testimonials: {
  logo: {
    src: '/images/LH_chiro.png',
    alt: 'LH Chiropractic logo',
    width: 72,
    height: 72,
  },
  imagesOnly: true,
slides: [
  { img: '/images/testimonials/julian.png',  alt: 'Patient testimonial — Julian' },  // 1
  { img: '/images/testimonials/zoe.png',     alt: 'Patient testimonial — Zoe' },     // 2
  { img: '/images/testimonials/colin.png',   alt: 'Patient testimonial — Colin' },   // 3
  { img: '/images/testimonials/alan.png',    alt: 'Patient testimonial — Alan' },    // 4
  { img: '/images/testimonials/vikki.png',   alt: 'Patient testimonial — Vikki' },   // 5
  { img: '/images/testimonials/scott.png',   alt: 'Patient testimonial — Scott' },   // 6
  { img: '/images/testimonials/farah.png',   alt: 'Patient testimonial — Farah' },   // 7
  { img: '/images/testimonials/william.png', alt: 'Patient testimonial — William' }, // 8
]
},

  locations: [
    {
      key: 'kirkwall',
      label: 'Kirkwall Clinic',
      address: 'Crowness Road, Hatston, Kirkwall, United Kingdom',
    },
    {
      key: 'aberdeen',
      label: 'Aberdeen Clinic',
      address: 'Oldfold Drive, Milltimber, Aberdeen, United Kingdom',
    },
    {
      key: 'barbados',
      label: 'Barbados Clinic',
      address: 'Poui Avenue, Holetown, Barbados',
    },
  ],
 services: [
  {
    slug: 'chiropractic-care',
    title: 'Chiropractic Care (Human & Equine)',
    blurb: 'Human and equine chiropractic programmes supporting families, riders and horses across Barbados and the United Kingdom.',
    image: '/images/horse-chiro.png',
  },
  {
    slug: 'applied-kinesiology',
    title: 'Applied Kinesiology (AK)',
    blurb: 'Applied kinesiology assessments guide clinical decisions across the structural, metabolic and emotional triad of health.',
    image: '/images/forearm-pain.jpg',
  },
  {
    slug: 'neuro-emotional-technique',
    title: 'Neuro Emotional Technique (NET)',
    blurb: 'Neuro Emotional Technique interventions help patients address stress patterns that influence posture and pain.',
    image: '/images/relaxation.jpg',
  },
  {
    slug: 'wellbeing-stress-management',
    title: 'Wellbeing & Stress Management',
    blurb: 'Practical stress management clinics provide grounding routines, mobility resets and breathwork strategies for ongoing wellbeing.',
    image: '/images/feet.jpg',
  },
  {
    slug: 'trauma-sports-injuries',
    title: 'Trauma and Sports Injuries',
    blurb: 'Care plans address trauma and sports injuries for patients and athletes seeking structured recovery.',
    image: '/images/athlete.jpg',
  },
  {
    slug: 'pain-resolution-rehab',
    title: 'Pain Resolution and Injury Rehabilitation',
    blurb: 'Rehabilitation pathways focus on pain resolution, tissue healing and measured return to daily activity.',
    image: '/images/neck-pain.jpg',
  },
],

  badges: [
    { name: 'GCC Registered No. 00616' },
    { name: 'AECC University College Graduate' },
  ],
  socials: [
    {
      key: 'facebook-kirkwall',
      label: 'Facebook – Kirkwall Clinic',
      href: 'https://www.facebook.com/share/19gzficnPH/?mibextid=wwXIfr',
      icon: 'facebook',
    },
    {
      key: 'facebook-aberdeen',
      label: 'Facebook – Aberdeen Clinic',
      href: 'https://www.facebook.com/share/1D5FmFXTJm/?mibextid=wwXIfr',
      icon: 'facebook',
    },
    {
      key: 'facebook-barbados',
      label: 'Facebook – Barbados Clinic',
      href: 'https://www.facebook.com/share/1G3v5cktkn/?mibextid=wwXIfr',
      icon: 'facebook',
    },
    {
      key: 'instagram-barbados',
      label: 'Instagram – Barbados',
      href: 'https://www.instagram.com/lh_chiropractor_barbados?igsh=ZjZkNHIwdDNlZzV1&utm_source=qr',
      icon: 'instagram',
    },
    {
      key: 'linkedin-les-hall',
      label: 'LinkedIn – Les Hall',
      href: 'https://www.linkedin.com/in/les-hall-13722b152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: 'linkedin',
    },
  ],
} as const
