import { SectionLabel } from '../components/SectionLabel'
import styles from './Challenge.module.css'

export function AquaChallenge() {
  return (
    <section className={styles.section} id="challenge">
      <div className="wrap">
        <SectionLabel className={styles.kicker}>Frequency</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Cleaning water once
          <br />
          isn’t enough.
        </h2>
        <div className={styles.copy}>
          <p>Floating waste returns.</p>
          <p>
            A single cleanup does not hold. The same stretch of water asks for people
            again — and again.
          </p>
          <p>
            <strong>Aqua Skimmer is built for that frequency.</strong> An unmanned
            vessel that can go back to the water without putting a crew on every pass.
          </p>
        </div>
      </div>
    </section>
  )
}
