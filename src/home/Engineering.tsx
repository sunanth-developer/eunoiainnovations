import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Engineering.module.css'

const callouts = [
  { id: 'collect', title: 'Collection system', hint: 'Forward intake grate' },
  { id: 'access', title: 'Surface access', hint: 'Built to reach the waste' },
  { id: 'structure', title: 'Marine structure', hint: 'Hulls for real water' },
  { id: 'electronics', title: 'Onboard electronics', hint: 'Control and monitoring' },
] as const

export function Engineering() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.rule}`, {
        scaleX: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: root, start: 'top 70%' },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="engineering">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>Engineering</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Designed
          <br />
          around the
          <br />
          problem.
        </h2>
      </div>
      <div className={`wrap ${styles.stage}`}>
        <div className={styles.visual}>
          <MarineImage src={media.aquaEngineering} alt={mediaAlts.aquaEngineering} className={styles.img} />
        </div>
        <ul className={styles.list}>
          {callouts.map((item) => (
            <li key={item.id}>
              <span className={styles.rule} />
              <strong>{item.title}</strong>
              <em>{item.hint}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
