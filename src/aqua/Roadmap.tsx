import { SectionLabel } from '../components/SectionLabel'
import styles from './Roadmap.module.css'

const stages = [
  {
    title: 'Remote operation',
    state: 'now' as const,
    tag: 'Current platform',
  },
  {
    title: 'Assisted navigation',
    state: 'future' as const,
    tag: 'Development / roadmap',
  },
  {
    title: 'Autonomous navigation',
    state: 'future' as const,
    tag: 'Development / roadmap',
  },
  {
    title: 'Autonomous water-body maintenance',
    state: 'future' as const,
    tag: 'Development / roadmap',
  },
]

export function AquaRoadmap() {
  return (
    <section className={styles.section} id="roadmap">
      <div className="wrap">
        <SectionLabel>09 / Trajectory</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          From remote
          <br />
          to autonomous.
        </h2>
        <ol className={styles.spine}>
          {stages.map((stage) => (
            <li
              key={stage.title}
              className={`${styles.node} ${stage.state === 'now' ? styles.now : styles.future}`}
            >
              <span className={styles.mark} aria-hidden="true" />
              <div className={styles.body}>
                <strong>{stage.title}</strong>
                <span className={styles.tag}>{stage.tag}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
