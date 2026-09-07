export type PartnerSlot = {
  id: string
  name: string
  category: 'Incubation' | 'Technology' | 'Government' | 'Research' | 'Deployment'
}

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
