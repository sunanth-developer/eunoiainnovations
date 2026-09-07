import { About } from '../home/About'
import { India } from '../home/India'
import { Team } from '../home/Team'
import { PageClose } from './PageClose'
import { usePageTitle } from './pageHero'
import page from './page.module.css'

export function AboutPage() {
  usePageTitle('About | Eunoia Innovations')

  return (
    <div className={page.page}>
      <About />
      <India />
      <Team />
      <PageClose href="/contact" label="Start a conversation" secondaryHref="/blog" secondaryLabel="Blog" />
    </div>
  )
}
