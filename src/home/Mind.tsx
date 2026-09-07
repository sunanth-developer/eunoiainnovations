import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import { Autonomy } from '../sections/Autonomy'
import { AquaRoadmap } from '../aqua/Roadmap'
import styles from './Depth.module.css'

const layers = ['Position', 'Survey path', 'Mapping', 'Data'] as const

export function Mind() {
  return (
    <>
      <Autonomy />
      <AquaRoadmap />
    </>
  )
}

export function Depth() {
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
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.shift} id="survey">
      <div className="wrap">
        <SectionLabel>10 / Survey</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          See beneath
          <br />
          the surface.
        </h2>
        <p className="lede">
          Eunoia is extending its unmanned marine technology into hydrographic
          surveying and waterway mapping. An unmanned survey vessel with RTK-GNSS
          positioning has been delivered to institutions including the Indian
          Maritime University and the Inland Waterways Authority of India.
        </p>
        <div className={styles.pair}>
          <p>Surface.</p>
          <p>
            <em>Then below.</em>
          </p>
        </div>
      </div>
      <div className={`wrap ${styles.canvas}`} aria-hidden="true">
        <div className={styles.water} />
        <div className={styles.scan} />
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
