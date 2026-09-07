import { SectionLabel } from '../components/SectionLabel'
import styles from './home.module.css'

const names = ['AMRUT 2.0', 'NIDHI Seed Support', 'ISB D-Labs']

export function Ecosystem() {
  return (
    <section className={styles.eco} id="ecosystem">
      <div className="wrap">
        <SectionLabel>Support ecosystem</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Supported by
          <br />
          India’s innovation
          <br />
          ecosystem.
        </h2>
        <div className={styles.ecoList}>
          {names.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <p className={styles.note}>
          These names refer to programme and incubation affiliations. They are not customers,
          endorsements or delivery partners unless separately confirmed.
        </p>
      </div>
    </section>
  )
}
