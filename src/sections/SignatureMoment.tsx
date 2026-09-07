import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { imageAlts, images } from '../config/imageConfig'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './SignatureMoment.module.css'

const missions = ['Clean', 'Survey', 'Monitor', 'Secure'] as const

export function SignatureMoment() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 960px)')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced || !desktop) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: '+=220%',
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      })

      tl.to(`.${styles.veil}`, { opacity: 0.72, duration: 1 })
        .fromTo(
          `.${styles.vesselInner}`,
          { opacity: 0, y: 36, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          0.25,
        )
        .fromTo(`.${styles.line}`, { scaleX: 0 }, { scaleX: 1, duration: 0.8, stagger: 0.08 }, 0.55)
        .fromTo(`.${styles.mission}`, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.7)
        .to(`.${styles.stage}`, { scale: 1.08, duration: 1.2 }, 1.3)
    }, root)

    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section ref={rootRef} className={styles.section} id="signature" aria-label="One system, many missions">
      <div className={styles.stage}>
        <MarineImage src={images.ocean02} alt={imageAlts.ocean02} className={styles.bg} />
        <div className={styles.veil} />

        <div className={`wrap ${styles.copy}`}>
          <p className="label">One technology / Many missions</p>
          <h2 className={`display ${styles.title}`}>
            One system.
            <br />
            Many missions.
          </h2>
        </div>

        <div className={styles.vessel} aria-hidden="true">
          <div className={styles.vesselInner}>
            <svg viewBox="0 0 420 70" className={styles.silhouette}>
              <path
                d="M18 42h384c-10-8-28-18-58-22-18-2-46 2-70 2H150c-22 0-40-6-58-8C62 12 40 18 28 28 20 34 16 40 18 42z"
                fill="rgba(248,250,252,0.92)"
              />
              <rect x="168" y="16" width="54" height="14" rx="1" fill="rgba(248,250,252,0.7)" />
              <circle cx="210" cy="48" r="3" fill="#55D6BE" />
            </svg>
          </div>
        </div>

        <div className={styles.web} aria-hidden="true">
          {missions.map((mission) => (
            <div key={mission} className={styles.arm}>
              <span className={styles.line} />
              <span className={styles.mission}>{mission}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
