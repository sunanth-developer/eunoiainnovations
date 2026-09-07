import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Autonomy.module.css'

const stages = [
  { id: 'remote', title: 'Remote operation', state: 'Current' },
  { id: 'assist', title: 'Assisted navigation', state: 'In development' },
  { id: 'auto', title: 'Autonomous navigation', state: 'In development' },
  { id: 'ops', title: 'Autonomous marine operations', state: 'Future' },
] as const

export function Autonomy() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.shift}`, {
        opacity: 0.2,
        y: 24,
        duration: 1,
        scrollTrigger: { trigger: root, start: 'top 70%' },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="autonomy">
      <div className={styles.radar} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <SectionLabel>11 / Autonomy</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Today,
          <br />
          remote.
        </h2>
        <p className={`display ${styles.shift}`}>
          Tomorrow,
          <br />
          autonomous.
        </p>
        <ol className={styles.list}>
          {stages.map((stage) => (
            <li key={stage.id}>
              <strong>{stage.title}</strong>
              <em>{stage.state}</em>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
