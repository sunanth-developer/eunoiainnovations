import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { contactDetails } from '../data/site'
import styles from './home.module.css'

export function Finale() {
  return (
    <section className={styles.finale} id="start">
      <div className="wrap">
        <SectionLabel>Start a project</SectionLabel>
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
          <LinkButton href="/contact">Submit project details</LinkButton>
          {contactDetails.brochureUrl ? (
            <LinkButton href={contactDetails.brochureUrl} variant="ghost">
              Download brochure
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  )
}
