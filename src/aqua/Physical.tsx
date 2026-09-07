import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Physical.module.css'

const callouts = ['Collection grate', 'Twin hull', 'Remote mast'] as const

export function AquaPhysical() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.figure}`,
        { clipPath: 'inset(12% 12% 12% 12%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.35,
          ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.figure}`, start: 'top 80%', once: true },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="engineering">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionLabel>04 / Contact</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            The problem
            <br />
            is physical.
          </h2>
          <div className={styles.body}>
            <p>Floating waste does not disappear through software.</p>
            <p>It has to be reached. Collected. Removed.</p>
            <p>
              The grate is where Aqua Skimmer meets the water — a mechanical intake
              built to take debris off the surface and hold it for return.
            </p>
          </div>
        </div>
        <figure className={styles.figure}>
          <MarineImage
            src={aquaImages.engineering}
            alt={imageAlts.aquaEngineering}
            className={styles.img}
          />
          <ul className={styles.callouts} aria-hidden="true">
            {callouts.map((item) => (
              <li key={item}>
                <i />
                {item}
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  )
}
