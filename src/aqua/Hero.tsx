import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { AquaSkimmerScene } from '../components/three/AquaSkimmerScene'
import { media, mediaAlts } from '../data/media'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Hero.module.css'

export function AquaHero() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from(`.${styles.shift}`, { opacity: 0.45, scale: 1.05, duration: 2.1 })
        .from(`.${styles.meta}`, { y: 14, duration: 0.7 }, 0.15)
        .from(`.${styles.line}`, { y: 32, duration: 0.95, stagger: 0.08 }, 0.2)
        .from(`.${styles.sub}`, { y: 14, duration: 0.65 }, 0.55)
        .from(`.${styles.lede}`, { y: 10, duration: 0.6 }, 0.7)
        .from(`.${styles.chrome}`, { y: 8, duration: 0.5 }, 0.85)

      gsap.to(`.${styles.shift}`, {
        scale: 1.08,
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.meta}>
            Eunoia Innovations
            <em>/ Marine robotics</em>
          </p>
          <h1 className={`display ${styles.title}`}>
            <span className={styles.line}>Aqua</span>
            <span className={styles.line}>Skimmer</span>
          </h1>
          <p className={styles.sub}>
            Autonomous technology
            <br />
            for cleaner water.
          </p>
          <p className={styles.lede}>
            An unmanned surface vessel designed to collect floating waste and support
            real-time water-quality monitoring.
          </p>
          <div className={styles.chrome}>
            <LinkButton href="#challenge" onClick={(e) => handleAppLink(e, '#challenge')}>
              Explore the system
            </LinkButton>
            <p className={styles.status}>
              Current platform
              <strong>Remote / unmanned</strong>
            </p>
            <div className={styles.scroll}>
              <ScrollIndicator />
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.shift}>
            <AquaSkimmerScene
              fallbackImage={media.heroProduct}
              alt={mediaAlts.aquaSkimmerRender}
              className={styles.product}
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <span className={styles.pulse} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
