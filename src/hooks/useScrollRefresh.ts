import { useLayoutEffect } from 'react'
import { ScrollTrigger } from '../animations/gsap'

export function useScrollRefresh() {
  useLayoutEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    const timer = window.setTimeout(refresh, 400)
    if (window.location.hash) {
      window.setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView()
        refresh()
      }, 120)
    }
    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(timer)
    }
  }, [])
}
