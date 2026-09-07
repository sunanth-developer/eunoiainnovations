import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { partners } from '../data/partners'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './India.module.css'

const loop = ['Design', 'Build', 'Deploy', 'Learn', 'Improve'] as const

export function India() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.step}`, {
        y: 18,
        opacity: 0.2,
        stagger: 0.1,
        duration: 0.55,
        scrollTrigger: { trigger: root, start: 'top 68%' },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="india">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>Built in India</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Built in India.
          <br />
          Engineered
          <br />
          for water.
        </h2>
        <ol className={styles.loop}>
          {loop.map((step, index) => (
            <li key={step} className={styles.step}>
              {step}
              {index < loop.length - 1 ? <span aria-hidden="true">→</span> : null}
            </li>
          ))}
        </ol>
      </div>
      <div className={`wrap ${styles.shot}`}>
        <MarineImage src={media.aquaCollection} alt={mediaAlts.aquaCollection} className={styles.img} />
      </div>
      <div className={`wrap ${styles.partners}`}>
        {partners.map((partner) => (
          <p key={partner.id}>
            <em>{partner.category}</em>
            {partner.name}
          </p>
        ))}
      </div>
    </section>
  )
}
