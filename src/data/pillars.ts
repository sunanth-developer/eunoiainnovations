import { media, mediaAlts } from './media'

export const pillars = [
  {
    id: 'clean',
    name: 'Clean',
    title: 'Surface cleanup',
    detail: 'Waste collection',
    copy: 'Unmanned vessels that collect floating waste from lakes, rivers and urban water bodies.',
    image: media.aquaCollection,
    alt: mediaAlts.aquaCollection,
  },
  {
    id: 'survey',
    name: 'Survey',
    title: 'Hydrographic survey',
    detail: 'Waterway mapping',
    copy: 'Extending the same marine platforms into surveying and mapping beneath the surface.',
    image: media.aquaDeployment,
    alt: mediaAlts.aquaDeployment,
  },
  {
    id: 'monitor',
    name: 'Monitor',
    title: 'Water quality',
    detail: 'Environmental data',
    copy: 'Real-time monitoring and sample collection while the vessel is already on the water.',
    image: media.aquaEngineering,
    alt: mediaAlts.aquaEngineering,
  },
  {
    id: 'secure',
    name: 'Secure',
    title: 'Future maritime',
    detail: 'Systems',
    copy: 'A longer path toward unmanned maritime operations. Concept platforms. In development.',
    image: media.aquaSide,
    alt: mediaAlts.aquaSide,
  },
] as const
