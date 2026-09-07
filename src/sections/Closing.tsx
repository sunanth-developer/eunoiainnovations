import { BackgroundVideo } from '../components/BackgroundVideo'
import { LinkButton } from '../components/Button'
import { imageAlts, images } from '../config/imageConfig'
import { handleAppLink } from '../lib/router'
import styles from './Closing.module.css'

export function Closing() {
  return (
    <section className={styles.section} id="close">
      <BackgroundVideo poster={images.horizon} alt={imageAlts.horizon} className={styles.bg} />
      <div className={styles.veil} />
      <div className={`wrap ${styles.content}`}>
        <h2 className={`display ${styles.title}`}>
          The future of marine operations
          <br />
          starts on the water.
        </h2>
        <p className={styles.copy}>
          Whether you are looking to clean a water body, survey a waterway, deploy
          marine robotics or explore autonomous maritime systems, let’s build the
          right solution.
        </p>
        <div className={styles.actions}>
          <LinkButton href="#contact" onClick={(e) => handleAppLink(e, '#contact')}>
            Start a conversation
          </LinkButton>
          <LinkButton href="#platform" variant="ghost" onClick={(e) => handleAppLink(e, '#platform')}>
            Explore our technology
          </LinkButton>
        </div>
      </div>
      <div className={styles.vessel} aria-hidden="true" />
    </section>
  )
}
