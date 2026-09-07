import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

const developed = [
  {
    title: 'Aqua Skimmer',
    copy: 'Eunoia-developed electric unmanned surface vessel for floating waste collection.',
  },
  {
    title: 'Field operations',
    copy: 'Planned cleaning, operator deployment, documentation and maintenance routines.',
  },
  {
    title: 'Monitoring and survey',
    copy: 'Selected water-quality measurements and unmanned bathymetric survey assignments.',
  },
]

const partnered = [
  'Floating boom barriers',
  'Mechanical weed harvesting',
  'Ultrasonic algae management',
  'Biological water treatment',
  'Drone and site survey',
  'Waste handling coordination',
]

export function IntegratedPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.integrated.title}
        description={pageSeo.integrated.description}
        path="/solutions/integrated-waterbody-solutions"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'Integrated Solutions', path: '/solutions/integrated-waterbody-solutions' },
        ])}
      />
      <PageHero
        kicker="Integrated solutions"
        title={
          <>
            Not every
            <br />
            water problem
            <br />
            needs one machine.
          </>
        }
        lede="Eunoia assesses site conditions and brings together suitable cleaning, monitoring, surveying, vegetation-management and preventive solutions under one execution plan."
      />
      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          <img className={styles.media} src={imageConfig.aqua.aerial} alt={imageAlts.aerial} />
          <div>
            <p className={styles.kicker}>Eunoia-developed technology</p>
            <div style={{ marginTop: 20, display: 'grid', gap: 20 }}>
              {developed.map((item) => (
                <article key={item.title}>
                  <h2 className={`display ${page.mid}`}>{item.title}</h2>
                  <p className={styles.muted}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Partner-enabled interventions</p>
          <p className={styles.muted} style={{ margin: '16px 0 28px', maxWidth: '40rem' }}>
            These interventions may be sourced or coordinated through specialist partners.
            They are not manufactured by Eunoia.
          </p>
          <ul className={styles.list}>
            {partnered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Discuss an integrated project</LinkButton>
        <LinkButton href="/services" variant="ghost">
          How we deliver
        </LinkButton>
      </div>
    </div>
  )
}
