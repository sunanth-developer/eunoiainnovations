import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Survey.module.css'

const layers = ['Position', 'Survey path', 'Mapping', 'Data'] as const

export function Survey() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.to(`.${styles.boat}`, {
        xPercent: 620,
        ease: 'none',
        scrollTrigger: { trigger: `.${styles.canvas}`, start: 'top 70%', end: 'bottom 20%', scrub: true },
      })
      gsap.to(`.${styles.scan}`, {
        width: '86%',
        ease: 'none',
        scrollTrigger: { trigger: `.${styles.canvas}`, start: 'top 70%', end: 'bottom 20%', scrub: true },
      })
      gsap.to(`.${styles.terrain}`, {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: { trigger: `.${styles.canvas}`, start: 'top 65%', end: 'bottom 25%', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="survey">
      <div className="wrap">
        <SectionLabel>12 / Hydrographic survey</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          See
          <br />
          beneath
          <br />
          the surface.
        </h2>
        <p className="lede">
          Eunoia is extending its unmanned marine technology into hydrographic
          surveying and waterway mapping.
        </p>
      </div>
      <div className={`wrap ${styles.canvas}`} aria-hidden="true">
        <div className={styles.water} />
        <div className={styles.scan} />
        <svg className={styles.terrain} viewBox="0 0 800 220" preserveAspectRatio="none">
          <path d="M0 140 C 80 80, 140 170, 220 120 S 360 40, 460 110 S 620 200, 800 90 L 800 220 L 0 220 Z" />
        </svg>
        <div className={styles.boat} />
        <ol className={styles.layers}>
          {layers.map((layer) => (
            <li key={layer}>{layer}</li>
          ))}
        </ol>
      </div>
      <div className="wrap" style={{ marginTop: 36 }}>
        <LinkButton href="/survey" variant="line" onClick={(e) => handleAppLink(e, '/survey')}>
          Explore survey systems
        </LinkButton>
      </div>
    </section>
  )
}
