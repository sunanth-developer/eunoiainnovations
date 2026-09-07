import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    id: '01',
    title: 'Deploy',
    copy: 'Place Aqua Skimmer directly into the target water body.',
  },
  {
    id: '02',
    title: 'Navigate',
    copy: 'Operate the vessel remotely across the water surface.',
  },
  {
    id: '03',
    title: 'Collect',
    copy: 'Gather floating waste through the forward collection system.',
  },
  {
    id: '04',
    title: 'Monitor',
    copy: 'Support water-quality monitoring and sample collection during the run.',
  },
  {
    id: '05',
    title: 'Return',
    copy: 'Bring collected waste back for removal and the next pass.',
  },
] as const

export function AquaHowItWorks() {
  const pinRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 961px)')
  const [active, setActive] = useState(0)

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
          end: `+=${steps.length * 120}%`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(steps.length - 1, Math.floor(self.progress * steps.length))
            setActive(index)
          },
        },
      })

      cards.forEach((card, index) => {
        if (index === 0) return
        const prev = cards[index - 1]
        tl.to(prev, { autoAlpha: 0, y: -20, duration: 1 }, index)
          .fromTo(card, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1 }, index)
      })
    }, pin)

    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section className={styles.section} id="how-it-works">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>03 / Mission cycle</SectionLabel>
        <h2 className={`display ${styles.title}`}>How it works</h2>
      </div>

      <div ref={pinRef} className={styles.pin}>
        <div className={`wrap ${styles.stage}`}>
          <div className={styles.media}>
            <MarineImage src={aquaImages.works} alt={imageAlts.aquaWorks} className={styles.img} />
            <span className={styles.caption}>Collect / field operation</span>
          </div>
          <div>
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
            <div className={styles.progress} aria-hidden="true">
              {steps.map((step, index) => (
                <span key={step.id} className={index <= active ? styles.on : ''} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.stack}`}>
        <div className={styles.media}>
          <MarineImage src={aquaImages.works} alt={imageAlts.aquaWorks} className={styles.img} />
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
