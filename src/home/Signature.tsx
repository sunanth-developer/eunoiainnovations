import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { media, mediaAlts } from '../data/media'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Signature.module.css'

const beats = [
  {
    id: '01',
    title: 'The machine',
    copy: 'A physical vessel for a physical problem.',
    image: media.aquaSkimmerRender,
    alt: mediaAlts.aquaSkimmerRender,
    contain: true,
  },
  {
    id: '02',
    title: 'Collection',
    copy: 'Waste has to be reached, taken off the surface, and held.',
    image: media.aquaCollection,
    alt: mediaAlts.aquaCollection,
  },
  {
    id: '03',
    title: 'On the water',
    copy: 'Built for algae, debris, silt and conditions that do not stay still.',
    image: media.aquaDeployment,
    alt: mediaAlts.aquaDeployment,
  },
  {
    id: '04',
    title: 'At work',
    copy: 'Deploy. Navigate. Collect. Monitor. Return.',
    image: media.aquaWorks,
    alt: mediaAlts.aquaWorks,
  },
] as const

export function Signature() {
  const pinRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 961px)')

  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin || reduced || !desktop) return

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(`.${styles.slide}`)
      gsap.set(slides, { autoAlpha: 0 })
      gsap.set(slides[0], { autoAlpha: 1 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: `+=${slides.length * 120}%`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      })
      slides.forEach((slide, index) => {
        if (index === 0) return
        tl.to(slides[index - 1], { autoAlpha: 0, duration: 1 }, index).fromTo(
          slide,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1 },
          index,
        )
      })
    }, pin)

    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section className={styles.section} id="story">
      <div ref={pinRef} className={styles.pin}>
        <div className={`wrap ${styles.stage}`}>
          {beats.map((beat) => (
            <article key={beat.id} className={styles.slide}>
              <div className={styles.media}>
                <MarineImage
                  src={beat.image}
                  alt={beat.alt}
                  className={`${styles.img} ${'contain' in beat && beat.contain ? styles.contain : ''}`}
                />
              </div>
              <div className={styles.copy}>
                <p className={styles.index}>{beat.id} / Flagship</p>
                <h3 className={`display ${styles.title}`}>{beat.title}</h3>
                <p className={styles.text}>{beat.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={`wrap ${styles.stack}`}>
        {beats.map((beat) => (
          <article key={beat.id}>
            <div className={styles.media}>
              <MarineImage
                src={beat.image}
                alt={beat.alt}
                className={`${styles.img} ${'contain' in beat && beat.contain ? styles.contain : ''}`}
              />
            </div>
            <p className={styles.index}>{beat.id}</p>
            <h3 className={`display ${styles.title}`}>{beat.title}</h3>
            <p className={styles.text}>{beat.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
