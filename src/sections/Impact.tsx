import { ImageReveal } from '../components/ImageReveal'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, images } from '../config/imageConfig'
import styles from './Impact.module.css'

const marks = [
  { label: 'Design', value: 'Build the marine platform around the physical problem.' },
  { label: 'Deploy', value: 'Put it on the water in real operating conditions.' },
  { label: 'Observe', value: 'Watch how depth, debris and current change the work.' },
  { label: 'Learn', value: 'Take those conditions back into engineering.' },
  { label: 'Improve', value: 'Make the next mission more reliable than the last.' },
]

export function Impact() {
  return (
    <section className={`section ${styles.section}`} id="impact">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>08 / Field learning</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Technology gets better
          <br />
          when it meets reality.
        </h2>
        <p className={`lede ${styles.lede}`}>
          Every deployment exposes a different challenge. Different water depths.
          Different debris. Different currents. Different operating environments.
          Eunoia learns from those conditions and continuously improves its marine
          platforms.
        </p>
      </div>
      <div className={`wrap ${styles.grid}`}>
        <ImageReveal src={images.impact} alt={imageAlts.impact} className={styles.image} />
        <ul className={styles.list}>
          {marks.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
