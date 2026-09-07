import { LinkButton } from '../components/Button'
import { IndiaMap } from '../components/IndiaMap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { deployments } from '../data/deployments'
import { media, mediaAlts } from '../data/media'
import { handleAppLink } from '../lib/router'
import styles from './Deployments.module.css'

type DeploymentsProps = {
  showCta?: boolean
  log?: boolean
  pageOpen?: boolean
}

export function Deployments({ showCta = true, log = false, pageOpen = false }: DeploymentsProps) {
  return (
    <section className={`${styles.section} ${pageOpen ? styles.pageOpen : ''}`} id="deployments">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>Deployments</SectionLabel>
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
      {log ? (
        <div className={`wrap ${styles.log}`}>
          {deployments.map((item) => (
            <article key={item.id}>
              <p>
                {item.date} / {item.platform}
              </p>
              <h3 className="display">
                {item.waterBody}
                <span>
                  {item.city}, {item.region}
                </span>
              </h3>
              <strong>{item.project}</strong>
              <em>{item.note}</em>
            </article>
          ))}
        </div>
      ) : null}
      <div className={`wrap ${styles.shot}`}>
        <MarineImage src={media.aquaSide} alt={mediaAlts.aquaSide} className={styles.img} />
        {showCta ? (
          <LinkButton href="/deployments" variant="line" onClick={(e) => handleAppLink(e, '/deployments')}>
            All deployments
          </LinkButton>
        ) : null}
      </div>
    </section>
  )
}
