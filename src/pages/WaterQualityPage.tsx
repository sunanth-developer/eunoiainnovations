import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { aquaSensors } from '../data/solutions'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function WaterQualityPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.waterQuality.title}
        description={pageSeo.waterQuality.description}
        path="/solutions/water-quality-monitoring"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'Water Quality Monitoring', path: '/solutions/water-quality-monitoring' },
        ])}
      />
      <PageHero
        kicker="Water quality monitoring"
        title={
          <>
            See what
            <br />
            the water
            <br />
            is telling you.
          </>
        }
        lede="Capture selected water parameters at the site to support routine observation, trend analysis, field decisions and project reporting."
      />
      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          <img className={styles.media} src={imageConfig.aqua.lake} alt={imageAlts.lake} />
          <div>
            <p className={styles.kicker}>Parameters</p>
            <ul className={styles.list} style={{ marginTop: 20 }}>
              {aquaSensors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.muted} style={{ marginTop: 28 }}>
              Field sensor readings are intended for monitoring and decision support.
              Regulatory compliance or detailed chemical/biological analysis may require
              samples to be tested by an accredited laboratory.
            </p>
          </div>
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Schedule a Site Assessment</LinkButton>
        <LinkButton href="/solutions" variant="ghost">
          All solutions
        </LinkButton>
      </div>
    </div>
  )
}
