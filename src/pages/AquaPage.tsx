import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { aquaStoryFrames } from '../config/imageConfig'
import { faqs } from '../data/services'
import {
  aquaBenefits,
  aquaDetails,
  aquaSensors,
  aquaSpecs,
} from '../data/solutions'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function AquaPage() {
  const [mode, setMode] = useState<'remote' | 'auto'>('remote')

  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.aqua.title}
        description={pageSeo.aqua.description}
        path="/solutions/aqua-skimmer"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions' },
            { name: 'Aqua Skimmer', path: '/solutions/aqua-skimmer' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Aqua Skimmer',
            brand: 'Eunoia Innovations',
            description: pageSeo.aqua.description,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
        ]}
      />
      <PageHero
        kicker="Aqua Skimmer"
        title={
          <>
            Electric water-surface
            <br />
            cleaning vessel.
          </>
        }
        lede="Designed for routine floating-waste collection across urban lakes, rivers, ponds, canals and waterfront zones."
      />

      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          {aquaStoryFrames.map((frame) => (
            <figure key={frame.caption}>
              <img className={styles.media} src={frame.src} alt={frame.alt} />
              <figcaption className={styles.kicker}>{frame.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Specifications</p>
          <div className={styles.grid3} style={{ marginTop: 28 }}>
            {[...aquaSpecs, ...aquaDetails].map((item) => (
              <article key={item.label} className={styles.card}>
                <p className={styles.kicker}>{item.label}</p>
                <h2>{item.value}</h2>
                {'note' in item && item.note ? <p className={styles.muted}>{item.note}</p> : null}
              </article>
            ))}
          </div>
          <p className={styles.muted} style={{ marginTop: 24 }}>
            Optional sensors: {aquaSensors.join(', ')}.
          </p>
          <p className={styles.muted}>
            Performance depends on load, weather, water conditions, communication visibility
            and configuration.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Benefits</p>
          <div className={styles.grid2} style={{ marginTop: 28 }}>
            {aquaBenefits.map((item) => (
              <article key={item.title} className={styles.belief}>
                <h3>{item.title}</h3>
                <p className={styles.muted}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Operating modes</p>
          <div className={styles.chips}>
            <button type="button" className={mode === 'remote' ? styles.chipOn : ''} onClick={() => setMode('remote')}>
              Remote-controlled
            </button>
            <button type="button" className={mode === 'auto' ? styles.chipOn : ''} onClick={() => setMode('auto')}>
              Autonomous
            </button>
          </div>
          <p className={styles.muted} style={{ maxWidth: '40rem' }}>
            {mode === 'remote'
              ? 'An operator manoeuvres the vessel through a dedicated controller using live video and direct visual supervision.'
              : 'Mission planning, obstacle awareness and automated navigation features can support repeatable routes and reduced operator workload, subject to configuration and site suitability.'}
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>FAQ</p>
          <div className={styles.grid2} style={{ marginTop: 28 }}>
            {faqs.map((item) => (
              <article key={item.q} className={styles.faq}>
                <h3>{item.q}</h3>
                <p className={styles.muted}>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Request a site demo</LinkButton>
        <LinkButton href="/services" variant="ghost">
          Maintenance programmes
        </LinkButton>
      </div>
    </div>
  )
}
