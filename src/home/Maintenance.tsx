import { CompareSlider } from '../components/CompareSlider'
import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, imageConfig } from '../config/imageConfig'
import styles from './home.module.css'

export function Maintenance() {
  return (
    <section className={styles.maintain} id="maintenance">
      <div className={`wrap ${styles.maintainSplit}`}>
        <div>
          <SectionLabel>Maintenance matters</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            The real outcome
            <br />
            is not a clean-up day.
            <br />
            It is a water body
            <br />
            that stays maintained.
          </h2>
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
        <CompareSlider
          before={imageConfig.aqua.waste}
          after={imageConfig.aqua.impact}
          beforeAlt={imageAlts.waste}
          afterAlt={imageAlts.impact}
          beforeLabel="Surface conditions"
          afterLabel="Routine operations"
        />
      </div>
    </section>
  )
}
