import aquaHero from '../assets/aqua-skimmer-3-e1712343412444-copy-1024x576.png'
import { media, mediaAlts } from '../data/media'

/** @deprecated Use `media` from `src/data/media.ts`. */
export const aquaImages = {
  hero: media.heroProduct,
  side: media.aquaSide,
  collection: media.aquaCollection,
  water: media.aquaDeployment,
  engineering: media.aquaEngineering,
  works: media.aquaWorks,
} as const

/** @deprecated Use `media` from `src/data/media.ts`. */
export const images = {
  hero: media.heroProduct,
  ocean01: media.aquaDeployment,
  ocean02: media.aquaWorks,
  aquaSkimmer: media.aquaSkimmerRender,
  survey: media.aquaDeployment,
  defence: media.heroProduct,
  underwater: media.aquaWorks,
  indiaMap: media.aquaDeployment,
  teamPlaceholder: '',
  impact: media.aquaDeployment,
  vessel: media.aquaSkimmerRender,
  horizon: media.aquaDeployment,
  aerial: media.aquaCollection,
  waste: media.aquaCollection,
  lake: media.aquaSide,
  about: media.aquaSide,
} as const

export const videos = {
  hero: { mp4: '', webm: '', poster: aquaHero },
  aquaSkimmer: { mp4: '', webm: '', poster: aquaHero },
  survey: { mp4: '', webm: '', poster: aquaHero },
  background: { mp4: '', webm: '', poster: aquaHero },
} as const

export const imageAlts = {
  hero: mediaAlts.heroProduct,
  ocean01: mediaAlts.aquaDeployment,
  ocean02: mediaAlts.aquaWorks,
  aquaSkimmer: mediaAlts.aquaSkimmerRender,
  aquaSide: mediaAlts.aquaSide,
  aquaCollection: mediaAlts.aquaCollection,
  aquaWater: mediaAlts.aquaDeployment,
  aquaEngineering: mediaAlts.aquaEngineering,
  aquaWorks: mediaAlts.aquaWorks,
  survey: 'Hydrographic survey storytelling visual',
  defence: 'Future maritime systems visual',
  underwater: mediaAlts.aquaWorks,
  indiaMap: mediaAlts.aquaDeployment,
  teamPlaceholder: 'Eunoia team',
  impact: mediaAlts.aquaDeployment,
  vessel: mediaAlts.aquaSkimmerRender,
  horizon: mediaAlts.aquaDeployment,
  aerial: mediaAlts.aquaCollection,
  waste: mediaAlts.aquaCollection,
  lake: mediaAlts.aquaSide,
  about: mediaAlts.aquaSide,
} as const

export type ImageKey = keyof typeof images
