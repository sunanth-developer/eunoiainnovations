import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './WaterData.module.css'

const rows = [
  ['Vessel', 'Aqua Skimmer'],
  ['Mission', 'Surface cleaning'],
  ['Status', 'Active'],
  ['Mode', 'Remote'],
  ['Collection', 'Active'],
  ['Monitoring', 'Active'],
] as const

export function WaterData() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.row}`, {
        y: 12,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        scrollTrigger: { trigger: root, start: 'top 70%' },
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="data">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>10 / Water + data</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            The water
            <br />
            becomes data.
          </h2>
          <p className="lede">
            A visual interface for the system on the water. Not live sensor readings —
            a picture of how Eunoia thinks about status, mode and mission.
          </p>
        </div>
        <div className={styles.panel} aria-hidden="true">
          <p className={styles.head}>Eunoia / Marine system</p>
          {rows.map(([label, value]) => (
            <p key={label} className={styles.row}>
              <span>{label}</span>
              <strong>
                {value === 'Active' ? <i /> : null}
                {value}
              </strong>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
