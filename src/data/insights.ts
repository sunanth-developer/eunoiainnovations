export type Insight = {
  id: string
  category: 'Marine robotics' | 'Water management' | 'Autonomy' | 'Deployments' | 'Survey technology'
  title: string
  excerpt: string
  body: string[]
}

export const insights: Insight[] = [
  {
    id: 'frequency-problem',
    category: 'Water management',
    title: 'It wasn’t a manpower problem. It was a frequency problem.',
    excerpt: 'Water bodies do not stay clean after a single cleanup. The work has to return.',
    body: [
      'Floating waste returns. Conditions change. Traditional cleanup often depends on putting people on the water again and again to treat the same stretch.',
      'That is the gap Aqua Skimmer was built for: an unmanned surface vessel that can collect floating waste and support water-quality monitoring, so maintenance does not end when a campaign ends.',
    ],
  },
  {
    id: 'hardware-first',
    category: 'Marine robotics',
    title: 'The problem is physical. So is the machine.',
    excerpt: 'Floating waste does not disappear through software. Something has to enter the water.',
    body: [
      'Software can plan a mission. Hardware makes the mission possible. Eunoia designs marine platforms, propulsion, collection systems and electronics around the environment they have to work in.',
      'Those systems are developed for Indian water bodies — shallow lakes, algae, silt and debris that does not stay still — then taken into the field.',
    ],
  },
  {
    id: 'remote-today',
    category: 'Autonomy',
    title: 'Remote today. Autonomous in development.',
    excerpt: 'The current Aqua Skimmer is unmanned and remotely operated. Full autonomy is the next stage, not the present one.',
    body: [
      'A crew on the bank. A vessel on the water. That is the fielded capability.',
      'Eunoia is developing autonomous navigation so marine vessels can detect obstacles and operate with less continuous human control. Those stages are labelled as such throughout this site.',
    ],
  },
  {
    id: 'four-waters',
    category: 'Deployments',
    title: 'Four waters. One platform.',
    excerpt: 'Hyderabad, Secunderabad, Kolkata, Lucknow — the same unmanned surface vessel, different conditions.',
    body: [
      'Aqua Skimmer has been piloted at Durgam Cheruvu, Nadimi Cheruvu, the Hooghly and the Gomti. Each water body asked something different of the machine.',
      'That is the point of field work: design, deploy, learn, improve.',
    ],
  },
  {
    id: 'beneath',
    category: 'Survey technology',
    title: 'The surface is only the first layer.',
    excerpt: 'Cleanup happens on the water. Surveying has to see beneath it.',
    body: [
      'Eunoia is extending its unmanned marine technology into hydrographic surveying and waterway mapping.',
      'The same logic applies: a physical vessel, a real environment, data that has to be collected rather than estimated.',
    ],
  },
]
