import { SectionLabel } from '../components/SectionLabel'
import styles from './story.module.css'

export function Horizon() {
  return (
    <section className={`${styles.band} ${styles.dark}`} id="future">
      <div className="wrap">
        <SectionLabel>11 / Future systems</SectionLabel>
        <p className="label">Concept / In development</p>
        <h2 className={`display ${styles.title}`}>
          From cleaner
          <br />
          waters to smarter
          <br />
          maritime systems.
        </h2>
        <div className={styles.copy}>
          <p>
            Eunoia is extending its experience in unmanned marine platforms and
            autonomous navigation toward future maritime surveillance and security
            applications.
          </p>
          <p>
            <strong>Sentinel-M</strong> is a defence-focused unmanned surface vessel
            concept. It is not an operational defence product.
          </p>
        </div>
      </div>
    </section>
  )
}
