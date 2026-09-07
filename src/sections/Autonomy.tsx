import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Autonomy.module.css'

const steps = ['Remote operation', 'Assisted navigation', 'Autonomous operation']

export function Autonomy() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.8,
        },
      })

      tl.fromTo(`.${styles.craft}`, { offsetDistance: '0%' }, { offsetDistance: '100%', duration: 1 })
      steps.forEach((_, index) => {
        tl.fromTo(
          `.${styles.step}:nth-child(${index + 1})`,
          { opacity: 0.25 },
          { opacity: 1, duration: 0.2 },
          index * 0.25,
        )
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={`section ${styles.section}`} id="autonomy">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>09 / Autonomy</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Teaching machines
            <br />
            to understand
            <br />
            water.
          </h2>
          <div className={styles.copy}>
            <p>
              Eunoia is developing autonomous navigation technology that combines
              vision and sensors to help marine vessels navigate, detect obstacles
              and operate without a human pilot.
            </p>
            <p>
              The challenge is different from land. On water, obstacles move.
              Currents change. Visibility changes. The environment is constantly
              moving.
            </p>
            <p>
              The goal is to give marine vessels the ability to understand their
              surroundings and make navigation decisions.
            </p>
            <p className={styles.note}>
              Today’s Aqua Skimmer is remotely operated. A fully autonomous version
              is under development.
            </p>
          </div>
        </div>

        <div className={styles.console} aria-hidden="true">
          <div className={styles.radar}>
            <span />
            <span />
            <span />
          </div>
          <svg className={styles.plot} viewBox="0 0 360 240">
            <path
              className={styles.route}
              d="M28 190 C 70 170, 90 120, 140 128 S 210 90, 250 110 320 70, 338 48"
            />
            <path
              className={styles.avoid}
              d="M140 128 C 168 148, 190 150, 220 132"
            />
            <circle cx="168" cy="96" r="10" className={styles.hazard} />
            <circle cx="262" cy="168" r="8" className={styles.hazard} />
            <circle className={styles.craft} r="5" cx="0" cy="0" />
          </svg>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step} className={styles.step}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
