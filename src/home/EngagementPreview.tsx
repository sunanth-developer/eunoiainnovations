import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { engagementModels } from '../data/services'
import styles from './home.module.css'

export function EngagementPreview() {
  const [active, setActive] = useState<string>(engagementModels[0].id)
  const current = engagementModels.find((item) => item.id === active) ?? engagementModels[0]
  const index = String(engagementModels.findIndex((item) => item.id === current.id) + 1).padStart(2, '0')

  return (
    <section className={styles.engage} id="engagement">
      <div className="wrap">
        <h2 className={`display ${styles.title}`}>
          Ways to work
          <br />
          with Eunoia.
        </h2>
        <div className={styles.modelLayout}>
          <ol className={styles.modelList}>
            {engagementModels.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={item.id === active ? styles.modelOn : ''}
                  onClick={() => setActive(item.id)}
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) setActive(item.id)
                  }}
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {item.title}
                </button>
              </li>
            ))}
          </ol>
          <article className={styles.modelDetail}>
            <p className={styles.modelIndex}>{index}</p>
            <h3 className="display">{current.title}</h3>
            <p>{current.how}</p>
            <p>{current.best}</p>
          </article>
        </div>
        <div className={styles.actions}>
          <LinkButton href="/engagement-models">Compare models</LinkButton>
        </div>
      </div>
    </section>
  )
}
