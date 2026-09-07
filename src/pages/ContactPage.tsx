import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { contactDetails } from '../data/site'
import {
  preferredModels,
  primaryRequirements,
  submitContact,
  waterbodyTypes,
} from '../lib/contact'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

const successCopy =
  'Thank you. Your project details have been received. Our team will review the information and contact you using the details provided.'

export function ContactPage() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [busy, setBusy] = useState(false)
  const canUpload = Boolean(import.meta.env.VITE_CONTACT_ENDPOINT)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    const form = event.currentTarget
    const data = new FormData(form)
    const file = (data.get('file') as File | null) || null
    setBusy(true)
    const result = await submitContact(
      {
        fullName: String(data.get('fullName') ?? ''),
        organisation: String(data.get('organisation') ?? ''),
        designation: String(data.get('designation') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        cityState: String(data.get('cityState') ?? ''),
        waterbodyName: String(data.get('waterbodyName') ?? ''),
        waterbodyType: String(data.get('waterbodyType') ?? ''),
        approximateArea: String(data.get('approximateArea') ?? ''),
        primaryRequirement: String(data.get('primaryRequirement') ?? ''),
        preferredModel: String(data.get('preferredModel') ?? ''),
        projectDescription: String(data.get('projectDescription') ?? ''),
        consent: data.get('consent') === 'on',
        honeypot: String(data.get('company_url') ?? ''),
      },
      file && file.size ? file : null,
    )
    setBusy(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setSuccess(
      result.mode === 'mailto'
        ? `${successCopy} If your mail client opened, send the message to complete the enquiry.`
        : successCopy,
    )
    form.reset()
  }

  return (
    <div className={page.page}>
      <Seo
        title="Contact Eunoia Innovations | Request a Site Assessment"
        description="Share your waterbody location and challenge to request a site assessment, demonstration or project discussion."
        path="/contact"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <PageHero
        kicker="Request a site demo"
        title={
          <>
            Call or email
            <br />
            Eunoia.
          </>
        }
        lede="Choose how you want to reach us. Email opens your mail app. Mobile opens your phone app."
      />
      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.reach}>
            <a href={contactDetails.emailHref}>
              <em>Email</em>
              <strong>Send an email</strong>
              <p>{contactDetails.email}</p>
              <p className={styles.muted}>Opens your mail app with a site-demo subject line.</p>
            </a>
            <a href={contactDetails.phoneHref}>
              <em>Mobile</em>
              <strong>Call Eunoia</strong>
              <p>{contactDetails.phone}</p>
              <p className={styles.muted}>Opens your phone app to start a call.</p>
            </a>
          </div>
        </div>
        <div className={`wrap ${styles.grid2}`}>
          <div>
            <p className={styles.kicker}>Or send project details</p>
            <p className={styles.muted} style={{ marginTop: 16 }}>
              Share the location, approximate size and current challenge if you prefer to write first.
            </p>
            <p className={styles.muted} style={{ marginTop: 16 }}>
              {contactDetails.address}
            </p>
          </div>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label>
              <span>Full name *</span>
              <input name="fullName" required autoComplete="name" />
            </label>
            <label>
              <span>Organisation *</span>
              <input name="organisation" required autoComplete="organization" />
            </label>
            <label>
              <span>Designation</span>
              <input name="designation" autoComplete="organization-title" />
            </label>
            <label>
              <span>Work email *</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              <span>Phone / WhatsApp *</span>
              <input name="phone" type="tel" required autoComplete="tel" />
            </label>
            <label>
              <span>City and state *</span>
              <input name="cityState" required autoComplete="address-level2" />
            </label>
            <label>
              <span>Waterbody name</span>
              <input name="waterbodyName" />
            </label>
            <label>
              <span>Waterbody type *</span>
              <select name="waterbodyType" required defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {waterbodyTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Approximate area</span>
              <input name="approximateArea" placeholder="Hectares or acres, if known" />
            </label>
            <label>
              <span>Primary requirement *</span>
              <select name="primaryRequirement" required defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                {primaryRequirements.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Preferred model</span>
              <select name="preferredModel" defaultValue="">
                <option value="">Not specified</option>
                {preferredModels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Project description *</span>
              <textarea name="projectDescription" required rows={5} />
            </label>
            {canUpload ? (
              <label>
                <span>File upload</span>
                <input name="file" type="file" accept="image/*,.pdf,.doc,.docx" />
              </label>
            ) : (
              <p className={styles.muted}>
                Attachments can be emailed to {contactDetails.email} after you submit this form.
              </p>
            )}
            <label className={styles.hp}>
              Company website
              <input name="company_url" tabIndex={-1} autoComplete="off" />
            </label>
            <label className={styles.check}>
              <input name="consent" type="checkbox" required />
              <span>I consent to Eunoia contacting me about this enquiry using the details provided. *</span>
            </label>
            <Button type="submit" disabled={busy}>
              {busy ? 'Sending…' : 'Submit project details'}
            </Button>
            {error ? <p className={styles.error}>{error}</p> : null}
            {success ? <p className={styles.success}>{success}</p> : null}
          </form>
        </div>
      </section>
    </div>
  )
}
