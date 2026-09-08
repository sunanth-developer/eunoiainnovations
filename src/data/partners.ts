export type PartnerSlot = {
  id: string
  name: string
  category: 'Incubation' | 'Technology' | 'Government' | 'Research' | 'Deployment'
}

export type LogoSlot = {
  id: string
  name?: string
  src?: string
  alt?: string
}

export type LogoGroup = {
  id: string
  title: string
  slots: LogoSlot[]
}

function logos(entries: { id: string; name: string }[]): LogoSlot[] {
  return entries.map((entry) => ({ id: entry.id, name: entry.name, alt: entry.name }))
}

/** Logo-only groups on About. Add `src` when artwork is ready. */
export const aboutLogoGroups: LogoGroup[] = [
  {
    id: 'association',
    title: 'Association',
    slots: logos([
      { id: 'fmae', name: 'FMAE' },
      { id: 'moe', name: 'MoE' },
      { id: 'mohua', name: 'MoHUA' },
      { id: 'asci-wih', name: 'ASCI WIH' },
    ]),
  },
  {
    id: 'incubation-partners',
    title: 'Incubation Partners',
    slots: logos([
      { id: 'isb-dlabs', name: 'ISB D-Labs' },
      { id: 'aic-thub', name: 'AIC T-Hub' },
      { id: 'tworks', name: 'T-Works Foundation' },
      { id: 'iitk-siic', name: 'IITK SIIC' },
      { id: 'vishva', name: 'VISHVA' },
      { id: 'hitam-hiic', name: 'HITAM HIIC' },
    ]),
  },
  {
    id: 'consortium-partners',
    title: 'Consortium Partners',
    slots: logos([
      { id: 'neerovel', name: 'Neerovel' },
      { id: 'one-iot', name: 'One IoT' },
      { id: 'clean-water', name: 'Clean Water' },
      { id: 'prasinos', name: 'Prasinos Tech Innovations' },
      { id: 'kelachandra', name: 'Kelachandra Aquatic Machines' },
    ]),
  },
  {
    id: 'dealership',
    title: 'Dealership and Supported by',
    slots: [
      ...logos([
        { id: 'cosmic-healers', name: 'Cosmic Healers Private Limited' },
        { id: 'lions-services', name: 'Lions Services Limited' },
        { id: 'kansbe', name: 'KANSBE' },
        { id: 'cloud-ascend', name: 'Cloud Ascend' },
      ]),
    ],
  },
]

/**
 * Verified ecosystem organisations from public company materials.
 * Logos are placeholders until official artwork is supplied.
 */
export const partners: PartnerSlot[] = [
  { id: 'siic', name: 'IIT Kanpur SIIC', category: 'Incubation' },
  { id: 'dlabs', name: 'ISB D-Labs', category: 'Incubation' },
  { id: 'thub', name: 'T-Hub AIC', category: 'Incubation' },
  { id: 'tworks', name: 'T-Works', category: 'Technology' },
  { id: 'hiic', name: 'HIIC', category: 'Incubation' },
  { id: 'vishva', name: 'VISHVA', category: 'Research' },
  { id: 'imu', name: 'Indian Maritime University', category: 'Research' },
  { id: 'iwai', name: 'Inland Waterways Authority of India', category: 'Government' },
]
