import { publicProjects, type Project } from '../data/projects'
import styles from './IndiaMap.module.css'

type ProjectsMapProps = {
  selectedId?: string
  onSelect?: (project: Project) => void
  tone?: 'light' | 'dark'
}

export function ProjectsMap({ selectedId, onSelect, tone = 'light' }: ProjectsMapProps) {
  const current = publicProjects.find((item) => item.id === selectedId) ?? publicProjects[0]
  const index = String(publicProjects.findIndex((item) => item.id === current.id) + 1).padStart(2, '0')

  const select = (project: Project) => onSelect?.(project)

  return (
    <div className={`${styles.layout} ${tone === 'dark' ? styles.dark : ''}`}>
      <div className={styles.mapPanel}>
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
          {publicProjects.map((point) => (
            <g key={point.id}>
              <circle
                className={`${styles.glow} ${current.id === point.id ? styles.glowOn : ''}`}
                cx={point.x}
                cy={point.y}
                r="5"
              />
              <circle className={styles.pulse} cx={point.x} cy={point.y} r="2.4" />
              <circle
                className={`${styles.dot} ${current.id === point.id ? styles.dotOn : ''}`}
                cx={point.x}
                cy={point.y}
                r="1.5"
                onClick={() => select(point)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') select(point)
                }}
                tabIndex={0}
                role="button"
                aria-pressed={current.id === point.id}
                aria-label={`${point.waterBody}, ${point.city}`}
              />
            </g>
          ))}
        </svg>
        <p className={styles.disclaimer}>Schematic locations. Not geographic precision.</p>
      </div>

      <div className={styles.panel} key={current.id}>
        <p className={styles.kicker}>
          Project {index} / {current.date ?? 'Field deployment'} / {current.type}
        </p>
        <h3 className={`display ${styles.place}`}>
          {current.city}
          <span>{current.waterBody}</span>
        </h3>
        <p className={styles.note}>{current.summary}</p>
        <ul className={styles.list}>
          {publicProjects.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={item.id === current.id ? styles.active : ''}
                onClick={() => select(item)}
              >
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
