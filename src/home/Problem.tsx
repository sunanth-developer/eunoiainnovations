import { SectionLabel } from '../components/SectionLabel'
import styles from './story.module.css'

export function Problem() {
  return (
    <section className={`${styles.band} ${styles.dark}`} id="problem">
      <div className="wrap">
        <SectionLabel>03 / The problem</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          The problem
          <br />
          is physical.
        </h2>
        <div className={styles.copy}>
          <p>Floating waste must be collected.</p>
          <p>Waterways must be surveyed.</p>
          <p>Changing environments must be monitored.</p>
          <p>
            And increasingly, these tasks need machines that can operate without putting
            people in every situation.
          </p>
        </div>
        <p className={`display ${styles.hold}`}>
          So we build
          <br />
          the machines.
        </p>
      </div>
    </section>
  )
}
