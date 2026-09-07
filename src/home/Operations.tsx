import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from '../aqua/HowItWorks.module.css'

const steps = [
  { id: '01', title: 'Deploy', copy: 'Place Aqua Skimmer into the target water body.' },
  { id: '02', title: 'Navigate', copy: 'Operate across the water surface toward areas requiring attention.' },
  { id: '03', title: 'Collect', copy: 'Capture floating waste through the integrated collection system.' },
  { id: '04', title: 'Monitor', copy: 'Support water-quality monitoring and sample collection during operations.' },
  { id: '05', title: 'Return', copy: 'Return collected material for removal.' },
] as const

export function Operations() {
  const pinRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 961px)')

  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin || reduced || !desktop) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.step}`)
      gsap.set(cards, { autoAlpha: 0, y: 20 })
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
        tl.to(cards[index - 1], { autoAlpha: 0, y: -16, duration: 1 }, index).fromTo(
          card,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1 },
          index,
        )
      })
    }, pin)
    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section className={styles.section} id="operation">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>05 / Operation</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          From water
          <br />
          to waste removal.
        </h2>
      </div>
      <div ref={pinRef} className={styles.pin}>
        <div className={`wrap ${styles.stage}`}>
          <div className={styles.media}>
            <MarineImage src={media.aquaWorks} alt={mediaAlts.aquaWorks} className={styles.img} />
          </div>
          <div className={styles.board}>
            {steps.map((step) => (
              <article key={step.id} className={styles.step}>
                <p className={styles.index}>
                  {step.id} / {step.title}
                </p>
                <h3 className={`display ${styles.name}`}>{step.title}</h3>
                <p className={styles.copy}>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.stack}`}>
        <div className={styles.media}>
          <MarineImage src={media.aquaWorks} alt={mediaAlts.aquaWorks} className={styles.img} />
        </div>
        {steps.map((step) => (
          <article key={step.id} className={styles.mobileStep}>
            <p className={styles.index}>
              {step.id} / {step.title}
            </p>
            <h3 className={`display ${styles.name}`}>{step.title}</h3>
            <p className={styles.copy}>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
