import { HowItWorks } from '../home/HowItWorks'
import { Engineering } from '../home/Engineering'
import { Flagship } from '../home/Flagship'
import { Autonomy } from '../home/Autonomy'
import { Deployments } from '../home/Deployments'
import { Contact } from '../home/Contact'
import { Finale } from '../home/Finale'
import { useScrollRefresh } from '../hooks/useScrollRefresh'
import { usePageTitle } from '../pages/pageHero'
import { AquaHero } from './Hero'
import { AquaChallenge } from './Challenge'
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
      <Deployments />
      <Autonomy />
      <Contact />
      <Finale />
    </div>
  )
}
