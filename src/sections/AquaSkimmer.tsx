import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { handleAppLink } from '../lib/router'
import styles from './AquaSkimmer.module.css'

const specs = [
  { value: '150 kg', label: 'Collection capacity' },
  { value: '3 km', label: 'Remote operating range' },
  { value: 'Electric', label: 'Propulsion' },
  { value: 'Remote', label: 'Current operation' },
]

export function AquaSkimmer() {
  return (
    <section className={`section ${styles.section}`} id="aqua-skimmer">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>04 / Flagship platform</SectionLabel>
        <h2 className={`display ${styles.title}`}>Meet Aqua Skimmer.</h2>
        <p className={styles.sub}>Autonomous technology for cleaner water.</p>
        <p className="lede">
          An unmanned surface vessel designed to collect floating waste and support
          real-time water-quality monitoring. Remotely operated today. A fully
          autonomous version is under development.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/aqua-skimmer" onClick={(e) => handleAppLink(e, '/aqua-skimmer')}>
            Explore the system
          </LinkButton>
          <LinkButton href="#deployments" variant="ghost" onClick={(e) => handleAppLink(e, '#deployments')}>
            See it on water
          </LinkButton>
        </div>
      </div>

      <div className={styles.showcase}>
        <MarineImage
          src={aquaImages.hero}
          alt={imageAlts.aquaSkimmer}
          className={styles.heroImg}
        />
      </div>

      <div className={`wrap ${styles.stats}`}>
        {specs.map((item) => (
          <p key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </p>
        ))}
      </div>

      <div className={`wrap ${styles.split}`}>
        <figure className={styles.shot}>
          <MarineImage src={aquaImages.water} alt={imageAlts.aquaWater} className={styles.shotImg} />
        </figure>
        <figure className={styles.shot}>
          <MarineImage src={aquaImages.works} alt={imageAlts.aquaWorks} className={styles.shotImg} />
        </figure>
      </div>
    </section>
  )
}
