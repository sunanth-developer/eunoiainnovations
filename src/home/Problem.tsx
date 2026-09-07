import problemImage from '../assets/images-4.jpeg'
import { SectionLabel } from '../components/SectionLabel'
import styles from './home.module.css'

export function Problem() {
  return (
    <section className={styles.problem} id="problem">
      <img src={problemImage} alt="Aqua Skimmer collecting vegetation from a water body" />
      <div className={`wrap ${styles.problemInner}`}>
        <SectionLabel>The problem</SectionLabel>
        <h2 className="display">
          One-time clean-ups
          <br />
          do not keep
          <br />
          water bodies clean.
        </h2>
        <p>
          Floating waste, weeds and pollution return when inflow points remain active and
          routine maintenance is absent.
        </p>
        <p>
          Waterbody owners often manage multiple contractors for cleaning, surveying,
          monitoring and reporting — with limited continuity and little usable data.
        </p>
        <div className={styles.line} data-signal="line" aria-hidden="true" />
      </div>
    </section>
  )
}
