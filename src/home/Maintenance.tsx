import { CompareSlider } from '../components/CompareSlider'
import { LinkButton } from '../components/Button'
import { imageAlts, imageConfig } from '../config/imageConfig'
import styles from './home.module.css'

export function Maintenance() {
  return (
    <section className={styles.maintain} id="maintenance">
      <div className="wrap">
        <div className={styles.maintainHead}>
          <h2 className={`display ${styles.title}`}>
            The real outcome is not a clean-up day.
            It is a water body that stays maintained.
          </h2>
        </div>
        <CompareSlider
          before={imageConfig.aqua.waste}
          after={imageConfig.aqua.impact}
          beforeAlt={imageAlts.waste}
          afterAlt={imageAlts.impact}
          beforeLabel="Before / surface condition"
          afterLabel="After / maintained condition"
        />
        <div className={styles.maintainCopy}>
          <p className="lede">
            Eunoia supports scheduled operations, operator deployment, equipment upkeep,
            waste documentation, monitoring and monthly impact reporting.
          </p>
          <p className="lede">
            For CSR and public projects, the programme can conclude with staff training,
            SOPs and a sustainable handover to the municipality or designated local operator.
          </p>
          <div className={styles.actions}>
            <LinkButton href="/services">Explore maintenance programmes</LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
