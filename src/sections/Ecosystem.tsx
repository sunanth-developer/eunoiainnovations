import { SectionLabel } from '../components/SectionLabel'
import { partners } from '../data/partners'
import styles from './Ecosystem.module.css'

export function Ecosystem() {
  return (
    <section className={`section-tight ${styles.section}`} id="ecosystem">
      <div className="wrap">
        <SectionLabel>15 / Ecosystem</SectionLabel>
        <h2 className={`display ${styles.title}`}>Incubation, research, deployment.</h2>
        <ul className={styles.wall}>
          {partners.map((partner) => (
            <li key={partner.id}>
              <span>{partner.category}</span>
              <strong>{partner.name}</strong>
              <em>Partner logo</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
