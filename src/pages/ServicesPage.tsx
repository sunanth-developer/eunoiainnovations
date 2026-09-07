import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { faqs, serviceProcess, services } from '../data/services'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function ServicesPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.services.title}
        description={pageSeo.services.description}
        path="/services"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Waterbody maintenance services',
            provider: 'Eunoia Innovations',
            description: pageSeo.services.description,
          },
        ]}
      />
      <PageHero
        kicker="Services"
        title={
          <>
            From site assessment
            <br />
            to sustainable
            <br />
            handover.
          </>
        }
        lede="A practical operating sequence for governments, corporations and institutions that need continuity, not a one-day clean-up."
      />
      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Process</p>
          <div className={styles.chips} style={{ marginTop: 24 }}>
            {serviceProcess.map((item, index) => (
              <span key={item} className={styles.kicker}>
                {item}
                {index < serviceProcess.length - 1 ? ' →' : ''}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`wrap ${styles.cards}`}>
          {services.map((item) => (
            <article key={item.title} className={styles.card}>
              <h2>{item.title}</h2>
              <p className={styles.muted}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Questions</p>
          <div className={styles.grid2} style={{ marginTop: 28 }}>
            {faqs.map((item) => (
              <article key={item.q} className={styles.faq}>
                <h3>{item.q}</h3>
                <p className={styles.muted}>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Schedule a Site Assessment</LinkButton>
        <LinkButton href="/engagement-models" variant="ghost">
          Engagement models
        </LinkButton>
      </div>
    </div>
  )
}
