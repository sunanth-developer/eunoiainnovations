import { LinkButton } from '../components/Button'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, imageConfig } from '../config/imageConfig'
import styles from './home.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img className={styles.heroBg} src={imageConfig.aqua.fieldHero} alt={imageAlts.fieldHero} />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <SectionLabel>Marine robotics</SectionLabel>
        <h1 className="display">
          Robotic solutions for cleaner,
          <br />
          better-managed water bodies.
        </h1>
        <p>
          Eunoia Innovations builds and deploys electric unmanned vessels and integrated
          services for floating waste removal, water quality monitoring, bathymetric
          surveying and year-round waterbody maintenance.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/contact">Request a site demo</LinkButton>
          <LinkButton href="/solutions/aqua-skimmer" variant="ghost" className={styles.ghostLight}>
            Explore Aqua Skimmer
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
