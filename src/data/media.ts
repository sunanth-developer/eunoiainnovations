import aquaHero from '../assets/aqua-skimmer-cutout.png'
import aquaSide from '../assets/images-2.jpeg'
import aquaCollection from '../assets/images-3.jpeg'
import aquaWater from '../assets/images-4.jpeg'
import aquaEngineering from '../assets/images-5.jpeg'
import aquaWorks from '../assets/images-6.jpeg'
import logoMark from '../assets/1644349941075.jpeg'

/**
 * Central media registry. Swap files here when higher-resolution
 * photography, video or GLB assets arrive.
 */
export const media = {
  logo: logoMark,
  heroProduct: aquaHero,
  aquaSkimmerRender: aquaHero,
  aquaCollection,
  aquaDeployment: aquaWater,
  aquaEngineering,
  aquaWorks,
  aquaSide,
  autonomyBackground: aquaWater,
  surveyVessel: '',
  team: '',
} as const

export const mediaAlts = {
  logo: 'Eunoia Innovations',
  heroProduct: 'Aqua Skimmer unmanned surface vessel, studio product render',
  aquaSkimmerRender: 'Aqua Skimmer unmanned surface vessel, studio product render',
  aquaCollection: 'Aqua Skimmer among floating waste, seen from above',
  aquaDeployment: 'Aqua Skimmer operating on open water near an urban shoreline',
  aquaEngineering: 'Close-up of Aqua Skimmer collection grate and hull',
  aquaWorks: 'Aqua Skimmer collecting vegetation and debris',
  aquaSide: 'Aqua Skimmer on the water during a field deployment',
  autonomyBackground: 'Aqua Skimmer on open water',
  surveyVessel: 'Unmanned survey vessel',
  team: 'Eunoia team',
} as const

export const videos = {
  hero: { mp4: '', webm: '', poster: aquaHero },
  aquaSkimmer: { mp4: '', webm: '', poster: aquaHero },
  survey: { mp4: '', webm: '', poster: aquaWater },
  background: { mp4: '', webm: '', poster: aquaWater },
} as const

export type MediaKey = keyof typeof media
