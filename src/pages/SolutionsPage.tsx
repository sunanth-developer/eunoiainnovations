import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { solutions } from '../data/solutions'
import { pageSeo } from '../data/site'
import { handleAppLink, withBase } from '../lib/router'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

const images = [
  imageConfig.aqua.wide,
  imageConfig.aqua.lake,
  imageConfig.aqua.survey,
  imageConfig.aqua.aerial,
]

export function SolutionsPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.solutions.title}
        description={pageSeo.solutions.description}
        path="/solutions"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ])}
      />
      <PageHero
        kicker="Solutions"
        title={
          <>
            The right technology
            <br />
            for the water body.
          </>
        }
        lede="Aqua Skimmer, monitoring, bathymetric surveying and integrated interventions — selected against the actual condition of the site."
      />
      <section className={styles.section}>
        <div className={`wrap ${styles.cards}`}>
          {solutions.map((item, index) => (
            <a
              key={item.id}
              className={styles.card}
              href={withBase(item.href)}
              onClick={(event) => handleAppLink(event, item.href)}
            >
              <img className={styles.media} src={images[index]} alt={imageAlts.wide} />
              <p className={styles.kicker}>{item.label}</p>
              <h2>{item.name}</h2>
              <p className={styles.muted}>{item.summary}</p>
              <span className={styles.kicker}>View solution →</span>
            </a>
          ))}
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Schedule a Site Assessment</LinkButton>
        <LinkButton href="/services" variant="ghost">
          View services
        </LinkButton>
      </div>
    </div>
  )
}
