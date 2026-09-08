import { capabilities } from '../data/solutions'
import { handleAppLink, withBase } from '../lib/router'
import styles from './home.module.css'

export function Capabilities() {
  return (
    <section className={styles.capabilities} id="capabilities">
      <div className="wrap">
        <div className={styles.sectionHead}>
          <h2 className={`display ${styles.title}`}>
            More than
            <br />
            a clean-up machine.
          </h2>
        </div>
        <div className={styles.capList}>
          {capabilities.map((item) => (
            <a
              key={item.id}
              className={styles.cap}
              href={withBase('/solutions')}
              onClick={(event) => handleAppLink(event, '/solutions')}
            >
              <strong>{item.id}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <span>Explore</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
