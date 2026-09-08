import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function useHomeMotion() {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.from('#hero img', {
        scale: 1.06,
        opacity: 0.45,
        duration: 1.6,
        ease: 'power2.out',
      })
      gsap.from('[data-hero="title"]', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
      })
      gsap.from('[data-hero="copy"]', {
        y: 18,
        opacity: 0,
        duration: 0.85,
        delay: 0.38,
        ease: 'power3.out',
      })
      gsap.from('[data-hero="actions"]', {
        y: 16,
        opacity: 0,
        duration: 0.75,
        delay: 0.52,
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
          scrollTrigger: { trigger: '#problem', start: 'top 70%', once: true },
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
          scrollTrigger: { trigger: '#problem', start: 'top 70%', once: true },
        },
      )

      const blocks = gsap.utils.toArray<HTMLElement>(
        '#approach, #capabilities, #aqua-skimmer, #maintenance, #engagement, #ecosystem, #start',
      )
      blocks.forEach((block) => {
        const items = block.querySelectorAll('h2, .lede, article, ol li')
        gsap.fromTo(
          items,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.04,
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
