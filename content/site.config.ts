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
    hero: '/images/1.jpg',
    aboutPortrait: '/images/1.jpg',
    equine: '/images/5.jpg',
    vimeoId: '598294286',
  },
  testimonials: {
    logo: {
      src: '/images/LH_chiro.png',
      alt: 'LH Chiropractic logo',
      width: 72,
      height: 72,
    },
    slides: [
      {
        quote: '“Les quickly found the source of my lower-back pain and had me moving comfortably again.”',
        author: 'J.M., Aberdeen',
        bio: 'Patient supported through postural rehab for desk-related strain.',
      },
      {
        quote: '“Professional, thorough and reassuring from start to finish.”',
        author: 'S.R., Orkney',
        bio: 'Returning patient following neuro emotional technique sessions.',
      },
      {
        quote: '“Clear plan and great advice that helped me stay active between visits.”',
        author: 'K.T., Barbados',
        bio: 'Competitive swimmer receiving trauma and sports injury care.',
      },
      {
        quote: '“After just a few visits my neck pain had eased and my range of movement returned.”',
        author: 'H.L., Orkney',
        bio: 'Client focusing on mobility and pain resolution strategies.',
      },
      {
        quote: '“Les explained everything clearly and really put me at ease.”',
        author: 'C.N., Barbados',
        bio: 'Patient attending for holistic stress management support.',
      },
      {
        quote: '“My headaches have gone and I feel more balanced overall.”',
        author: 'E.R., Aberdeen',
        bio: 'Patient improving through applied kinesiology follow-ups.',
      },
    ],
  },
  locations: [
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
    {
      key: 'kirkwall',
      label: 'Kirkwall Clinic',
      address: 'Crowness Road, Hatston, Kirkwall, United Kingdom',
    },
  ],
  services: [
    {
      slug: 'chiropractic-care',
      title: 'Chiropractic Care (Human & Equine)',
      blurb: 'Human and equine chiropractic programmes supporting families, riders and horses across Barbados and the United Kingdom.',
    },
    {
      slug: 'applied-kinesiology',
      title: 'Applied Kinesiology (AK)',
      blurb: 'Applied kinesiology assessments guide clinical decisions across the structural, metabolic and emotional triad of health.',
    },
    {
      slug: 'neuro-emotional-technique',
      title: 'Neuro Emotional Technique (NET)',
      blurb: 'Neuro Emotional Technique interventions help patients address stress patterns that influence posture and pain.',
    },
    {
      slug: 'wellbeing-stress-management',
      title: 'Wellbeing & Stress Management',
      blurb: 'Practical stress management clinics provide grounding routines, mobility resets and breathwork strategies for ongoing wellbeing.',
    },
    {
      slug: 'trauma-sports-injuries',
      title: 'Trauma and Sports Injuries',
      blurb: 'Care plans address trauma and sports injuries for patients and athletes seeking structured recovery.',
    },
    {
      slug: 'pain-resolution-rehab',
      title: 'Pain Resolution and Injury Rehabilitation',
      blurb: 'Rehabilitation pathways focus on pain resolution, tissue healing and measured return to daily activity.',
    },
  ],
  badges: [
    { name: 'GCC Registered No. 00616' },
    { name: 'AECC University College Graduate' },
  ],
  socials: [
    {
      key: 'professional-network',
      title: 'Professional Network',
      links: [
        {
          key: 'linkedin-les-hall',
          label: 'LinkedIn – Les Hall',
          href: 'https://www.linkedin.com/in/les-hall-13722b152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          icon: 'linkedin',
        },
      ],
    },
    {
      key: 'aberdeen-community',
      title: 'Aberdeen Community Updates',
      links: [
        {
          key: 'facebook-aberdeen',
          label: 'Facebook – Aberdeen Clinic',
          href: 'https://www.facebook.com/share/1D5FmFXTJm/?mibextid=wwXIfr',
          icon: 'facebook',
        },
      ],
    },
    {
      key: 'barbados-community',
      title: 'Barbados Community Updates',
      links: [
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
      ],
    },
  ],
} as const
