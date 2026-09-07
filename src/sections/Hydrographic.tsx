import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, images } from '../config/imageConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Hydrographic.module.css'

const layers = ['Surface', 'Sensor layer', 'Waterway map', 'Data']

export function Hydrographic() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      gsap.to(`.${styles.boat}`, {
        xPercent: 70,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top 65%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
      gsap.to(`.${styles.scan}`, {
        width: '86%',
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top 65%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={`section ${styles.section}`} id="hydrographic">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>09 / Survey systems</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Mapping what lies
          <br />
          beneath the surface.
        </h2>
        <p className="lede">
          Eunoia has developed an unmanned surface vessel for hydrographic
          surveying. The platform is designed for marine surveying applications and
          incorporates RTK-GNSS positioning.
        </p>
        <p className="lede">
          An indigenous unmanned survey vessel has been delivered to institutions
          including the Indian Maritime University and the Inland Waterways
          Authority of India.
        </p>
        <LinkButton href="#contact" variant="line" onClick={(e) => handleAppLink(e, '#contact')}>
          Explore survey systems
        </LinkButton>
      </div>

      <div className={styles.canvas}>
        <MarineImage src={images.underwater} alt={imageAlts.underwater} className={styles.bg} />
        <div className={styles.scan} aria-hidden="true" />
        <div className={styles.boat} aria-hidden="true">
          <span />
        </div>
        <ol className={styles.layers}>
          {layers.map((layer) => (
            <li key={layer}>{layer}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
