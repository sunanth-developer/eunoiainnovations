import { Deployments } from '../home/Deployments'
import { Finale } from '../home/Finale'
import { Gateway } from '../home/Gateway'
import { Hero } from '../home/Hero'
import { useScrollRefresh } from '../hooks/useScrollRefresh'

export function Home() {
  useScrollRefresh()

  return (
    <>
      <Hero />
      <Gateway />
      <Deployments />
      <Finale />
    </>
  )
}
