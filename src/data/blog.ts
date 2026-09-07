import { insights } from './insights'

export const blogCategories = [
  'Marine robotics',
  'Water management',
  'Autonomy',
  'Deployments',
  'Survey technology',
  'Sustainability',
  'Company',
] as const

export type BlogCategory = (typeof blogCategories)[number]

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  body: string
  date: string
  published: boolean
  updatedAt: string
  image?: string
  imageAlt?: string
}

export type BlogStore = {
  posts: BlogPost[]
  deleted: string[]
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 72)
}

const seedDates: Record<string, string> = {
  'frequency-problem': '2024-06-12',
  'hardware-first': '2024-09-03',
  'remote-today': '2025-01-20',
  'four-waters': '2025-04-22',
  beneath: '2025-06-18',
}

export const seedPosts: BlogPost[] = insights.map((item) => ({
  id: item.id,
  slug: item.id,
  title: item.title,
  excerpt: item.excerpt,
  category: item.category,
  body: item.body.join('\n\n'),
  date: seedDates[item.id] ?? '2024-06-01',
  published: true,
  updatedAt: `${seedDates[item.id] ?? '2024-06-01'}T00:00:00.000Z`,
}))

export function emptyPost(): BlogPost {
  const now = new Date()
  return {
    id: `post-${now.getTime()}`,
    slug: '',
    title: '',
    excerpt: '',
    category: 'Company',
    body: '',
    date: now.toISOString().slice(0, 10),
    published: true,
    updatedAt: now.toISOString(),
    image: '',
    imageAlt: '',
  }
}

export function formatPostDate(value: string) {
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function bodyToParagraphs(body: string) {
  return body
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean)
}
