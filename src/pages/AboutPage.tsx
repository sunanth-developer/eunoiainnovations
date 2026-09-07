import { About } from '../home/About'
import { India } from '../home/India'
import { Team } from '../home/Team'
import { Contact } from '../home/Contact'
import { PageHero, usePageTitle } from './pageHero'
import page from './page.module.css'

export function AboutPage() {
  usePageTitle('About | Eunoia Innovations')

  return (
    <div className={page.page}>
      <PageHero
        kicker="About"
        title="Indian deep-tech. Marine robotics. Founded 2021."
        lede="Eunoia Innovations builds unmanned marine systems for cleaner water, surveying and the longer path toward autonomous maritime operations."
      />
      <About />
      <India />
      <Team />
      <Contact />
    </div>
  )
}
