import { SectionLabel } from '../components/SectionLabel'
import styles from './story.module.css'

export function About() {
  return (
    <section className={`${styles.band} ${styles.dark}`} id="about">
      <div className="wrap">
        <SectionLabel>15 / About</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Building
          <br />
          what software
          <br />
          alone can’t.
        </h2>
        <div className={styles.copy}>
          <p>Eunoia Innovations is an Indian deep-tech company founded in 2021.</p>
          <p>
            The work is marine robotics: unmanned systems for environmental
            sustainability, hydrographic surveying and, over time, autonomous
            maritime operations.
          </p>
          <p>The flagship proof is Aqua Skimmer. The company is larger than one vessel.</p>
        </div>
      </div>
    </section>
  )
}
