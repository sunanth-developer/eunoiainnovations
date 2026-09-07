import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import styles from './home.module.css'

const steps = ['Assess', 'Deploy', 'Operate', 'Maintain', 'Measure', 'Handover']

export function Approach() {
  return (
    <section className={styles.approach} id="approach">
      <div className={`wrap ${styles.split}`}>
        <div>
          <SectionLabel>The Eunoia approach</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            One accountable partner.
            <br />
            One continuous
            <br />
            maintenance plan.
          </h2>
          <p className="lede">
            We combine robotic surface cleaning, field operations, water quality monitoring,
            bathymetric surveys, vegetation management, preventive barriers and impact
            reporting into a practical programme designed around each water body.
          </p>
          <div className={styles.actions}>
            <LinkButton href="/services" variant="ghost">
              View our services
            </LinkButton>
          </div>
        </div>
        <ol className={styles.flow}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
