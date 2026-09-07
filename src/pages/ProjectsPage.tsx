import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { ProjectsMap } from '../components/ProjectsMap'
import { Seo, breadcrumbSchema } from '../components/Seo'
import { publicProjects } from '../data/projects'
import { pageSeo } from '../data/site'
import { handleAppLink, withBase } from '../lib/router'
import { PageHero } from './pageHero'
import page from './page.module.css'
import styles from './site.module.css'

export function ProjectsPage() {
  const featured = publicProjects.find((item) => item.featured) ?? publicProjects[0]
  const [selected, setSelected] = useState(featured)

  return (
    <div className={page.page}>
      <Seo
        title={pageSeo.projects.title}
        description={pageSeo.projects.description}
        path="/projects"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ])}
      />
      <PageHero
        kicker="Projects"
        title={
          <>
            Technology
            <br />
            proven
            <br />
            on the water.
          </>
        }
        lede="Explore how Eunoia has deployed Aqua Skimmer and related services across lakes, rivers and waterfront environments."
      />
      <section className={styles.section}>
        <div className="wrap">
          <ProjectsMap selectedId={selected.id} onSelect={setSelected} />
          <div className={styles.drawer}>
            <p className={styles.kicker}>
              {selected.city} / {selected.waterBody}
            </p>
            <h2 className={`display ${page.mid}`}>{selected.type}</h2>
            <p className={styles.muted}>{selected.summary}</p>
            <div className={page.close}>
              <LinkButton href={`/projects/${selected.slug}`}>Read case study</LinkButton>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`wrap ${styles.cards}`}>
          {publicProjects.map((item) => (
            <a
              key={item.id}
              className={styles.card}
              href={withBase(`/projects/${item.slug}`)}
              onClick={(event) => handleAppLink(event, `/projects/${item.slug}`)}
            >
              <p className={styles.kicker}>{item.city}</p>
              <h2>{item.waterBody}</h2>
              <p>{item.type}</p>
              <p className={styles.muted}>{item.summary}</p>
              <span className={styles.kicker}>Read case study →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
