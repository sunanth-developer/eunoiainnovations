import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { IndiaMap } from '../components/IndiaMap'
import { media, mediaAlts } from '../data/media'
import { pillars } from '../data/pillars'
import { products } from '../data/products'
import { handleAppLink } from '../lib/router'
import { PageHero, usePageTitle } from './pageHero'
import page from './page.module.css'
import styles from './inner.module.css'

export function TechnologyPage() {
  usePageTitle('Technology | Eunoia Innovations')

  return (
    <div className={page.page}>
      <PageHero
        kicker="Technology"
        title="One technology. Many missions."
        lede="Marine hardware, robotics, sensing, navigation and autonomy — built as a family of unmanned systems, not a single gadget."
      />
      <section className={`wrap ${page.block}`}>
        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <article key={pillar.id}>
              <MarineImage src={pillar.image} alt={pillar.alt} />
              <p>{pillar.name}</p>
              <h2 className="display">{pillar.title}</h2>
              <span>{pillar.detail}</span>
              <em>{pillar.copy}</em>
            </article>
          ))}
        </div>
      </section>
      <section className={`wrap ${page.block}`}>
        <h2 className={`display ${page.mid}`}>Current. In development. Future.</h2>
        <div className={page.copy}>
          <p>Aqua Skimmer is remotely operated today.</p>
          <p>Assisted and autonomous navigation are under development.</p>
          <p>Fully autonomous marine operations remain a future stage.</p>
        </div>
        <div className={styles.actions}>
          <LinkButton href="/platforms" onClick={(e) => handleAppLink(e, '/platforms')}>
            See platforms
          </LinkButton>
        </div>
      </section>
    </div>
  )
}

export function PlatformsPage() {
  usePageTitle('Platforms | Eunoia Innovations')

  return (
    <div className={page.page}>
      <PageHero
        kicker="Platforms"
        title="Vessels for the work water actually asks for."
        lede="A flagship already on the water. A survey platform in development. A maritime concept further out."
      />
      <section className={`wrap ${page.block}`}>
        {products.map((product) => (
          <article key={product.id} id={product.id} className={styles.product}>
            <div className={product.fit === 'contain' ? styles.contain : styles.cover}>
              <MarineImage src={product.image} alt={product.alt} />
            </div>
            <div>
              <SectionLabel>{product.statusLabel}</SectionLabel>
              <h2 className={`display ${page.mid}`}>{product.name}</h2>
              <p className={page.copy}>{product.summary}</p>
              <LinkButton href={product.href} onClick={(e) => handleAppLink(e, product.href)}>
                {product.cta}
              </LinkButton>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export function SurveyPage() {
  usePageTitle('Hydrographic survey | Eunoia Innovations')

  return (
    <div className={page.page}>
      <PageHero
        kicker="Survey"
        title="See beneath the surface."
        lede="Eunoia is extending unmanned marine technology into hydrographic surveying and waterway mapping. AquaScanner is in development."
      />
      <section className={`wrap ${page.block}`}>
        <MarineImage src={media.aquaDeployment} alt={mediaAlts.aquaDeployment} className={styles.wide} />
        <h2 className={`display ${page.mid}`}>Position. Path. Mapping. Data.</h2>
        <div className={page.copy}>
          <p>A surface vessel travels. A survey path is recorded. The terrain under the water becomes information.</p>
          <p>No invented depths, accuracies or sensor models — the capability is the direction of the work.</p>
        </div>
      </section>
    </div>
  )
}

export function DeploymentsPage() {
  usePageTitle('Deployments | Eunoia Innovations')

  return (
    <div className={page.page}>
      <PageHero
        kicker="Deployments"
        title="Proven on water."
        lede="Verified Aqua Skimmer pilots only. Hyderabad, Secunderabad, Kolkata, Lucknow."
      />
      <section className={`wrap ${page.block}`}>
        <IndiaMap />
      </section>
      <section className={`wrap ${page.block}`}>
        <MarineImage src={media.aquaSide} alt={mediaAlts.aquaSide} className={styles.wide} />
      </section>
    </div>
  )
}
