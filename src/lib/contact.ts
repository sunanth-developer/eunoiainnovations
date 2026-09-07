export const waterbodyTypes = ['Lake', 'River', 'Pond', 'Canal', 'Port', 'Reservoir', 'Other'] as const
export const primaryRequirements = [
  'Waste Removal',
  'Maintenance',
  'Water Quality',
  'Bathymetry',
  'Weeds',
  'Integrated Project',
  'Purchase',
] as const
export const preferredModels = [
  'Pilot',
  'Service',
  'Annual Programme',
  'Purchase',
  'CSR',
  'Survey',
  'Not Sure',
] as const

export const allowedUploadTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const maxUploadBytes = 8 * 1024 * 1024

export type ContactPayload = {
  fullName: string
  organisation: string
  designation?: string
  email: string
  phone: string
  cityState: string
  waterbodyName?: string
  waterbodyType: string
  approximateArea?: string
  primaryRequirement: string
  preferredModel?: string
  projectDescription: string
  consent: boolean
  honeypot?: string
}

export type ContactResult =
  | { ok: true; mode: 'api' | 'mailto' }
  | { ok: false; error: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+0-9()\-\s]{8,20}$/

export function sanitize(value: string) {
  return value.replace(/[<>]/g, '').trim()
}

export function validateContact(data: ContactPayload, file?: File | null): string | null {
  if (data.honeypot) return null
  if (!data.fullName) return 'Please enter your full name.'
  if (!data.organisation) return 'Please enter your organisation.'
  if (!emailPattern.test(data.email)) return 'Please enter a valid work email.'
  if (!phonePattern.test(data.phone)) return 'Please enter a valid phone or WhatsApp number.'
  if (!data.cityState) return 'Please enter your city and state.'
  if (!data.waterbodyType) return 'Please select a waterbody type.'
  if (!data.primaryRequirement) return 'Please select a primary requirement.'
  if (data.projectDescription.trim().length < 12) return 'Please describe the project in a little more detail.'
  if (!data.consent) return 'Consent is required to send this enquiry.'
  if (file) {
    if (!allowedUploadTypes.includes(file.type)) return 'Please upload an image, PDF or document file.'
    if (file.size > maxUploadBytes) return 'File uploads must be 8 MB or smaller.'
  }
  return null
}

function endpoint() {
  return (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || '/api/contact'
}

function mailtoHref(data: ContactPayload) {
  const body = [
    `Name: ${data.fullName}`,
    `Organisation: ${data.organisation}`,
    data.designation ? `Designation: ${data.designation}` : '',
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `City / State: ${data.cityState}`,
    data.waterbodyName ? `Waterbody: ${data.waterbodyName}` : '',
    `Waterbody type: ${data.waterbodyType}`,
    data.approximateArea ? `Approximate area: ${data.approximateArea}` : '',
    `Primary requirement: ${data.primaryRequirement}`,
    data.preferredModel ? `Preferred model: ${data.preferredModel}` : '',
    '',
    data.projectDescription,
  ]
    .filter(Boolean)
    .join('\n')

  return `mailto:info@eunoiainnovations.com?subject=${encodeURIComponent(
    `Site assessment: ${data.waterbodyType} / ${data.primaryRequirement}`,
  )}&body=${encodeURIComponent(body)}`
}

export async function submitContact(data: ContactPayload, file?: File | null): Promise<ContactResult> {
  if (data.honeypot) return { ok: true, mode: 'api' }

  const clean: ContactPayload = {
    ...data,
    fullName: sanitize(data.fullName),
    organisation: sanitize(data.organisation),
    designation: sanitize(data.designation || ''),
    email: sanitize(data.email),
    phone: sanitize(data.phone),
    cityState: sanitize(data.cityState),
    waterbodyName: sanitize(data.waterbodyName || ''),
    waterbodyType: sanitize(data.waterbodyType),
    approximateArea: sanitize(data.approximateArea || ''),
    primaryRequirement: sanitize(data.primaryRequirement),
    preferredModel: sanitize(data.preferredModel || ''),
    projectDescription: sanitize(data.projectDescription),
  }

  const error = validateContact(clean, file)
  if (error) return { ok: false, error }

  const url = endpoint()
  const canPostFiles = Boolean(import.meta.env.VITE_CONTACT_ENDPOINT) || url.startsWith('http')

  try {
    const body = new FormData()
    Object.entries(clean).forEach(([key, value]) => {
      if (key === 'honeypot') return
      body.append(key, String(value ?? ''))
    })
    if (file && canPostFiles) body.append('file', file)

    const response = await fetch(url, { method: 'POST', body })
    if (response.ok) return { ok: true, mode: 'api' }
  } catch {
    // Static hosting has no /api/contact. Fall through to mailto.
  }

  window.location.href = mailtoHref(clean)
  return { ok: true, mode: 'mailto' }
}
