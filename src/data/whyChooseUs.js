import { ShieldCheck, Clock, Factory, PhoneCall } from '@lucide/vue'

export const whyChooseUsContent = {
  eyebrow: 'Why choose us',
  headingBefore: 'Built for contractors who refuse to ',
  headingHighlight: 'compromise on quality',
  headingAfter: '',
  description:
    'From material sourcing to final delivery, every product we fabricate is held to the same standard — strong, reliable, and ready for the job site.',
  image: {
    src: '/contact_us.png',
    alt: 'ZMR Fabrications welder at work'
  }
}

export const reasons = [
  {
    icon: Factory,
    title: 'High-grade materials',
    description: 'Every product is manufactured from high-grade, corrosion-resistant steel built to last.'
  },
  {
    icon: ShieldCheck,
    title: 'Built to precise standards',
    description: 'Strength, durability, and safety are engineered into every component we fabricate.'
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    description: 'We commit to reliable delivery schedules so your project timelines stay on track.'
  },
  {
    icon: PhoneCall,
    title: '24/7 customer support',
    description: "We're available around the clock — call us anytime with questions or orders."
  }
]
