import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { pageSeo } from '../data/site'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

const applications = [
  'Lake and reservoir restoration planning',
  'Siltation and storage-capacity assessment',
  'Pre- and post-dredging comparison',
  'Canal, pond and shallow-water mapping',
  'Infrastructure planning',
  'Academic/environmental studies',
  'Periodic hydrographic monitoring',
]

const deliverables = [
  'Survey plan',
  'Geo-referenced depth observations',
  'Bathymetric contour map',
  'Depth profile sections',
  'Digital terrain representation where within scope',
  'Area/volume calculations where methodology permits',
  'Survey report',
]

export function SurveyPage() {
  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.survey.title}
        description={pageSeo.survey.description}
        path="/solutions/usv-bathymetric-survey"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
          { name: 'USV Bathymetric Survey', path: '/solutions/usv-bathymetric-survey' },
        ])}
      />
      <PageHero
        kicker="USV bathymetric survey"
        title={
          <>
            Map what lies
            <br />
            beneath.
          </>
        }
        lede="Map underwater depth and terrain using an unmanned survey vessel designed for shallow, restricted and operationally challenging water bodies."
      />
      <section className={styles.section}>
        <div className={`wrap ${styles.grid2}`}>
          <img className={styles.media} src={imageConfig.aqua.survey} alt={imageAlts.survey} />
          <div>
            <p className={styles.kicker}>Applications</p>
            <ul className={styles.list} style={{ marginTop: 20 }}>
              {applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="wrap">
          <p className={styles.kicker}>Deliverables</p>
          <ul className={styles.list} style={{ marginTop: 20, maxWidth: '40rem' }}>
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.muted} style={{ marginTop: 24, maxWidth: '40rem' }}>
            Survey methodology, coverage and outputs are defined per assignment. Universal
            accuracy figures are not published here because they depend on site conditions
            and agreed scope.
          </p>
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Request a survey assignment</LinkButton>
        <LinkButton href="/engagement-models" variant="ghost">
          Survey engagement
        </LinkButton>
      </div>
    </div>
  )
}
