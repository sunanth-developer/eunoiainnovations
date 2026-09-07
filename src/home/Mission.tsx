import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './story.module.css'

const words = ['Clean.', 'Survey.', 'Monitor.', 'Secure.'] as const

export function Mission() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.word}`, {
        y: 40,
        opacity: 0.15,
        color: '#526260',
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: root, start: 'top 62%' },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={`${styles.band} ${styles.pageOpen}`} id="why">
      <div className="wrap">
        <SectionLabel>Mission</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          We build
          <br />
          machines
          <br />
          for water.
        </h2>
        <ul className={styles.missions} id="mission">
          {words.map((word) => (
            <li key={word} className={`${styles.word} ${styles.on}`}>
              {word}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
