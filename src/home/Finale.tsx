import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { media, mediaAlts } from '../data/media'
import { handleAppLink } from '../lib/router'
import styles from './Finale.module.css'

export function Finale() {
  return (
    <section className={styles.section} id="close">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.product}>
        <MarineImage src={media.heroProduct} alt={mediaAlts.heroProduct} className={styles.img} />
      </div>
      <div className={styles.veil} />
      <div className={`wrap ${styles.content}`}>
        <h2 className={`display ${styles.title}`}>
          The future
          <br />
          moves on
          <br />
          water.
        </h2>
        <p className={styles.hold}>Eunoia Innovations</p>
        <div className={styles.actions}>
          <LinkButton href="/contact" onClick={(e) => handleAppLink(e, '/contact')}>
            Start a conversation
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
