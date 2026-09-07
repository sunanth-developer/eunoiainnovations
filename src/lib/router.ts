import type { MouseEvent } from 'react'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

export function withBase(href: string) {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href
  }
  if (href.startsWith('#')) return href
  if (href.startsWith('/#')) return `${BASE}/${href.slice(1)}`
  if (href === '/') return `${BASE}/`
  return `${BASE}${href.startsWith('/') ? href : `/${href}`}`
}

export function appPath(pathname = window.location.pathname) {
  if (!BASE) return pathname || '/'
  if (pathname === BASE || pathname === `${BASE}/`) return '/'
  if (pathname.startsWith(`${BASE}/`)) return pathname.slice(BASE.length) || '/'
  return pathname || '/'
}

export function navigate(path: string) {
  const hashIndex = path.indexOf('#')
  if (hashIndex >= 0) {
    const rawPath = path.slice(0, hashIndex)
    const hash = path.slice(hashIndex)
    const selector = hash
    const current = appPath()
    const next = rawPath ? appPath(rawPath.startsWith(BASE) ? rawPath : withBase(rawPath || '/')) : current
    const samePage = !rawPath || next === current || rawPath === '/' || rawPath === ''

    if (samePage) {
      const target = document.querySelector(selector)
      if (target) {
        window.history.replaceState({}, '', `${withBase(current === '/' ? '/' : current)}${hash}`)
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    window.history.pushState({}, '', `${withBase(rawPath || '/')}${hash}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return
  }

  if (path.startsWith('#')) {
    const target = document.querySelector(path)
    if (target) {
      window.history.replaceState({}, '', `${window.location.pathname}${path}`)
      target.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }

  window.history.pushState({}, '', withBase(path))
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'auto' })
}

export function handleAppLink(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  navigate(href)
}
