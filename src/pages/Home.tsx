import { About } from '../home/About'
import { Autonomy } from '../home/Autonomy'
import { Contact } from '../home/Contact'
import { Deployments } from '../home/Deployments'
import { Engineering } from '../home/Engineering'
import { Finale } from '../home/Finale'
import { Flagship } from '../home/Flagship'
import { Future } from '../home/Future'
import { Hero } from '../home/Hero'
import { HowItWorks } from '../home/HowItWorks'
import { India } from '../home/India'
import { Mission } from '../home/Mission'
import { Notes } from '../home/Notes'
import { Platforms } from '../home/Platforms'
import { Problem } from '../home/Problem'
import { Survey } from '../home/Survey'
import { Team } from '../home/Team'
import { Technology } from '../home/Technology'
import { WaterData } from '../home/WaterData'
import { useScrollRefresh } from '../hooks/useScrollRefresh'

export function Home() {
  useScrollRefresh()

  return (
    <>
      <Hero />
      <Mission />
      <Problem />
      <Technology />
      <Platforms />
      <Flagship />
      <HowItWorks />
      <Engineering />
      <Deployments />
      <WaterData />
      <Autonomy />
      <Survey />
      <Future />
      <India />
      <About />
      <Team />
      <Notes />
      <Contact />
      <Finale />
    </>
  )
}
