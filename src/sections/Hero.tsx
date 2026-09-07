import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { HeroVideo } from '../components/HeroVideo'
import { LinkButton } from '../components/Button'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { imageAlts, images } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Hero.module.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (!reduced) {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
        intro
          .from(`.${styles.media}`, { opacity: 0, scale: 1.08, duration: 2.4 })
          .from(`.${styles.fog}`, { opacity: 0, duration: 1.6 }, 0.3)
          .from(`.${styles.meta} > *`, { y: 18, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.7)
          .from(`.${styles.line}`, { y: 64, opacity: 0, duration: 1.05, stagger: 0.1 }, 0.95)
          .from(`.${styles.copy}`, { y: 24, opacity: 0, duration: 0.85 }, 1.45)
          .from(`.${styles.actions}`, { y: 20, opacity: 0, duration: 0.75 }, 1.75)
          .from(`.${styles.chrome}`, { opacity: 0, duration: 0.6 }, 1.95)

        gsap.to(`.${styles.shift}`, {
          scale: 1.12,
          xPercent: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(`.${styles.content}`, {
          y: -80,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.hero} id="top">
      <div className={`${styles.media} ${styles.shift}`}>
        <HeroVideo poster={images.hero} alt={imageAlts.hero} className={styles.video} />
        <div className={styles.fog} />
        <div className={styles.horizon} />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <p className="label">Eunoia Innovations</p>
            <p className={styles.sub}>/ Autonomous marine robotics</p>
          </div>

          <h1 className={`display ${styles.title}`}>
            <span className={styles.line}>Intelligence</span>
            <span className={styles.line}>
              that <em>moves</em>
            </span>
            <span className={styles.line}>on water.</span>
          </h1>

          <p className={styles.copy}>
            Building autonomous marine systems for cleaner water bodies, smarter surveys
            and the next generation of maritime operations.
          </p>

          <div className={styles.actions}>
            <LinkButton href="#platform" onClick={(e) => handleAppLink(e, '#platform')}>
              Explore our technology
            </LinkButton>
            <LinkButton href="#products" variant="ghost" onClick={(e) => handleAppLink(e, '#products')}>
              See our work
            </LinkButton>
          </div>
        </div>

        <div className={styles.chrome}>
          <p className={styles.origin}>
            Built in India
            <span>Engineered for the water</span>
          </p>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}
