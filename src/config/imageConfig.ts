import { withBase } from '../lib/router'
import aquaRender from '../assets/aqua-skimmer-cutout.png'
import aquaLegacy from '../assets/aqua-skimmer-3-e1712343412444-copy-1024x576.png'
import aquaSide from '../assets/images-2.jpeg'
import aquaCollection from '../assets/images-3.jpeg'
import aquaWater from '../assets/images-4.jpeg'
import aquaEngineering from '../assets/images-5.jpeg'
import aquaWorks from '../assets/images-6.jpeg'
import heroField from '../assets/hero-field.jpg'

const pub = (path: string) => withBase(path)

export const imageConfig = {
  logo: pub('/assets/eunoia/logo.jpeg'),
  icon: pub('/assets/eunoia/icon.png'),
  aqua: {
    hero: aquaRender,
    render: aquaLegacy,
    collection: aquaCollection,
    deployment: aquaWater,
    detail: aquaEngineering,
    field: aquaWorks,
    side: aquaSide,
    wide: pub('/images/aquaskimmer.jpg'),
    workboat: pub('/images/workboat.jpg'),
    waste: pub('/images/waste.jpg'),
    aerial: pub('/images/aerial.jpg'),
    lake: pub('/images/lake.jpg'),
    survey: pub('/images/survey.jpg'),
    impact: pub('/images/impact.jpg'),
    horizon: pub('/images/horizon.jpg'),
    about: pub('/images/about.jpg'),
    fieldHero: heroField,
  },
} as const

export const imageAlts = {
  logo: 'Eunoia Innovations',
  icon: 'Eunoia Innovations mark',
  hero: 'Aqua Skimmer electric unmanned surface vessel',
  render: 'Aqua Skimmer studio product render',
  collection: 'Aqua Skimmer collecting floating waste from above',
  deployment: 'Aqua Skimmer operating near an urban shoreline',
  detail: 'Close-up of Aqua Skimmer collection grate and hull',
  field: 'Aqua Skimmer collecting vegetation and debris',
  side: 'Aqua Skimmer on the water during a field deployment',
  wide: 'Aqua Skimmer on open water',
  workboat: 'Field operations around an Aqua Skimmer deployment',
  waste: 'Floating waste and debris on a water surface',
  aerial: 'Aerial view of a water body and shoreline',
  lake: 'Urban lake environment',
  survey: 'Waterway mapping and survey visual',
  impact: 'Waterbody operations in the field',
  horizon: 'Open water horizon',
  about: 'Waterbody environment associated with Eunoia field work',
  fieldHero: 'Aqua Skimmer operating on a lake, photographed through shoreline foliage',
  aquaSkimmer: 'Aqua Skimmer electric unmanned surface vessel',
  aquaCollection: 'Aqua Skimmer collecting floating waste from above',
  aquaWater: 'Aqua Skimmer operating near an urban shoreline',
  aquaWorks: 'Aqua Skimmer collecting vegetation and debris',
  aquaSide: 'Aqua Skimmer on the water during a field deployment',
  aquaEngineering: 'Close-up of Aqua Skimmer collection grate and hull',
  defence: 'Maritime operations visual',
  underwater: 'Underwater terrain visual',
  ocean01: 'Open water surface',
  ocean02: 'Open water surface',
} as const

export const aquaImages = {
  hero: aquaRender,
  collection: aquaCollection,
  water: aquaWater,
  works: aquaWorks,
  side: aquaSide,
  engineering: aquaEngineering,
}

export const images = {
  hero: aquaRender,
  about: pub('/images/about.jpg'),
  impact: pub('/images/impact.jpg'),
  defence: pub('/images/defence.jpg'),
  underwater: pub('/images/underwater.jpg'),
  horizon: pub('/images/horizon.jpg'),
  ocean01: pub('/images/ocean-01.jpg'),
  ocean02: pub('/images/ocean-02.jpg'),
}

export const videos = {
  hero: { mp4: '', webm: '', poster: aquaRender },
  aquaSkimmer: { mp4: '', webm: '', poster: aquaRender },
  survey: { mp4: '', webm: '', poster: aquaWater },
  background: { mp4: '', webm: '', poster: aquaWater },
}

export const aquaStoryFrames = [
  { src: imageConfig.aqua.render, alt: imageAlts.render, caption: 'Product platform' },
  { src: imageConfig.aqua.detail, alt: imageAlts.detail, caption: 'Collection mechanism' },
  { src: imageConfig.aqua.wide, alt: imageAlts.wide, caption: 'On-water operation' },
  { src: imageConfig.aqua.collection, alt: imageAlts.collection, caption: 'Surface collection' },
  { src: imageConfig.aqua.deployment, alt: imageAlts.deployment, caption: 'Field deployment' },
  { src: imageConfig.aqua.field, alt: imageAlts.field, caption: 'Engineering detail' },
] as const
