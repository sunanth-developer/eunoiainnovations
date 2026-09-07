import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { engagementModels } from '../data/services'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function EngagementPage() {
  const [active, setActive] = useState<string>(engagementModels[0].id)
  const current = engagementModels.find((item) => item.id === active) ?? engagementModels[0]

  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.engagement.title}
        description={pageSeo.engagement.description}
        path="/engagement-models"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Engagement Models', path: '/engagement-models' },
        ])}
      />
      <PageHero
        kicker="Engagement models"
        title={
          <>
            Ways to work
            <br />
            with Eunoia.
          </>
        }
        lede="Choose an operating model around ownership, duration, reporting and who stays accountable on the water."
      />
      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.grid2}>
            {engagementModels.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.card} ${item.id === active ? styles.chipOn : ''}`}
                onClick={() => setActive(item.id)}
                onMouseEnter={() => setActive(item.id)}
              >
                <h2>{item.title}</h2>
                <p className={styles.muted}>{item.best}</p>
              </button>
            ))}
          </div>
          <div className={styles.drawer}>
            <p className={styles.kicker}>How it works</p>
            <h2 className={`display ${page.mid}`}>{current.title}</h2>
            <p className={styles.muted}>{current.how}</p>
            <p className={styles.muted} style={{ marginTop: 12 }}>
              Best for: {current.best}
            </p>
            <div className={page.close}>
              <LinkButton href="/contact">Start with this model</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
