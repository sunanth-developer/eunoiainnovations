import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { SectionLabel } from '../components/SectionLabel'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './story.module.css'

const missions = [
  { id: 'clean', title: 'Clean', copy: 'Surface cleaning and waste collection.' },
  { id: 'survey', title: 'Survey', copy: 'Hydrographic surveying and waterway mapping.' },
  { id: 'monitor', title: 'Monitor', copy: 'Water-quality and environmental monitoring.' },
  { id: 'secure', title: 'Secure', copy: 'Future autonomous maritime applications.' },
] as const

export function Platform() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(`.${styles.node}`)
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: 'top 55%', end: 'bottom 35%', scrub: 0.65 },
      })
      nodes.forEach((node, index) => {
        tl.to(node, { outlineColor: '#00c7be', duration: 0.25 }, index * 0.35)
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className={`${styles.band} contours`} id="technology">
      <div className="wrap">
        <SectionLabel>03 / Technology</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          One technology.
          <br />
          Multiple missions.
        </h2>
        <p className={styles.note}>
          Different missions. Different payloads. The same pursuit of machines that
          can work on water. Not every product shares the same hull.
        </p>
        <ul className={styles.nodes}>
          {missions.map((item) => (
            <li key={item.id} className={styles.node}>
              <strong>{item.title}</strong>
              <em>{item.copy}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
