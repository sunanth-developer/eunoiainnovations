import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'
import { publicProjects, type Project } from '../data/projects'
import { useMediaQuery } from './useMediaQuery'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

const LAST = publicProjects.length - 1

function pinInset() {
  const nav = document.querySelector('header')
  const height = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 72
  return Math.round(height + 20)
}

export function useDeploymentsScroll(
  sectionRef: RefObject<HTMLElement | null>,
  setSelected: (project: Project) => void,
  id = 'deployments-pin',
) {
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 981px)')

  useLayoutEffect(() => {
    if (reduced || !desktop) return
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      let last = -1
      ScrollTrigger.create({
        id,
        trigger: section,
        start: () => `top top+=${pinInset()}`,
        end: () => `+=${Math.max(LAST, 1) * 320}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.35,
        snap: {
          snapTo: 1 / Math.max(LAST, 1),
          duration: 0.22,
          ease: 'power1.out',
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(LAST, Math.round(self.progress * LAST))
          if (index !== last) {
            last = index
            setSelected(publicProjects[index])
          }
        },
        onLeave: () => setSelected(publicProjects[LAST]),
        onLeaveBack: () => setSelected(publicProjects[0]),
      })
    }, section)

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => {
      window.clearTimeout(refresh)
      ctx.revert()
    }
  }, [desktop, id, reduced, sectionRef, setSelected])
}
