export type Project = {
  id: string
  slug: string
  city: string
  region: string
  waterBody: string
  type: string
  summary: string
  featured?: boolean
  public: boolean
  x: number
  y: number
  date?: string
  duration?: string
  partner?: string
  metrics?: { label: string; value: string }[]
  challenge?: string
  intervention?: string
  operations?: string
  results?: string
  next?: string
}

export const projects: Project[] = [
  {
    id: 'jodhpur',
    slug: 'gulab-sagar-fateh-sagar-jodhpur',
    city: 'Jodhpur',
    region: 'Rajasthan',
    waterBody: 'Gulab Sagar & Fateh Sagar',
    type: 'Commercial deployment',
    featured: true,
    public: true,
    x: 32,
    y: 48,
    date: '2025',
    summary:
      'Two Aqua Skimmer units were delivered for routine operations at Gulab Sagar and Fateh Sagar. The deployment demonstrates how electric water-surface cleaning vessels can become part of everyday lake maintenance rather than being used only for occasional clean-up events.',
    challenge:
      'Urban lakes often receive periodic clean-up attention, then return to the same surface-waste problem when routine operations are not in place.',
    intervention:
      'Two Aqua Skimmer units were delivered for regular lake operations, supporting a shift from periodic clean-up to routine maintenance.',
    operations:
      'The vessels are intended for everyday surface-cleaning operations as part of ongoing lake maintenance.',
    next: 'Continued scheduled operations and documented maintenance.',
  },
  {
    id: 'durgam',
    slug: 'durgam-cheruvu-hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    waterBody: 'Durgam Cheruvu',
    type: 'Urban-lake pilot',
    public: true,
    x: 48,
    y: 58,
    date: 'May 2024',
    duration: 'One month',
    summary:
      'Urban-lake pilot demonstrating electric floating-waste collection and practical field operation in a high-visibility public water body.',
    challenge: 'A prominent urban lake required a practical demonstration of electric surface-waste collection under local conditions.',
    intervention: 'Aqua Skimmer was piloted for floating-waste collection and operational learning.',
    operations: 'A one-month field deployment under the AMRUT 2.0 mission.',
  },
  {
    id: 'nadimi',
    slug: 'nadimi-cheruvu-safilguda-secunderabad',
    city: 'Secunderabad',
    region: 'Telangana',
    waterBody: 'Nadimi Cheruvu / Safilguda Lake',
    type: 'Community-linked pilot',
    public: true,
    x: 50,
    y: 54,
    date: 'February 2025',
    duration: 'One month',
    summary:
      'A community-linked pilot demonstrating Aqua Skimmer’s role in routine urban lake cleaning.',
    challenge: 'An urban lake needed a practical trial of routine surface cleaning.',
    intervention: 'A one-month Aqua Skimmer pilot at Safilguda Lake.',
  },
  {
    id: 'hooghly',
    slug: 'hooghly-river-ghats-kolkata',
    city: 'Kolkata',
    region: 'West Bengal',
    waterBody: 'Hooghly River Ghats',
    type: 'River operations',
    public: true,
    x: 78,
    y: 42,
    date: 'March 2025',
    duration: 'One week',
    summary:
      'A multi-location pilot across ten ghats, demonstrating rapid deployment in a busy riverfront environment.',
    challenge: 'A busy riverfront required a mobile surface-cleaning demonstration across multiple ghats.',
    intervention: 'A one-week Aqua Skimmer pilot across 10 Kolkata ghats.',
  },
  {
    id: 'gomti',
    slug: 'gomti-river-lucknow',
    city: 'Lucknow',
    region: 'Uttar Pradesh',
    waterBody: 'Gomti River',
    type: 'Demonstration',
    public: true,
    x: 56,
    y: 32,
    date: 'April 2025',
    duration: 'Two days',
    summary:
      'A field demonstration at Kudiya Ghat showcasing manoeuvrability, deployment and waste collection in a river setting.',
    challenge: 'A river setting required a short demonstration of mobilisation and floating-waste collection.',
    intervention: 'A two-day demonstration pilot at Kudiya Ghat.',
  },
]

export const publicProjects = projects.filter((item) => item.public)

export function projectBySlug(slug: string) {
  return publicProjects.find((item) => item.slug === slug) ?? null
}
