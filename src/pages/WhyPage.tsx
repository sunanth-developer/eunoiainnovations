import { Problem } from '../home/Problem'
import { Mission } from '../home/Mission'
import { PageClose } from './PageClose'
import { usePageTitle } from './pageHero'
import page from './page.module.css'

export function WhyPage() {
  usePageTitle('Why | Eunoia Innovations')

  return (
    <div className={page.page}>
      <Mission />
      <Problem />
      <PageClose href="/technology" label="See the technology" />
    </div>
  )
}
