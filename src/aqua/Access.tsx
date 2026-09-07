import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Access.module.css'

export function AquaAccess() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.figure}`,
        { clipPath: 'circle(6% at 40% 55%)' },
        {
          clipPath: 'circle(140% at 50% 50%)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.figure}`, start: 'top 78%', once: true },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="access">
      <div className={`wrap ${styles.grid}`}>
        <figure className={styles.figure}>
          <MarineImage src={aquaImages.collection} alt={imageAlts.aquaCollection} className={styles.img} />
        </figure>
        <div>
          <SectionLabel>08 / Reach</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Go where
            <br />
            conventional equipment
            <br />
            can’t.
          </h2>
          <div className={styles.copy}>
            <p>
              At Durgam Cheruvu in Hyderabad, Aqua Skimmer reached a waste accumulation
              area that conventional equipment struggled to access because of its size.
            </p>
            <p>
              A compact unmanned hull can work the edges and pockets that larger
              machines cannot enter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
