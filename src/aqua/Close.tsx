import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { aquaImages, imageAlts } from '../config/imageConfig'
import { handleAppLink } from '../lib/router'
import styles from './Close.module.css'

export function AquaClose() {
  return (
    <section className={styles.section} id="close">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.product}>
        <MarineImage src={aquaImages.hero} alt={imageAlts.aquaSkimmer} className={styles.img} />
      </div>
      <div className={styles.veil} />
      <div className={`wrap ${styles.content}`}>
        <h2 className={`display ${styles.title}`}>
          Cleaner water
          <br />
          doesn’t happen once.
        </h2>
        <p className={`display ${styles.hold}`}>
          It happens
          <br />
          continuously.
        </p>
        <div className={styles.actions}>
          <LinkButton href="#contact" onClick={(e) => handleAppLink(e, '#contact')}>
            Talk to Eunoia
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
