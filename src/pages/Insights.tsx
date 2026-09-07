import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { insights } from '../data/insights'
import { handleAppLink } from '../lib/router'
import { usePageTitle } from './pageHero'
import styles from './Insights.module.css'

export function Insights() {
  usePageTitle('Field notes | Eunoia Innovations')

  return (
    <div className={styles.page}>
      <header className={`wrap ${styles.hero}`}>
        <SectionLabel>Field notes</SectionLabel>
        <h1 className={`display ${styles.title}`}>Notes from the water.</h1>
        <p className="lede">
          Editorial notes from Eunoia’s work — marine robotics, water management,
          autonomy, deployments and survey technology.
        </p>
      </header>
      <div className={`wrap ${styles.list}`}>
        {insights.map((item) => (
          <article key={item.id} id={item.id} className={styles.article}>
            <p className="label">{item.category}</p>
            <h2 className={`display ${styles.headline}`}>{item.title}</h2>
            <p className={styles.excerpt}>{item.excerpt}</p>
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
      <div className={`wrap ${styles.cta}`}>
        <LinkButton href="/contact" onClick={(e) => handleAppLink(e, '/contact')}>
          Start a conversation
        </LinkButton>
      </div>
    </div>
  )
}
