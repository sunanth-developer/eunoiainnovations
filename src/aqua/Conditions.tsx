import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Conditions.module.css'

const terms = [
  'Algae',
  'Floating debris',
  'Silt',
  'Variable depths',
  'Unpredictable conditions',
] as const

export function AquaConditions() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(`.${styles.terms} li`)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 55%',
          end: 'bottom 35%',
          scrub: 0.6,
        },
      })

      items.forEach((item, index) => {
        tl.to(item, { color: '#54e4e0', duration: 0.35 }, index * 0.35)
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="conditions">
      <div className={styles.bg}>
        <MarineImage src={aquaImages.water} alt={imageAlts.aquaWater} className={styles.img} />
        <div className={styles.veil} />
      </div>
      <div className={`wrap ${styles.content}`}>
        <SectionLabel>05 / Environment</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Built for
          <br />
          real water.
        </h2>
        <ul className={styles.terms}>
          {terms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
