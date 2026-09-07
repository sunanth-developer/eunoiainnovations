import { seedPosts, type BlogPost, type BlogStore } from '../data/blog'

const STORAGE_KEY = 'eunoia.blog.store'
const CHANGE_EVENT = 'eunoia:blog'

function emptyStore(): BlogStore {
  return { posts: [], deleted: [] }
}

function readLocal(): BlogStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    const parsed = JSON.parse(raw) as Partial<BlogStore>
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted : [],
    }
  } catch {
    return emptyStore()
  }
}

function writeLocal(store: BlogStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

function blogJsonUrl() {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}blog.json`.replace(/\/{2,}/g, '/')
}

async function readRemote(): Promise<BlogStore> {
  try {
    const response = await fetch(blogJsonUrl(), { cache: 'no-store' })
    if (!response.ok) return emptyStore()
    const parsed = (await response.json()) as Partial<BlogStore> | BlogPost[]
    if (Array.isArray(parsed)) return { posts: parsed, deleted: [] }
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted : [],
    }
  } catch {
    return emptyStore()
  }
}

function mergeStores(...layers: BlogStore[]) {
  const map = new Map(seedPosts.map((post) => [post.id, post]))
  const deleted = new Set<string>()

  for (const layer of layers) {
    layer.deleted.forEach((id) => deleted.add(id))
    for (const post of layer.posts) {
      deleted.delete(post.id)
      map.set(post.id, post)
    }
  }

  return [...map.values()]
    .filter((post) => !deleted.has(post.id))
    .sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt))
}

let remoteCache: Promise<BlogStore> | null = null

function remote() {
  if (!remoteCache) remoteCache = readRemote()
  return remoteCache
}

export async function loadPosts() {
  const [fromFile, fromBrowser] = await Promise.all([remote(), Promise.resolve(readLocal())])
  return mergeStores(fromFile, fromBrowser)
}

export async function loadPublishedPosts() {
  return (await loadPosts()).filter((post) => post.published)
}

export async function loadPostBySlug(slug: string) {
  return (await loadPosts()).find((post) => post.slug === slug) ?? null
}

export async function savePost(post: BlogPost) {
  const local = readLocal()
  const index = local.posts.findIndex((item) => item.id === post.id)
  const next = { ...post, updatedAt: new Date().toISOString() }
  if (index >= 0) local.posts[index] = next
  else local.posts.push(next)
  local.deleted = local.deleted.filter((id) => id !== post.id)
  writeLocal(local)
  return next
}

export async function deletePost(id: string) {
  const local = readLocal()
  local.posts = local.posts.filter((post) => post.id !== id)
  if (!local.deleted.includes(id)) local.deleted.push(id)
  writeLocal(local)
}

export async function exportStore(): Promise<BlogStore> {
  const posts = await loadPosts()
  const local = readLocal()
  const remoteDeleted = (await remote()).deleted
  return {
    posts,
    deleted: [...new Set([...remoteDeleted, ...local.deleted])].filter(
      (id) => !posts.some((post) => post.id === id),
    ),
  }
}

export function subscribeBlog(listener: () => void) {
  window.addEventListener(CHANGE_EVENT, listener)
  window.addEventListener('storage', listener)
  return () => {
    window.removeEventListener(CHANGE_EVENT, listener)
    window.removeEventListener('storage', listener)
  }
}
