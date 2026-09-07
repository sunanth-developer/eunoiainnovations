import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './HowItWorks.module.css'

const steps = [
  { id: '01', title: 'Deploy', copy: 'Place Aqua Skimmer into the target water body.' },
  { id: '02', title: 'Navigate', copy: 'Operate across the surface toward areas requiring attention.' },
  { id: '03', title: 'Collect', copy: 'Capture floating waste through the integrated collection system.' },
  { id: '04', title: 'Monitor', copy: 'Support water-quality monitoring and sample collection during operations.' },
  { id: '05', title: 'Return', copy: 'Return collected material for removal.' },
] as const

export function HowItWorks() {
  const pinRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 961px)')

  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin || reduced || !desktop) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.step}`)
      gsap.set(cards, { autoAlpha: 0, y: 24 })
      gsap.set(cards[0], { autoAlpha: 1, y: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: `+=${steps.length * 110}%`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      })
      cards.forEach((card, index) => {
        if (index === 0) return
        tl.to(cards[index - 1], { autoAlpha: 0, y: -18, duration: 1 }, index).fromTo(
          card,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1 },
          index,
        )
      })
    }, pin)
    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section className={styles.section} id="how">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>How it works</SectionLabel>
        <h2 className={`display ${styles.title}`}>Deploy. Navigate. Collect. Monitor. Return.</h2>
      </div>
      <div ref={pinRef} className={styles.pin}>
        <div className={`wrap ${styles.stage}`}>
          <div className={styles.media}>
            <MarineImage src={media.aquaWorks} alt={mediaAlts.aquaWorks} className={styles.img} />
            <span className={styles.caption}>Active collection</span>
          </div>
          <div className={styles.board}>
            {steps.map((step, index) => (
              <article key={step.id} className={styles.step}>
                <p className={styles.index}>{step.id} / {steps.length.toString().padStart(2, '0')}</p>
                <h3 className={`display ${styles.name}`}>{step.title}</h3>
                <p className={styles.copy}>{step.copy}</p>
                <div className={styles.progress} aria-hidden="true">
                  {steps.map((item, i) => (
                    <span key={item.id} className={i <= index ? styles.on : ''} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.stack}`}>
        <MarineImage src={media.aquaWorks} alt={mediaAlts.aquaWorks} className={styles.mobileImg} />
        {steps.map((step) => (
          <article key={step.id} className={styles.mobileStep}>
            <p className={styles.index}>{step.id}</p>
            <h3 className={`display ${styles.name}`}>{step.title}</h3>
            <p className={styles.copy}>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
