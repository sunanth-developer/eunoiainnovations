import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './India.module.css'

export function AquaIndia() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.figure}`,
        { clipPath: 'inset(10% 10% 10% 10%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.figure}`, start: 'top 80%', once: true },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="india">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>10 / Origin</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Built in India.
            <br />
            Tested on water.
          </h2>
          <div className={styles.copy}>
            <p>
              Eunoia develops Aqua Skimmer around Indian operating conditions — shallow
              lakes, algae, silt, and debris that does not wait for a perfect test tank.
            </p>
            <p>The machine is designed where the work actually happens.</p>
          </div>
        </div>
        <figure className={styles.figure}>
          <MarineImage src={aquaImages.side} alt={imageAlts.aquaSide} className={styles.img} />
        </figure>
      </div>
    </section>
  )
}
