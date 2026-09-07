import { useState } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import { deployments } from '../data/deployments'
import styles from './Deployments.module.css'

export function Deployments() {
  const [active, setActive] = useState(deployments[0].id)
  const current = deployments.find((item) => item.id === active) ?? deployments[0]

  return (
    <section className={`section ${styles.section}`} id="deployments">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>07 / Proven on water</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Built in the lab.
          <br />
          Tested in the real world.
        </h2>
        <p className={`lede ${styles.lede}`}>
          Eunoia has deployed and piloted its marine systems across multiple Indian
          water bodies, working with municipalities, government organisations and
          other institutions.
        </p>
      </div>

      <div className={`wrap ${styles.layout}`}>
        <div className={styles.mapWrap}>
          <svg viewBox="0 0 100 110" className={styles.map} role="img" aria-label="Schematic map of India with deployment locations">
            <path
              className={styles.land}
              d="M46 8c5 1 10 5 13 10 5-1 10 3 11 8l-3 4c7 3 14 7 13 14-4 2-8 5-6 9 5 5 2 12-3 17-3 8-8 16-13 23-3 6-8 8-10 3-1-8 1-15-2-21-4-7-9-12-11-19-7-2-14-7-12-14-3-5 2-10 7-12-3-5 4-10 11-12 3-3 6-6 8-8z"
            />
            <path
              className={styles.land}
              d="M74 22c5 2 9 6 8 11-2 3-6 3-9 0-3-3-3-8-2-11 1-1 2 0 3 0z"
            />
            {deployments.map((point) => (
              <g key={point.id}>
                <circle
                  className={`${styles.glow} ${active === point.id ? styles.glowOn : ''}`}
                  cx={point.x}
                  cy={point.y}
                  r="4.2"
                />
                <circle
                  className={styles.dot}
                  cx={point.x}
                  cy={point.y}
                  r="1.4"
                  onMouseEnter={() => setActive(point.id)}
                  onFocus={() => setActive(point.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${point.waterBody}, ${point.city}`}
                />
              </g>
            ))}
          </svg>
          <p className={styles.disclaimer}>Schematic locations. Not geographic precision.</p>
        </div>

        <div>
          <p className={styles.kicker}>
            {current.date ?? 'Ongoing'} / {current.region}
          </p>
          <h3 className={`display ${styles.place}`}>
            {current.waterBody}
            <span>{current.city}</span>
          </h3>
          <p className={styles.note}>{current.note}</p>
          <ul className={styles.list}>
            {deployments.map((item) => (
              <li key={item.id}>
                <button
                  className={active === item.id ? styles.active : ''}
                  onClick={() => setActive(item.id)}
                >
                  <span>{item.waterBody}</span>
                  <em>{item.city}</em>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
