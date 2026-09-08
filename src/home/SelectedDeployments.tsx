import { useRef, useState } from 'react'
import { LinkButton } from '../components/Button'
import { ProjectsMap } from '../components/ProjectsMap'
import { publicProjects } from '../data/projects'
import { useDeploymentsScroll } from '../hooks/useDeploymentsScroll'
import styles from './home.module.css'

export function SelectedDeployments() {
  const featured = publicProjects.find((item) => item.featured) ?? publicProjects[0]
  const [selected, setSelected] = useState(featured)
  const pinRef = useRef<HTMLDivElement>(null)
  useDeploymentsScroll(pinRef, setSelected, 'home-deployments-pin')

  return (
    <section className={styles.projects} id="projects">
      <div className="wrap">
        <h2 className={`display ${styles.title}`}>
          Technology
          <br />
          proven on the water.
        </h2>
        <p className="lede">
          Explore how Eunoia has deployed Aqua Skimmer and related services across lakes,
          rivers and waterfront environments.
        </p>
        <div ref={pinRef}>
          <div className={styles.deployPin}>
            <ProjectsMap selectedId={selected.id} onSelect={setSelected} tone={'dark'} />
            <div className={styles.projectActions}>
              <LinkButton href={`/projects/${selected.slug}`}>Read case study</LinkButton>
              <LinkButton href="/projects" variant="ghost" className={styles.ghostLight}>
                All projects
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
