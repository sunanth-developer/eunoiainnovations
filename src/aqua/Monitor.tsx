import { SectionLabel } from '../components/SectionLabel'
import styles from './Monitor.module.css'

const rows = [
  { label: 'Water quality', value: 'Real-time monitoring' },
  { label: 'Sample collection', value: 'Supported' },
  { label: 'Vessel mode', value: 'Remote operation' },
  { label: 'Link', value: 'Active' },
] as const

export function AquaMonitor() {
  return (
    <section className={styles.section} id="monitor">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>06 / Intelligence</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Clean the water.
            <br />
            Understand the water.
          </h2>
          <div className={styles.copy}>
            <p>Removing waste is one part of managing a water body.</p>
            <p>
              Aqua Skimmer also supports real-time water-quality monitoring and sample
              collection — physical cleanup paired with information about the condition
              of the water.
            </p>
          </div>
        </div>

        <div className={styles.console} aria-hidden="true">
          <div className={styles.radar}>
            <div className={styles.sweep} />
            <div className={styles.rings}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <ul className={styles.rows}>
            {rows.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </li>
            ))}
          </ul>
          <p className={styles.note}>No live telemetry shown · interface language only</p>
        </div>
      </div>
    </section>
  )
}
