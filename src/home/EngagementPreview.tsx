import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { engagementModels } from '../data/services'
import styles from './home.module.css'

export function EngagementPreview() {
  const [active, setActive] = useState<string>(engagementModels[0].id)
  const current = engagementModels.find((item) => item.id === active) ?? engagementModels[0]

  return (
    <section className={styles.engage} id="engagement">
      <div className="wrap">
        <SectionLabel>Engagement models</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Ways to work
          <br />
          with Eunoia.
        </h2>
        <div className={styles.models}>
          {engagementModels.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === active ? styles.modelOn : ''}
              onClick={() => setActive(item.id)}
              onMouseEnter={() => setActive(item.id)}
            >
              <h3>{item.title}</h3>
              <p>{item.best}</p>
            </button>
          ))}
        </div>
        <p className="lede" style={{ marginTop: 32 }}>
          {current.how}
        </p>
        <div className={styles.actions}>
          <LinkButton href="/engagement-models">Compare models</LinkButton>
        </div>
      </div>
    </section>
  )
}
