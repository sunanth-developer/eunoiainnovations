import { LinkButton } from '../components/Button'
import { imageAlts, imageConfig } from '../config/imageConfig'
import styles from './home.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img className={styles.heroBg} src={imageConfig.aqua.fieldHero} alt={imageAlts.fieldHero} />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={`wrap ${styles.heroCopy}`}>
        <h1 className="display" data-hero="title">
          Robotic solutions
          <br />
          for cleaner, better-managed
          <br />
          water bodies.
        </h1>
        <p data-hero="copy">
          Eunoia Innovations builds and deploys electric unmanned vessels and integrated
          services for floating waste removal, water quality monitoring, bathymetric
          surveying and year-round waterbody maintenance.
        </p>
        <div className={styles.actions} data-hero="actions">
          <LinkButton href="/contact">Request a site demo</LinkButton>
          <LinkButton href="/solutions" variant="ghost" className={styles.ghostLight}>
            Explore solutions
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
