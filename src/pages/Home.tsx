import { organizationSchema, Seo } from '../components/Seo'
import { pageSeo } from '../data/site'
import { Approach } from '../home/Approach'
import { AquaStory } from '../home/AquaStory'
import { Capabilities } from '../home/Capabilities'
import { Ecosystem } from '../home/Ecosystem'
import { EngagementPreview } from '../home/EngagementPreview'
import { Finale } from '../home/Finale'
import { Hero } from '../home/Hero'
import { Maintenance } from '../home/Maintenance'
import { Problem } from '../home/Problem'
import { SelectedDeployments } from '../home/SelectedDeployments'
import { Trust } from '../home/Trust'
import { useHomeMotion } from '../home/useHomeMotion'
import { useScrollRefresh } from '../hooks/useScrollRefresh'

export function Home() {
  useScrollRefresh()
  useHomeMotion()

  return (
    <>
      <Seo
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path="/"
        jsonLd={[
          organizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Aqua Skimmer',
            brand: 'Eunoia Innovations',
            description:
              'Electric unmanned surface vessel for floating waste removal from lakes, rivers, ponds, canals and waterfronts.',
          },
        ]}
      />
      <Hero />
      <Trust />
      <Problem />
      <Approach />
      <Capabilities />
      <AquaStory />
      <Maintenance />
      <SelectedDeployments />
      <EngagementPreview />
      <Ecosystem />
      <Finale />
    </>
  )
}
