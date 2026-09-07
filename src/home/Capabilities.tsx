import { capabilities } from '../data/solutions'
import { handleAppLink, withBase } from '../lib/router'
import { SectionLabel } from '../components/SectionLabel'
import styles from './home.module.css'

export function Capabilities() {
  return (
    <section className={styles.capabilities} id="capabilities">
      <div className="wrap">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          More than
          <br />
          a clean-up machine.
        </h2>
        <div className={styles.grid6}>
          {capabilities.map((item) => (
            <a
              key={item.id}
              className={styles.cap}
              href={withBase('/solutions')}
              onClick={(event) => handleAppLink(event, '/solutions')}
            >
              <strong>{item.id}</strong>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span>Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
