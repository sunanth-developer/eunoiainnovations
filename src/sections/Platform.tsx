import { SectionLabel } from '../components/SectionLabel'
import styles from './Platform.module.css'

const nodes = [
  {
    id: 'clean',
    title: 'Clean',
    detail: 'Automated water-body cleanup and floating waste collection.',
  },
  {
    id: 'survey',
    title: 'Survey',
    detail: 'Unmanned hydrographic surveying and waterway mapping.',
  },
  {
    id: 'monitor',
    title: 'Monitor',
    detail: 'Water-quality monitoring and environmental data collection.',
  },
  {
    id: 'secure',
    title: 'Secure',
    detail: 'Future unmanned systems for maritime surveillance and security.',
  },
] as const

export function Platform() {
  return (
    <section className={`section ${styles.section} grid-bg`} id="platform">
      <div className="wrap">
        <SectionLabel>03 / One technology, many missions</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          One marine platform.
          <br />
          Multiple possibilities.
        </h2>
        <p className={`lede ${styles.lede}`}>
          Unmanned vessels can perform tasks that are difficult, repetitive or
          risky for people to perform manually. Different missions. Different
          payloads. The same pursuit of smarter marine operations.
        </p>

        <div className={styles.schema} role="img" aria-label="Eunoia marine platform capability map">
          <div className={styles.core}>
            <span>Eunoia</span>
            <strong>Marine platform</strong>
          </div>
          <div className={styles.spine} aria-hidden="true" />
          <ul className={styles.nodes}>
            {nodes.map((node) => (
              <li key={node.id} className={styles.node}>
                <span>{node.title}</span>
                <em>{node.detail}</em>
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            Defence-focused systems sit further along the same path — currently as
            Sentinel-M, in development. Not every product shares the same hull.
          </p>
        </div>
      </div>
    </section>
  )
}
