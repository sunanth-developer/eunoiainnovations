import { useEffect, useState } from 'react'
import { navItems } from '../data/nav'

export function useActiveSection(enabled: boolean) {
  const [section, setSection] = useState('why')

  useEffect(() => {
    if (!enabled) return

    const ids = navItems.flatMap((item) => item.sections ?? [])
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -48% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [enabled])

  return section
}
