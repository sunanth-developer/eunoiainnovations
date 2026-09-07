import { SectionLabel } from '../components/SectionLabel'
import { team } from '../data/team'
import styles from './Team.module.css'

export function Team() {
  return (
    <section className={`section-tight ${styles.section}`} id="team">
      <div className="wrap">
        <SectionLabel>14 / The people</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Built by engineers
          <br />
          who chose the harder problem.
        </h2>
        <ul className={styles.grid}>
          {team.map((member) => (
            <li key={member.id} className={styles.card}>
              <div className={styles.portrait} aria-hidden="true">
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
