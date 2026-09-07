/**
 * Portable contact handler for Resend or another transactional provider.
 * GitHub Pages cannot run this file. Deploy it as POST /api/contact on the
 * hosting environment and set:
 *
 * RESEND_API_KEY
 * CONTACT_EMAIL
 * FROM_EMAIL
 */
export type ContactRequest = {
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
}

const required = [
  'fullName',
  'organisation',
  'email',
  'phone',
  'cityState',
  'waterbodyType',
  'primaryRequirement',
  'projectDescription',
] as const

export function validateContactRequest(body: Partial<ContactRequest>) {
  for (const key of required) {
    if (!String(body[key] ?? '').trim()) {
      return `Missing ${key}`
    }
  }
  if (!body.consent) return 'Consent is required'
  return null
}

export async function sendContactEmail(body: ContactRequest, fileName?: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.FROM_EMAIL
  if (!apiKey || !to || !from) {
    throw new Error('Contact email environment is not configured')
  }

  const text = [
    `Name: ${body.fullName}`,
    `Organisation: ${body.organisation}`,
    body.designation ? `Designation: ${body.designation}` : '',
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `City / State: ${body.cityState}`,
    body.waterbodyName ? `Waterbody: ${body.waterbodyName}` : '',
    `Type: ${body.waterbodyType}`,
    body.approximateArea ? `Area: ${body.approximateArea}` : '',
    `Requirement: ${body.primaryRequirement}`,
    body.preferredModel ? `Model: ${body.preferredModel}` : '',
    fileName ? `Attachment received: ${fileName}` : '',
    '',
    body.projectDescription,
  ]
    .filter(Boolean)
    .join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: body.email,
      subject: `Eunoia enquiry — ${body.waterbodyType} / ${body.primaryRequirement}`,
      text,
    }),
  })

  if (!response.ok) {
    throw new Error('Email provider rejected the message')
  }
}
