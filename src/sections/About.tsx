import { LinkButton } from '../components/Button'
import { ImageReveal } from '../components/ImageReveal'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, images } from '../config/imageConfig'
import { handleAppLink } from '../lib/router'
import styles from './About.module.css'

const roadmap = [
  { label: 'Now', copy: 'Scale Aqua Skimmer deployments and expand municipal water-body applications.' },
  { label: 'Next', copy: 'Develop a fully autonomous Aqua Skimmer capable of operating without a human operator.' },
  { label: 'Expand', copy: 'Develop a larger Aqua Skimmer with greater collection capacity and range for larger lakes, rivers and coastal stretches.' },
  { label: 'Survey', copy: 'Scale the unmanned survey vessel platform for hydrographic and bathymetric applications.' },
  { label: 'Maritime', copy: 'Extend autonomous navigation technology into defence-focused unmanned vessels.' },
  { label: 'Long term', copy: 'An end-to-end unmanned marine technology platform spanning sustainability, survey and defence.' },
]

export function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>02 / Eunoia Innovations</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Building machines
            <br />
            for the real world.
          </h2>
          <div className={styles.copy}>
            <p>
              Eunoia Innovations is a deep-tech company developing autonomous marine
              robotics and unmanned surface vessels for real-world applications.
            </p>
            <p>
              Born from a simple idea and developed through hands-on engineering,
              Eunoia builds the hardware, electronics and systems required to
              operate where conventional solutions struggle.
            </p>
            <p>
              From polluted urban lakes to rivers, waterways and future maritime
              missions, the focus remains the same: solve the physical problem.
              Build the system. Put it on the water. Learn from reality. Improve it.
            </p>
            <p className={styles.emphasis}>
              We don’t build technology for the laboratory alone. We build for the
              water.
            </p>
          </div>
        </div>
        <div>
          <ImageReveal src={images.about} alt={imageAlts.about} className={styles.image} />
        </div>
      </div>

      <div className={`wrap ${styles.extra}`}>
        <div>
          <p className="label">11 / Our approach</p>
          <h3 className={`display ${styles.mid}`}>
            The problem is physical.
            <br />
            So is the solution.
          </h3>
          <p>
            Floating waste doesn’t disappear through an app. Someone — or something
            — has to physically enter the water, collect it and bring it back. That
            is why Eunoia chose deep-tech hardware.
          </p>
          <p className={styles.emphasis}>
            Software can optimise the mission. Hardware makes the mission possible.
          </p>
        </div>
        <div>
          <p className="label">12 / Indian deep tech</p>
          <h3 className={`display ${styles.mid}`}>
            Built in India.
            <br />
            Engineered for the water.
          </h3>
          <p>
            Eunoia develops marine robotics around the realities of Indian water
            bodies — from shallow and silty lakes to algae-heavy environments and
            unpredictable floating debris. Experience in those conditions is part of
            what makes the platform adaptable to other regions facing similar
            challenges.
          </p>
        </div>
      </div>

      <div className={`wrap ${styles.roadmapWrap}`}>
        <p className="label">13 / What’s next</p>
        <h3 className={`display ${styles.mid}`}>
          The next generation
          <br />
          is already taking shape.
        </h3>
        <ol className={styles.roadmap}>
          {roadmap.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.copy}</strong>
            </li>
          ))}
        </ol>
      </div>

      <div className={`wrap ${styles.close}`}>
        <h3 className={`display ${styles.title}`}>
          Cleaner water.
          <br />
          Smarter systems.
          <br />
          A more autonomous future.
        </h3>
        <p>
          Eunoia builds technology for environments where software alone isn’t
          enough. Machines that collect. Machines that survey. Machines that
          monitor. And, ultimately, machines that can operate autonomously.
        </p>
        <LinkButton href="#contact" onClick={(e) => handleAppLink(e, '#contact')}>
          Work with Eunoia
        </LinkButton>
      </div>
    </section>
  )
}
