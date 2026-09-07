import { useState } from 'react'
import { deployments, type Deployment } from '../data/deployments'
import styles from './IndiaMap.module.css'

type IndiaMapProps = {
  onChange?: (item: Deployment) => void
}

export function IndiaMap({ onChange }: IndiaMapProps) {
  const [active, setActive] = useState(deployments[0].id)
  const current = deployments.find((item) => item.id === active) ?? deployments[0]

  const select = (id: string) => {
    setActive(id)
    const next = deployments.find((item) => item.id === id)
    if (next) onChange?.(next)
  }

  return (
    <div className={styles.layout}>
      <div>
        <svg
          viewBox="0 0 100 110"
          className={styles.map}
          role="img"
          aria-label="Schematic map of India with Aqua Skimmer deployment locations"
        >
          <path
            className={styles.land}
            d="M46 8c5 1 10 5 13 10 5-1 10 3 11 8l-3 4c7 3 14 7 13 14-4 2-8 5-6 9 5 5 2 12-3 17-3 8-8 16-13 23-3 6-8 8-10 3-1-8 1-15-2-21-4-7-9-12-11-19-7-2-14-7-12-14-3-5 2-10 7-12-3-5 4-10 11-12 3-3 6-6 8-8z"
          />
          <path className={styles.land} d="M74 22c5 2 9 6 8 11-2 3-6 3-9 0-3-3-3-8-2-11 1-1 2 0 3 0z" />
          {deployments.map((point) => (
            <g key={point.id}>
              <circle
                className={`${styles.glow} ${active === point.id ? styles.glowOn : ''}`}
                cx={point.x}
                cy={point.y}
                r="5"
              />
              <circle className={styles.pulse} cx={point.x} cy={point.y} r="2.4" />
              <circle
                className={`${styles.dot} ${active === point.id ? styles.dotOn : ''}`}
                cx={point.x}
                cy={point.y}
                r="1.5"
                onClick={() => select(point.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') select(point.id)
                }}
                tabIndex={0}
                role="button"
                aria-pressed={active === point.id}
                aria-label={`${point.waterBody}, ${point.city}`}
              />
            </g>
          ))}
        </svg>
        <p className={styles.disclaimer}>Schematic locations. Not geographic precision.</p>
      </div>

      <div className={styles.panel}>
        <p className={styles.kicker}>
          {current.date} / {current.platform}
        </p>
        <h3 className={`display ${styles.place}`}>
          {current.city}
          <span>{current.waterBody}</span>
        </h3>
        <dl className={styles.meta}>
          <div>
            <dt>Project</dt>
            <dd>{current.project}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>
              {current.city}, {current.region}
            </dd>
          </div>
        </dl>
        <p className={styles.note}>{current.note}</p>
        <ul className={styles.list}>
          {deployments.map((item) => (
            <li key={item.id}>
              <button className={active === item.id ? styles.active : ''} onClick={() => select(item.id)}>
                <span>{item.city}</span>
                <em>{item.waterBody}</em>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
