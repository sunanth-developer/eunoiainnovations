import { useState } from 'react'
import { LinkButton } from '../components/Button'
import { ProjectsMap } from '../components/ProjectsMap'
import { SectionLabel } from '../components/SectionLabel'
import { publicProjects } from '../data/projects'
import styles from './home.module.css'

export function SelectedDeployments() {
  const featured = publicProjects.find((item) => item.featured) ?? publicProjects[0]
  const [selected, setSelected] = useState(featured)

  return (
    <section className={styles.projects} id="projects">
      <div className="wrap">
        <SectionLabel>Selected deployments</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Technology
          <br />
          proven
          <br />
          on the water.
        </h2>
        <p className="lede">
          Explore how Eunoia has deployed Aqua Skimmer and related services across lakes,
          rivers and waterfront environments.
        </p>
        <div style={{ marginTop: 48 }}>
          <ProjectsMap selectedId={selected.id} onSelect={setSelected} />
        </div>
        <div className={styles.projectActions}>
          <LinkButton href={`/projects/${selected.slug}`}>Read case study</LinkButton>
          <LinkButton href="/projects" variant="ghost">
            All projects
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
