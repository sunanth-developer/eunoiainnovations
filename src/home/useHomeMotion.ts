import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function useHomeMotion() {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.from('#hero h1', { y: 36, opacity: 0, duration: 1.15, ease: 'power3.out' })
      gsap.from('#hero p, #hero a', {
        y: 18,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.fromTo(
        '#problem h2',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          immediateRender: false,
          scrollTrigger: { trigger: '#problem', start: 'top 72%', once: true },
        },
      )

      gsap.fromTo(
        '#problem [data-signal="line"]',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: '#problem', start: 'top 62%', once: true },
        },
      )

      const blocks = gsap.utils.toArray<HTMLElement>(
        '#approach, #capabilities, #aqua-skimmer, #maintenance, #engagement, #ecosystem, #start',
      )
      blocks.forEach((block) => {
        const items = block.querySelectorAll('h2, .lede, article, ol li, .label')
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              once: true,
            },
          },
        )
      })
    })

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 360)
    return () => {
      window.clearTimeout(refresh)
      ctx.revert()
    }
  }, [reduced])
}
