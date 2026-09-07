import { SectionLabel } from '../components/SectionLabel'
import { team } from '../data/team'
import styles from './Team.module.css'

export function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>16 / Team</SectionLabel>
        <h2 className={`display ${styles.title}`}>The people building it.</h2>
      </div>
      <div className={`wrap ${styles.grid}`}>
        {team.map((member) => (
          <article key={member.id}>
            <div className={styles.photo} aria-hidden="true">
              {member.initials}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
