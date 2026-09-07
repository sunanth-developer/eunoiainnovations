import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function useHomeMotion() {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.from('#hero h1', { y: 28, opacity: 0, duration: 1.1, ease: 'power3.out' })
      gsap.from('#hero p, #hero a', {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.25,
        ease: 'power3.out',
      })

      gsap.from('#problem h2', {
        scrollTrigger: { trigger: '#problem', start: 'top 70%' },
        y: 24,
        opacity: 0,
        duration: 0.9,
      })

      gsap.fromTo(
        '#problem [data-signal="line"]',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '#problem', start: 'top 60%' },
        },
      )
    })

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 360)
    return () => {
      window.clearTimeout(refresh)
      ctx.revert()
    }
  }, [reduced])
}
