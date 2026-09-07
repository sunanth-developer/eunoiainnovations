import { Autonomy } from '../home/Autonomy'
import { Future } from '../home/Future'
import { Platforms } from '../home/Platforms'
import { Survey } from '../home/Survey'
import { Technology } from '../home/Technology'
import { WaterData } from '../home/WaterData'
import { Deployments } from '../home/Deployments'
import { PageClose } from './PageClose'
import { usePageTitle } from './pageHero'
import page from './page.module.css'

export function TechnologyPage() {
  usePageTitle('Technology | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Technology showCta={false} />
      <Autonomy />
      <WaterData />
      <PageClose href="/platforms" label="See platforms" secondaryHref="/contact" secondaryLabel="Contact" />
    </div>
  )
}

export function PlatformsPage() {
  usePageTitle('Platforms | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Platforms />
      <Future />
      <PageClose href="/aqua-skimmer" label="Explore Aqua Skimmer" secondaryHref="/survey" secondaryLabel="Survey systems" />
    </div>
  )
}

export function SurveyPage() {
  usePageTitle('Hydrographic survey | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Survey showCta={false} />
      <PageClose href="/platforms" label="All platforms" secondaryHref="/contact" secondaryLabel="Contact" />
    </div>
  )
}

export function DeploymentsPage() {
  usePageTitle('Deployments | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Deployments showCta={false} log pageOpen />
      <PageClose href="/aqua-skimmer" label="Explore Aqua Skimmer" secondaryHref="/contact" secondaryLabel="Contact" />
    </div>
  )
}
