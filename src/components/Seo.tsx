import { useEffect } from 'react'
import { withBase } from '../lib/router'

const SITE = 'https://eunoiainnovations.com'

type SeoProps = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  let node = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attr, key)
    document.head.appendChild(node)
  }
  node.setAttribute('content', value)
}

function upsertLink(rel: string, href: string) {
  let node = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!node) {
    node = document.createElement('link')
    node.rel = rel
    document.head.appendChild(node)
  }
  node.href = href
}

export function Seo({ title, description, path = '/', type = 'website', image, jsonLd }: SeoProps) {
  useEffect(() => {
    const previous = document.title
    const canonical = `${SITE}${path === '/' ? '/' : path}`
    const ogImage = image || `${SITE}${withBase('/og.png')}`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertLink('canonical', canonical)

    const scriptId = 'eunoia-jsonld'
    const existing = document.getElementById(scriptId)
    if (jsonLd) {
      const script = existing ?? document.createElement('script')
      script.id = scriptId
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(jsonLd)
      if (!existing) document.head.appendChild(script)
    } else if (existing) {
      existing.remove()
    }

    return () => {
      document.title = previous
    }
  }, [title, description, path, type, image, jsonLd])

  return null
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eunoia Innovations',
    url: SITE,
    description:
      'Electric unmanned vessels and integrated services for floating waste removal, lake maintenance, water quality monitoring and bathymetric surveys.',
    email: 'info@eunoiainnovations.com',
    telephone: '+91-95737-30767',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    sameAs: ['https://www.linkedin.com/company/eunoia-innovations'],
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}
