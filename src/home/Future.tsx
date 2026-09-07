import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media } from '../data/media'
import styles from './Future.module.css'

export function Future() {
  return (
    <section className={styles.section} id="future">
      <div className={styles.media} aria-hidden="true">
        <MarineImage src={media.aquaDeployment} alt="" className={styles.img} />
        <div className={styles.fog} />
      </div>
      <div className={`wrap ${styles.inner}`}>
        <SectionLabel>13 / Future maritime systems</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          From cleaner
          <br />
          waters to
          <br />
          smarter
          <br />
          maritime systems.
        </h2>
        <p className={styles.status}>Concept / in development</p>
        <p className="lede">
          Sentinel-M is a defence-focused unmanned surface vessel in development for
          future maritime applications. It is a concept platform — not a fielded
          product, and not a claim of weapons, range or contracts.
        </p>
      </div>
    </section>
  )
}
