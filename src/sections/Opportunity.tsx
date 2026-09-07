import { ImageReveal } from '../components/ImageReveal'
import { SectionLabel } from '../components/SectionLabel'
import { imageAlts, images } from '../config/imageConfig'
import styles from './Opportunity.module.css'

export function Opportunity() {
  return (
    <section className={`section ${styles.section}`} id="opportunity">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <SectionLabel>01 / The challenge</SectionLabel>
          <h2 className={`display ${styles.title}`}>
            Cleaning water once
            <br />
            isn’t enough.
          </h2>
        </div>
        <div className={styles.copy}>
          <p>Water bodies don’t stay clean after a single cleanup.</p>
          <p>
            Floating waste returns, pollution changes and water conditions evolve
            continuously. Traditional cleanup operations often depend on repeated
            manual intervention — putting people on the water again and again to
            address the same problem.
          </p>
          <p>Eunoia approaches the problem differently: build machines that can operate on the water.</p>
          <p>
            From physical cleanup to continuous monitoring, marine robotics can make
            water-body management more consistent, measurable and scalable.
          </p>
          <blockquote className={styles.quote}>
            “It wasn’t just a manpower problem.
            <br />
            It was a frequency problem.”
          </blockquote>
        </div>
      </div>
      <div className={`wrap ${styles.visual}`}>
        <ImageReveal src={images.ocean01} alt={imageAlts.ocean01} className={styles.image} />
        <p className={styles.caption}>Recurring surface load / water bodies that do not stay clean</p>
      </div>
    </section>
  )
}
