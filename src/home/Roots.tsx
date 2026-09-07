import { SectionLabel } from '../components/SectionLabel'
import { partners } from '../data/partners'
import { team } from '../data/team'
import teamStyles from '../sections/Team.module.css'
import ecoStyles from '../sections/Ecosystem.module.css'
import styles from './story.module.css'

const loop = ['Design', 'Build', 'Deploy', 'Learn', 'Improve'] as const

const next = [
  { label: 'Now', copy: 'Expand Aqua Skimmer applications.' },
  { label: 'Autonomy', copy: 'Develop increasingly autonomous operation.', tag: 'In development' },
  { label: 'Scale', copy: 'Larger platforms for larger water bodies.', tag: 'In development' },
  { label: 'Survey', copy: 'Expand unmanned hydrographic systems.' },
  { label: 'Maritime', copy: 'Develop future autonomous maritime applications.', tag: 'Concept' },
  { label: 'Platform', copy: 'Build a broader unmanned marine technology ecosystem.', tag: 'Long term' },
] as const

export function Roots() {
  return (
    <>
      <section className={styles.band} id="origin">
        <div className="wrap">
          <SectionLabel>12 / Origin</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Built in India.
            <br />
            Engineered
            <br />
            for the water.
          </h2>
          <div className={styles.copy}>
            <p>
              Eunoia develops marine robotics around the realities of operating on
              real water bodies — building, deploying, learning and improving through
              field experience.
            </p>
          </div>
          <ul className={styles.missions}>
            {loop.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.band} ${styles.dark}`} id="about">
        <div className="wrap">
          <SectionLabel>13 / Company</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Building
            <br />
            what software
            <br />
            alone can’t.
          </h2>
          <div className={styles.copy}>
            <p>
              Eunoia Innovations was founded in 2021 with a focus on solving physical
              problems through engineering.
            </p>
            <p>
              From water-body cleanup to unmanned surveying and autonomous navigation,
              the company is building technology designed to operate where software
              meets the physical world.
            </p>
            <p>
              <strong>The water is our operating environment.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${teamStyles.section}`} id="team">
        <div className="wrap">
          <SectionLabel>14 / Team</SectionLabel>
          <h2 className={`display ${teamStyles.title}`}>
            Built by
            <br />
            engineers.
          </h2>
          <ul className={teamStyles.grid}>
            {team.map((member) => (
              <li key={member.id} className={teamStyles.card}>
                <div className={teamStyles.portrait}>{member.initials}</div>
                <h3>{member.name}</h3>
                <p className={teamStyles.role}>{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section-tight ${ecoStyles.section}`} id="ecosystem">
        <div className="wrap">
          <SectionLabel>14 / Ecosystem</SectionLabel>
          <h2 className={`display ${ecoStyles.title}`}>
            Built with an ecosystem
            <br />
            that moves ideas to water.
          </h2>
          <ul className={ecoStyles.wall}>
            {partners.map((partner) => (
              <li key={partner.id}>
                <span>{partner.category}</span>
                <strong>{partner.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.band} id="next">
        <div className="wrap">
          <SectionLabel>15 / What’s next</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            The next mission
            <br />
            is already
            <br />
            taking shape.
          </h2>
          <ol className={styles.nodes} style={{ marginTop: 48 }}>
            {next.map((item) => (
              <li key={item.label} className={styles.node}>
                <strong>{item.label}</strong>
                <em>{item.copy}</em>
                {'tag' in item && item.tag ? <span className="label">{item.tag}</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
