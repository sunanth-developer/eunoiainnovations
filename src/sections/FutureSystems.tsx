import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, images } from '../config/imageConfig'
import styles from './FutureSystems.module.css'

export function FutureSystems() {
  return (
    <section className={`section ${styles.section}`} id="future">
      <div className={styles.bg}>
        <MarineImage src={images.defence} alt={imageAlts.defence} className={styles.img} />
      </div>
      <div className={`wrap ${styles.content}`}>
        <p className={styles.badge}>Concept / In development</p>
        <SectionLabel>10 / Future systems</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          From cleaner waters
          <br />
          to smarter maritime systems.
        </h2>
        <p className="lede">
          The same core challenge that drives environmental marine robotics also
          exists in maritime security: how can machines operate reliably on the
          water without putting people in every situation?
        </p>
        <p className="lede">
          Eunoia is extending its autonomy and navigation capabilities toward
          defence-focused unmanned surface vessels for future surveillance, patrol
          and maritime security applications.
        </p>
        <div className={styles.sentinel}>
          <p className="label">Future platform</p>
          <h3 className={`display ${styles.sub}`}>Sentinel-M</h3>
          <p className={styles.caption}>A new direction for unmanned maritime security.</p>
          <p className="lede">
            A dedicated defence-focused unmanned surface vessel, now in concept.
            It extends Eunoia’s marine autonomy work into defence-oriented missions.
            It is not an operational defence product.
          </p>
        </div>
      </div>
    </section>
  )
}
