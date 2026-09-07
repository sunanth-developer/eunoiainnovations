import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { contactDetails, interestOptions } from '../data/nav'
import styles from './Contact.module.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const org = String(data.get('organization') ?? '')
    const interest = String(data.get('interest') ?? '')
    const work = String(data.get('work') ?? '')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nInterest: ${interest}\n\n${work}`,
    )
    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent('Eunoia enquiry')}&body=${body}`
    setSent(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>18 / Contact</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Have a
            <br />
            water
            <br />
            problem?
          </h2>
          <p className="lede">Let’s build the machine for it.</p>
          <dl className={styles.details}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>
                {contactDetails.city}
                <br />
                {contactDetails.address}
              </dd>
            </div>
          </dl>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Organisation
            <input name="organization" autoComplete="organization" />
          </label>
          <label>
            Interest
            <select name="interest" required defaultValue="">
              <option value="" disabled>
                Select
              </option>
              {interestOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="work" rows={4} required />
          </label>
          <Button type="submit">Start a conversation</Button>
          {sent ? <p className={styles.thanks}>Your mail client should open with the enquiry.</p> : null}
        </form>
      </div>
    </section>
  )
}
