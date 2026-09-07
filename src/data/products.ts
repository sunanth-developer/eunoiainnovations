import { media, mediaAlts } from './media'

export type ProductStatus = 'deployed' | 'in-development' | 'concept'

export type Product = {
  id: string
  number: string
  name: string
  label: string
  summary: string
  cta: string
  href: string
  image: string
  alt: string
  fit?: 'cover' | 'contain'
  status: ProductStatus
  statusLabel: string
}

export const products: Product[] = [
  {
    id: 'aqua-skimmer',
    number: '01',
    name: 'Aqua Skimmer',
    label: 'Surface cleaning',
    summary:
      'Flagship unmanned surface vessel for floating-waste collection and water-quality monitoring. Remotely operated today.',
    cta: 'Explore Aqua Skimmer',
    href: '/aqua-skimmer',
    image: media.aquaSkimmerRender,
    alt: mediaAlts.aquaSkimmerRender,
    fit: 'contain',
    status: 'deployed',
    statusLabel: 'Deployed / Current',
  },
  {
    id: 'aquascanner',
    number: '02',
    name: 'AquaScanner',
    label: 'Hydrographic survey',
    summary:
      'Unmanned survey platform for hydrographic surveying and waterway mapping. In development.',
    cta: 'Explore survey systems',
    href: '/survey',
    image: media.aquaDeployment,
    alt: mediaAlts.aquaDeployment,
    status: 'in-development',
    statusLabel: 'In development',
  },
  {
    id: 'sentinel-m',
    number: '03',
    name: 'Sentinel-M',
    label: 'Maritime systems',
    summary:
      'A defence-focused unmanned surface vessel for future maritime applications. Concept. In development.',
    cta: 'Explore the future',
    href: '/platforms#sentinel-m',
    image: media.aquaSide,
    alt: mediaAlts.aquaSide,
    status: 'concept',
    statusLabel: 'Concept / In development',
  },
]
