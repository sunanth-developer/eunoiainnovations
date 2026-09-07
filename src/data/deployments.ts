export type Deployment = {
  id: string
  waterBody: string
  city: string
  region: string
  project: string
  platform: string
  note: string
  date?: string
  x: number
  y: number
}

/** Coordinates are schematic positions on the site map, not GPS. */
export const deployments: Deployment[] = [
  {
    id: 'durgam',
    waterBody: 'Durgam Cheruvu',
    city: 'Hyderabad',
    region: 'Telangana',
    project: 'AMRUT 2.0 pilot',
    platform: 'Aqua Skimmer',
    note: 'Under the AMRUT 2.0 mission, Aqua Skimmer was piloted at Durgam Cheruvu for one month.',
    date: 'May 2024',
    x: 48,
    y: 58,
  },
  {
    id: 'nadimi',
    waterBody: 'Nadimi Cheruvu',
    city: 'Secunderabad',
    region: 'Telangana',
    project: 'Safilguda Lake pilot',
    platform: 'Aqua Skimmer',
    note: 'A one-month Aqua Skimmer pilot was conducted at Safilguda Lake in partnership with Lions Club International.',
    date: 'February 2025',
    x: 50,
    y: 54,
  },
  {
    id: 'hooghly',
    waterBody: 'Hooghly River',
    city: 'Kolkata',
    region: 'West Bengal',
    project: 'Kolkata ghats pilot',
    platform: 'Aqua Skimmer',
    note: 'A one-week pilot was conducted across 10 Kolkata ghats in collaboration with CGAPP, Kolkata Municipal Corporation and the Port Authority.',
    date: 'March 2025',
    x: 78,
    y: 42,
  },
  {
    id: 'gomti',
    waterBody: 'Gomti River',
    city: 'Lucknow',
    region: 'Uttar Pradesh',
    project: 'Kudiya Ghat demonstration',
    platform: 'Aqua Skimmer',
    note: 'A two-day demonstration pilot was conducted with the Territorial Army at Kudiya Ghat.',
    date: 'April 2025',
    x: 56,
    y: 32,
  },
]
