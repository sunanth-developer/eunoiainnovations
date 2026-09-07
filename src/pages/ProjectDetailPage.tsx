import { LinkButton } from '../components/Button'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { projectBySlug } from '../data/projects'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

type ProjectDetailPageProps = {
  slug: string
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = projectBySlug(slug)

  if (!project) {
    return (
      <div className={page.page}>
        <PageHero kicker="Projects" title="Case study not found." lede="That project is unpublished or does not exist." />
        <div className={`wrap ${page.close}`}>
          <LinkButton href="/projects">Back to projects</LinkButton>
        </div>
      </div>
    )
  }

  const blocks = [
    { title: 'Project overview', copy: project.summary },
    { title: 'Challenge', copy: project.challenge },
    { title: 'Eunoia intervention', copy: project.intervention },
    { title: 'Operations', copy: project.operations },
    { title: 'Results', copy: project.results },
    { title: 'Next step', copy: project.next },
  ].filter((item) => item.copy)

  return (
    <div className={page.page}>
      <Seo
        title={`${project.waterBody}, ${project.city} | Eunoia Innovations`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.waterBody, path: `/projects/${project.slug}` },
        ])}
      />
      <PageHero
        kicker={`${project.city} · ${project.region}`}
        title={
          <>
            {project.waterBody}
          </>
        }
        lede={project.type}
      />
      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.grid3}>
            <article>
              <p className={styles.kicker}>Location</p>
              <p>{project.city}, {project.region}</p>
            </article>
            <article>
              <p className={styles.kicker}>Waterbody</p>
              <p>{project.waterBody}</p>
            </article>
            <article>
              <p className={styles.kicker}>Project type</p>
              <p>{project.type}</p>
            </article>
            {project.date ? (
              <article>
                <p className={styles.kicker}>Date</p>
                <p>{project.date}</p>
              </article>
            ) : null}
            {project.duration ? (
              <article>
                <p className={styles.kicker}>Duration</p>
                <p>{project.duration}</p>
              </article>
            ) : null}
          </div>
          {project.metrics?.length ? (
            <div className={styles.grid3} style={{ marginTop: 36 }}>
              {project.metrics.map((metric) => (
                <article key={metric.label}>
                  <p className={styles.kicker}>{metric.label}</p>
                  <p>{metric.value}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <section className={styles.section}>
        <div className={`wrap ${page.copy}`}>
          {blocks.map((item) => (
            <article key={item.title}>
              <p className={styles.kicker}>{item.title}</p>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={`wrap ${page.close}`}>
        <LinkButton href="/contact">Discuss a similar water body</LinkButton>
        <LinkButton href="/projects" variant="ghost">
          All projects
        </LinkButton>
      </div>
    </div>
  )
}
