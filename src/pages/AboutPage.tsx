import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema, organizationSchema } from '../components/Seo'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { aboutLogoGroups, type LogoSlot } from '../data/partners'
import { beliefs, journey } from '../data/services'
import { pageSeo } from '../data/site'
import { advisoryBoard, team } from '../data/team'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

function LinkedInMark({ href, name }: { href?: string; name: string }) {
  const icon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
      />
    </svg>
  )

  if (href) {
    return (
      <a
        className={styles.linkedin}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${name} on LinkedIn`}
      >
        {icon}
      </a>
    )
  }

  return (
    <span className={styles.linkedin} aria-label={`${name} LinkedIn (link coming soon)`}>
      {icon}
    </span>
  )
}

function PartnerNames({ slots }: { slots: LogoSlot[] }) {
  return (
    <div className={`${styles.grid3} ${styles.partnerNames}`}>
      {slots
        .filter((slot) => slot.name)
        .map((slot) => (
          <article key={slot.id} className={styles.team}>
            <h3>{slot.name}</h3>
          </article>
        ))}
    </div>
  )
}

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

      <section className={styles.section} id="about-company">
        <div className="wrap">
          <h2 className={`display ${page.mid}`}>About Company</h2>
          <div className={styles.grid2}>
            <img className={styles.media} src={imageConfig.aqua.about} alt={imageAlts.about} />
            <div className={page.copy}>
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

          <div className={styles.grid2} style={{ marginTop: 64 }}>
            <article>
              <p className={styles.kicker}>Vision</p>
              <h3 className={`display ${page.mid}`}>
                To make robotic and data-driven waterbody maintenance a standard part of urban infrastructure.
              </h3>
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

          <p className={styles.kicker} style={{ marginTop: 64 }}>Beliefs</p>
          <div className={styles.grid2} style={{ marginTop: 28 }}>
            {beliefs.map((item) => (
              <article key={item.title} className={styles.belief}>
                <h3>{item.title}</h3>
                <p className={styles.muted}>{item.copy}</p>
              </article>
            ))}
          </div>

          <p className={styles.kicker} style={{ marginTop: 64 }}>Company journey</p>
          <h3 className={`display ${page.mid}`}>From classroom project to field operations.</h3>
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

      <section className={styles.section} id="team">
        <div className="wrap">
          <h2 className={`display ${page.mid}`}>Meet the Team</h2>
          <div className={styles.grid2} style={{ marginTop: 36 }}>
            {team.map((member) => (
              <article key={member.id} className={styles.team}>
                <p className={styles.kicker}>{member.initials}</p>
                <div className={styles.teamHead}>
                  <h3>{member.name}</h3>
                  <LinkedInMark href={member.linkedin} name={member.name} />
                </div>
                <p>{member.role}</p>
                <p className={styles.muted}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="advisory-board">
        <div className="wrap">
          <h2 className={`display ${page.mid}`}>Advisory Board</h2>
          <div className={styles.grid3} style={{ marginTop: 36 }}>
            {advisoryBoard.map((person) => (
              <article key={person.id} className={styles.team}>
                <h3>{person.name}</h3>
                {person.role ? <p className={styles.muted}>{person.role}</p> : null}
                {person.bio ? <p className={styles.muted}>{person.bio}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {aboutLogoGroups.map((group) => (
        <section key={group.id} className={styles.section} id={group.id}>
          <div className="wrap">
            <h2 className={`display ${page.mid}`}>{group.title}</h2>
            <PartnerNames slots={group.slots} />
          </div>
        </section>
      ))}

      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Schedule a Site Assessment</LinkButton>
        <LinkButton href="/solutions" variant="ghost">
          View solutions
        </LinkButton>
      </div>
    </div>
  )
}
