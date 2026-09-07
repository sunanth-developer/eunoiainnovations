import { LinkButton } from '../components/Button'
import { IndiaMap } from '../components/IndiaMap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { handleAppLink } from '../lib/router'
import styles from './Deployments.module.css'

export function Deployments() {
  return (
    <section className={styles.section} id="deployments">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>09 / Deployments</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Proven
          <br />
          on water.
        </h2>
        <p className="lede">
          Fielded Aqua Skimmer work across Hyderabad, Secunderabad, Kolkata and Lucknow.
        </p>
      </div>
      <div className="wrap">
        <IndiaMap />
      </div>
      <div className={`wrap ${styles.shot}`}>
        <MarineImage src={media.aquaSide} alt={mediaAlts.aquaSide} className={styles.img} />
        <LinkButton href="/deployments" variant="line" onClick={(e) => handleAppLink(e, '/deployments')}>
          All deployments
        </LinkButton>
      </div>
    </section>
  )
}
