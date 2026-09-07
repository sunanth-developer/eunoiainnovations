import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Flagship.module.css'

const stats = [
  { id: 'mass', value: '150', unit: 'kg', label: 'Collection capacity', numeric: 150, pad: false },
  { id: 'range', value: '03', unit: 'km', label: 'Approx. remote operating range', numeric: 3, pad: true },
  { id: 'drive', value: 'Electric', unit: '', label: 'Propulsion', numeric: null, pad: false },
  { id: 'sense', value: 'Real-time', unit: '', label: 'Water monitoring', numeric: null, pad: false },
] as const

type FlagshipProps = {
  showCta?: boolean
}

export function Flagship({ showCta = true }: FlagshipProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count)
        const pad = el.dataset.pad === 'true'
        const proxy = { val: 0 }
        gsap.to(proxy, {
          val: end,
          duration: 1.6,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          onUpdate: () => {
            const n = Math.round(proxy.val)
            el.textContent = pad ? String(n).padStart(2, '0') : String(n)
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="flagship">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>06 / Aqua Skimmer</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Aqua
          <br />
          Skimmer.
        </h2>
        <p className={styles.sub}>Autonomous technology for cleaner water.</p>
        <p className="lede">
          Aqua Skimmer is an unmanned surface vessel designed to collect floating waste
          and support real-time water-quality monitoring and sample collection. Remotely
          operated today. A fully autonomous version is under development.
        </p>
        <div className={styles.modes}>
          <p>
            Current
            <strong>Remote / unmanned</strong>
          </p>
          <p>
            Future
            <strong>Autonomous / in development</strong>
          </p>
        </div>
        {showCta ? (
          <LinkButton href="/aqua-skimmer" onClick={(e) => handleAppLink(e, '/aqua-skimmer')}>
            Explore Aqua Skimmer
          </LinkButton>
        ) : null}
      </div>
      <div className={styles.bleed}>
        <MarineImage src={media.aquaSkimmerRender} alt={mediaAlts.aquaSkimmerRender} className={styles.img} />
      </div>
      <div className={`wrap ${styles.stats}`}>
        {stats.map((stat) => (
          <p key={stat.id} className={styles.stat}>
            <strong className={`display ${styles.value}`}>
              {stat.numeric !== null ? (
                <span data-count={stat.numeric} data-pad={stat.pad ? 'true' : undefined}>
                  {stat.value}
                </span>
              ) : (
                stat.value
              )}
              {stat.unit ? <span className={styles.unit}> {stat.unit}</span> : null}
            </strong>
            <span>{stat.label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
