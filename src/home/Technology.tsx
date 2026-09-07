import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { pillars } from '../data/pillars'
import { handleAppLink } from '../lib/router'
import styles from './Technology.module.css'

export function Technology() {
  const [active, setActive] = useState<(typeof pillars)[number]['id']>('clean')
  const current = pillars.find((item) => item.id === active) ?? pillars[0]

  return (
    <section className={styles.section} id="technology">
      <div className={styles.visual} aria-hidden="true">
        {pillars.map((pillar) => (
          <MarineImage
            key={pillar.id}
            src={pillar.image}
            alt=""
            className={`${styles.bg} ${active === pillar.id ? styles.bgOn : ''}`}
          />
        ))}
        <div className={styles.fog} />
      </div>
      <div className={`wrap ${styles.inner}`}>
        <SectionLabel>04 / Technology</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          One technology.
          <br />
          Many missions.
        </h2>
        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              className={`${styles.card} ${active === pillar.id ? styles.on : ''}`}
              onMouseEnter={() => setActive(pillar.id)}
              onFocus={() => setActive(pillar.id)}
              onClick={() => setActive(pillar.id)}
            >
              <span className={styles.name}>{pillar.name}</span>
              <strong>{pillar.title}</strong>
              <em>{pillar.detail}</em>
            </button>
          ))}
        </div>
        <p className={styles.copy}>{current.copy}</p>
        <LinkButton href="/technology" variant="line" onClick={(e) => handleAppLink(e, '/technology')}>
          Explore the technology
        </LinkButton>
      </div>
    </section>
  )
}
