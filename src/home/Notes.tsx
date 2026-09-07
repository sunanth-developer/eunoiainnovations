import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { insights } from '../data/insights'
import { handleAppLink } from '../lib/router'
import styles from './Notes.module.css'

export function Notes() {
  return (
    <section className={styles.section} id="notes">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>17 / Field notes</SectionLabel>
        <h2 className={`display ${styles.title}`}>Field notes</h2>
      </div>
      <div className={`wrap ${styles.grid}`}>
        {insights.map((item) => (
          <article key={item.id}>
            <p>{item.category}</p>
            <h3 className="display">{item.title}</h3>
            <span>{item.excerpt}</span>
          </article>
        ))}
      </div>
      <div className="wrap">
        <LinkButton href="/notes" variant="line" onClick={(e) => handleAppLink(e, '/notes')}>
          Read field notes
        </LinkButton>
      </div>
    </section>
  )
}
