import { useEffect, useState } from 'react'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { aquaStoryFrames, imageAlts, imageConfig } from '../config/imageConfig'
import {
  aquaBenefits,
  aquaDetails,
  aquaSensors,
  aquaSpecs,
} from '../data/solutions'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './home.module.css'

export function AquaStory() {
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState<'remote' | 'auto'>('remote')
  const reduced = usePrefersReducedMotion()
  const compact = useMediaQuery('(max-width: 980px)')
  const frame = aquaStoryFrames[index]

  useEffect(() => {
    if (reduced || compact) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % aquaStoryFrames.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [reduced, compact])

  return (
    <section className={styles.aqua} id="aqua-skimmer">
      <div className="wrap">
        <div className={styles.aquaHead}>
          <div>
            <SectionLabel>Flagship product</SectionLabel>
            <h2 className={`display ${styles.title}`}>
              Aqua
              <br />
              Skimmer.
            </h2>
            <p className="lede">Meet Eunoia’s electric water-surface cleaning vessel.</p>
          </div>
          <div>
            <p className="lede">
              Designed for routine floating-waste collection, Aqua Skimmer combines a
              catamaran platform, collection system, live video and remote or autonomous
              operation options.
            </p>
            <p className="lede">
              Its modular design supports deployment across urban lakes, rivers, ponds,
              canals and waterfront zones.
            </p>
            <div className={styles.actions}>
              <LinkButton href="/solutions/aqua-skimmer">View technical details</LinkButton>
              <LinkButton href="/contact" variant="ghost">
                Request a site demo
              </LinkButton>
            </div>
          </div>
        </div>

        <div className={styles.story}>
          <img src={compact ? imageConfig.aqua.wide : frame.src} alt={compact ? imageAlts.wide : frame.alt} />
          <p className={styles.storyCap}>
            {String(index + 1).padStart(2, '0')} / {frame.caption}
          </p>
        </div>

        <dl className={styles.specs}>
          {aquaSpecs.map((item) => (
            <article key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
              {item.note ? <p className={styles.disclaimer}>{item.note}</p> : null}
            </article>
          ))}
        </dl>
        <dl className={styles.specs}>
          {aquaDetails.map((item) => (
            <article key={item.label}>
              <dt>{item.label}</dt>
              <dd style={{ fontSize: '1.15rem' }}>{item.value}</dd>
            </article>
          ))}
        </dl>
        <p className={styles.disclaimer}>
          Optional sensors: {aquaSensors.join(', ')}. Performance depends on load, weather,
          water conditions, communication visibility and configuration.
        </p>

        <div className={styles.benefits}>
          {aquaBenefits.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className={styles.modes}>
          <div>
            <button
              type="button"
              className={`${styles.modeBtn} ${mode === 'remote' ? styles.modeOn : ''}`}
              onClick={() => setMode('remote')}
            >
              Remote-controlled
            </button>
            <button
              type="button"
              className={`${styles.modeBtn} ${mode === 'auto' ? styles.modeOn : ''}`}
              onClick={() => setMode('auto')}
            >
              Autonomous
            </button>
          </div>
          <p className="lede">
            {mode === 'remote'
              ? 'An operator manoeuvres the vessel through a dedicated controller using live video and direct visual supervision.'
              : 'Mission planning, obstacle awareness and automated navigation features can support repeatable routes and reduced operator workload, subject to configuration and site suitability.'}
          </p>
        </div>
      </div>
    </section>
  )
}
