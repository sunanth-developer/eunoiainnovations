import { useState } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import { processSteps } from '../data/solutions'
import styles from './home.module.css'

export function HowWeWork() {
  const [active, setActive] = useState(0)
  const step = processSteps[active]

  return (
    <section className={styles.process} id="how-we-work">
      <div className="wrap">
        <SectionLabel>How we work</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          From site
          <br />
          assessment
          <br />
          to sustainable
          <br />
          handover.
        </h2>
        <div className={styles.processLayout}>
          <div className={styles.stepList}>
            {processSteps.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === active ? styles.stepOn : ''}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                <strong>{item.id}</strong>
                <h3>{item.title}</h3>
              </button>
            ))}
          </div>
          <div className={styles.stepVisual}>
            <span>{step.id}</span>
            <h3 className="display">{step.title}</h3>
            <p>{step.copy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
