import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema, organizationSchema } from '../components/Seo'
import { beliefs, journey } from '../data/services'
import { pageSeo } from '../data/site'
import { team } from '../data/team'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function AboutPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.about.title}
        description={pageSeo.about.description}
        path="/about"
        jsonLd={[organizationSchema(), breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])]}
      />
      <PageHero
        kicker="About"
        title={
          <>
            Engineering
            <br />
            cleaner waters.
          </>
        }
        lede="Eunoia Innovations is a Hyderabad-based water technology and maritime robotics company building unmanned vessels and integrated services for cleaner, safer and better-managed water bodies."
      />

      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          <img className={styles.media} src={imageConfig.aqua.about} alt={imageAlts.about} />
          <div className={page.copy}>
            <h2 className={`display ${page.mid}`}>The company story</h2>
            <p>Eunoia Innovations began with a simple engineering question:</p>
            <p>“Can routine waterbody maintenance be made safer, more consistent and more measurable?”</p>
            <p>
              What started as a classroom project evolved into Aqua Skimmer — an electric
              unmanned vessel designed to collect floating waste from lakes, rivers, ponds,
              canals and waterfronts.
            </p>
            <p>
              Today, Eunoia is developing a wider platform of waterbody services covering
              maintenance, water quality monitoring, bathymetric surveys, vegetation
              management, impact reporting and long-term operational handover.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          <article>
            <p className={styles.kicker}>Vision</p>
            <h2 className={`display ${page.mid}`}>
              To make robotic and data-driven waterbody maintenance a standard part of urban infrastructure.
            </h2>
          </article>
          <article>
            <p className={styles.kicker}>Mission</p>
            <p className={styles.muted}>
              To help governments and organisations maintain cleaner water bodies through
              indigenous unmanned systems, reliable field operations and measurable
              environmental outcomes.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Beliefs</p>
          <div className={styles.grid2} style={{ marginTop: 28 }}>
            {beliefs.map((item) => (
              <article key={item.title} className={styles.belief}>
                <h3>{item.title}</h3>
                <p className={styles.muted}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Company journey</p>
          <h2 className={`display ${page.mid}`}>From classroom project to field operations.</h2>
          <div className={styles.timeline}>
            {journey.map((item) => (
              <article key={item.year}>
                <strong>{item.year}</strong>
                <p className={styles.muted}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Team</p>
          <h2 className={`display ${page.mid}`}>The people building and deploying the work.</h2>
          <div className={styles.grid2} style={{ marginTop: 36 }}>
            {team.map((member) => (
              <article key={member.id} className={styles.team}>
                <p className={styles.kicker}>{member.initials}</p>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className={styles.muted}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Schedule a Site Assessment</LinkButton>
        <LinkButton href="/solutions" variant="ghost">
          View solutions
        </LinkButton>
      </div>
    </div>
  )
}
