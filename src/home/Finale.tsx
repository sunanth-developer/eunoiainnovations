import { LinkButton } from '../components/Button'
import { contactDetails } from '../data/site'
import styles from './home.module.css'

export function Finale() {
  return (
    <section className={styles.finale} id="start">
      <div className="wrap">
        <h2 className="display">
          Let’s discuss
          <br />
          your water body.
        </h2>
        <p className="lede">
          Share the location, approximate size and current challenge. Our team will help
          identify whether you need an assessment, demonstration, maintenance programme,
          equipment purchase or survey.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/contact">Request a site demo</LinkButton>
          <a className={styles.finaleMail} href={contactDetails.emailHref}>
            {contactDetails.email}
          </a>
        </div>
        {contactDetails.brochureUrl ? (
          <div className={styles.actions}>
            <LinkButton href={contactDetails.brochureUrl} variant="ghost" className={styles.ghostLight}>
              Download brochure
            </LinkButton>
          </div>
        ) : null}
      </div>
    </section>
  )
}
