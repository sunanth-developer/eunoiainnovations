import { Engineering } from '../home/Engineering'
import { Flagship } from '../home/Flagship'
import { HowItWorks } from '../home/HowItWorks'
import { Autonomy } from '../home/Autonomy'
import { useScrollRefresh } from '../hooks/useScrollRefresh'
import { PageClose } from '../pages/PageClose'
import { usePageTitle } from '../pages/pageHero'
import { AquaChallenge } from './Challenge'
import { AquaHero } from './Hero'
import styles from './page.module.css'

export function AquaSkimmerPage() {
  usePageTitle('Aqua Skimmer | Eunoia Innovations')
  useScrollRefresh()

  return (
    <div className={styles.page}>
      <AquaHero />
      <AquaChallenge />
      <Flagship showCta={false} />
      <HowItWorks />
      <Engineering />
      <Autonomy />
      <PageClose
        href="/deployments"
        label="See deployments"
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />
    </div>
  )
}
