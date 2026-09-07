import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Anatomy.module.css'

const labels = [
  { id: 'remote', title: 'Remote operation', hint: 'Unmanned surface control' },
  { id: 'monitor', title: 'Water monitoring', hint: 'Quality + sample collection' },
  { id: 'collect', title: 'Waste collection', hint: 'Forward intake grate' },
  { id: 'propulsion', title: 'Electric propulsion', hint: 'Surface drive' },
] as const

export function AquaAnatomy() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 901px)')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.visual}`,
        { clipPath: 'circle(8% at 50% 60%)' },
        {
          clipPath: 'circle(140% at 50% 50%)',
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.visual}`, start: 'top 78%', once: true },
        },
      )

      if (!desktop) return

      gsap.from(`.${styles.rule}`, {
        scaleX: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: `.${styles.stage}`, start: 'top 70%', once: true },
      })
      gsap.from(`.${styles.callout} span, .${styles.callout} em`, {
        opacity: 0,
        y: 10,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: { trigger: `.${styles.stage}`, start: 'top 70%', once: true },
      })
      gsap.from(`.${styles.line}`, {
        strokeDashoffset: 120,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: `.${styles.stage}`, start: 'top 70%', once: true },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section ref={rootRef} className={styles.section} id="system">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>02 / The machine</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          A robot
          <br />
          built for the surface.
        </h2>
        <p className={`lede ${styles.lede}`}>
          Twin hulls. A collection grate. A remote link. Aqua Skimmer is a physical
          system for a physical problem — waste that sits on the water until something
          takes it off.
        </p>
      </div>

      <div className={`wrap ${styles.stage}`}>
        {labels.map((item) => (
          <div key={item.id} className={styles.callout}>
            <span>{item.title}</span>
            <i className={styles.rule} aria-hidden="true" />
            <em>{item.hint}</em>
          </div>
        ))}
        <div className={styles.visual}>
          <MarineImage
            src={aquaImages.collection}
            alt={imageAlts.aquaCollection}
            className={styles.img}
          />
          <svg className={styles.web} viewBox="0 0 100 62" preserveAspectRatio="none" aria-hidden="true">
            <line className={styles.line} x1="18" y1="14" x2="42" y2="28" strokeDasharray="120" strokeDashoffset="0" />
            <line className={styles.line} x1="82" y1="16" x2="58" y2="26" strokeDasharray="120" strokeDashoffset="0" />
            <line className={styles.line} x1="22" y1="50" x2="40" y2="40" strokeDasharray="120" strokeDashoffset="0" />
            <line className={styles.line} x1="80" y1="50" x2="62" y2="38" strokeDasharray="120" strokeDashoffset="0" />
            <circle className={styles.dot} cx="42" cy="28" r="0.9" />
            <circle className={styles.dot} cx="58" cy="26" r="0.9" />
            <circle className={styles.dot} cx="40" cy="40" r="0.9" />
            <circle className={styles.dot} cx="62" cy="38" r="0.9" />
          </svg>
        </div>
      </div>

      <div className={`wrap ${styles.stack}`}>
        <div className={styles.visual}>
          <MarineImage
            src={aquaImages.collection}
            alt={imageAlts.aquaCollection}
            className={styles.img}
          />
        </div>
        <ul className={styles.list}>
          {labels.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <em>{item.hint}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
