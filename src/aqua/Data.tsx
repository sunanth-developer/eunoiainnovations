import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './Data.module.css'

const stats = [
  { id: 'mass', value: '150', unit: 'kg', label: 'Collection capacity', numeric: 150 },
  { id: 'range', value: '03', unit: 'km', label: 'Remote operating range', numeric: 3 },
  { id: 'drive', value: 'Electric', unit: '', label: 'Propulsion', numeric: null },
  { id: 'sense', value: 'Real-time', unit: '', label: 'Water monitoring', numeric: null },
] as const

export function AquaData() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const ctx = gsap.context(() => {
      const counters = root.querySelectorAll<HTMLElement>('[data-count]')
      counters.forEach((el) => {
        const end = Number(el.dataset.count)
        const pad = el.dataset.pad === 'true'
        const proxy = { val: 0 }
        gsap.to(proxy, {
          val: end,
          duration: 1.6,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          onUpdate: () => {
            const n = Math.round(proxy.val)
            el.textContent = pad ? String(n).padStart(2, '0') : String(n)
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={styles.section} id="data">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>07 / Product data</SectionLabel>
      </div>
      <div className={`wrap ${styles.grid}`}>
        {stats.map((stat) => (
          <p key={stat.id} className={styles.stat}>
            <strong className={`display ${styles.value}`}>
              {stat.numeric !== null ? (
                <span
                  data-count={stat.numeric}
                  data-pad={stat.id === 'range' ? 'true' : undefined}
                >
                  {stat.value}
                </span>
              ) : (
                stat.value
              )}
              {stat.unit ? <span className={styles.unit}> {stat.unit}</span> : null}
            </strong>
            <span className={styles.label}>{stat.label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
