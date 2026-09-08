import { useEffect, useRef, useState } from 'react'
import { LinkButton } from '../components/Button'
import { processSteps } from '../data/solutions'
import styles from './home.module.css'

export function Approach() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const items = [...list.querySelectorAll<HTMLElement>('[data-step]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const index = items.indexOf(visible?.target as HTMLElement)
        if (index >= 0) setActive(index)
      },
      { rootMargin: '-36% 0px -46% 0px', threshold: [0.25, 0.5, 0.75] },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.approach} id="approach">
      <div className={`wrap ${styles.split}`}>
        <div className={styles.approachCopy}>
          <h2 className={`display ${styles.title}`}>
            One accountable partner.
            <br />
            One continuous
            <br />
            maintenance plan.
          </h2>
          <p className="lede">
            We combine robotic surface cleaning, field operations, water quality monitoring,
            bathymetric surveys, vegetation management, preventive barriers and impact
            reporting into a practical programme designed around each water body.
          </p>
          <div className={styles.actions}>
            <LinkButton href="/services" variant="ghost">
              View our services
            </LinkButton>
          </div>
        </div>
        <ol className={styles.flow} ref={listRef}>
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              data-step={step.id}
              className={index === active ? styles.flowOn : ''}
            >
              <span>{step.id}</span>
              <strong>{step.title}</strong>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
