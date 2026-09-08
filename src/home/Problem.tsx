import problemImage from '../assets/images-4.jpeg'
import styles from './home.module.css'

export function Problem() {
  return (
    <section className={styles.problem} id="problem">
      <img src={problemImage} alt="Aqua Skimmer collecting vegetation from a water body" loading="lazy" />
      <div className={`wrap ${styles.problemInner}`}>
        <h2 className="display">
          One-time cleaning
          <br />
          is not a system.
        </h2>
        <p className={styles.problemLead}>
          Cleaner water bodies require continuous operations, not one-time clean-ups.
        </p>
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
