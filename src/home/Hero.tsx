import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { AquaSkimmerScene } from '../components/three/AquaSkimmerScene'
import { media, mediaAlts } from '../data/media'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Hero.module.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .set(`.${styles.veil}`, { opacity: 1 })
        .from(`.${styles.signal}`, { scaleX: 0, duration: 0.9 }, 0.15)
        .from(`.${styles.meta}`, { y: 16, opacity: 0, duration: 0.55 }, 0.35)
        .from(`.${styles.shift}`, { opacity: 0, y: 48, scale: 1.06, duration: 1.6 }, 0.45)
        .from(`.${styles.row}`, { y: 48, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.7)
        .from(`.${styles.copyText}`, { y: 16, opacity: 0, duration: 0.55 }, 1.1)
        .from(`.${styles.actions}`, { y: 12, opacity: 0, duration: 0.5 }, 1.25)
        .from(`.${styles.chrome}`, { y: 10, opacity: 0, duration: 0.45 }, 1.35)
        .to(`.${styles.veil}`, { opacity: 0, duration: 1.1 }, 0.2)
        .to(`.${styles.signal}`, { opacity: 0.22, duration: 0.8 }, 1.5)

      gsap.to(`.${styles.shift}`, {
        yPercent: -8,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1.1 },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.hero} id="top">
      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.signal} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.meta}>
            Eunoia Innovations
            <em>/ Autonomous marine robotics</em>
          </p>
          <h1 className={`display ${styles.title}`}>
            <span className={styles.row}>Intelligence</span>
            <span className={styles.row}>that moves</span>
            <span className={styles.row}>on water.</span>
          </h1>
          <p className={styles.copyText}>
            Building unmanned marine systems for cleaner water bodies, smarter surveys
            and the next generation of maritime operations.
          </p>
          <div className={styles.actions}>
            <LinkButton href="/technology" onClick={(e) => handleAppLink(e, '/technology')}>
              Explore technology
            </LinkButton>
            <LinkButton href="/deployments" variant="ghost" onClick={(e) => handleAppLink(e, '/deployments')}>
              See our work
            </LinkButton>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.shift}>
            <AquaSkimmerScene
              fallbackImage={media.heroProduct}
              alt={mediaAlts.heroProduct}
              className={styles.product}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        <div className={styles.chrome}>
          <p>
            Built in India
            <strong>Marine robotics / 2021—</strong>
          </p>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}
