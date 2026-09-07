import type { gsap as Gsap } from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from './gsap'

type Target = gsap.TweenTarget

const fadeEase = 'power3.out'

export function fadeUp(target: Target, vars: gsap.TweenVars = {}) {
  return gsap.from(target, {
    y: 36,
    opacity: 0,
    duration: 1.05,
    ease: fadeEase,
    ...vars,
  })
}

export function fadeIn(target: Target, vars: gsap.TweenVars = {}) {
  return gsap.from(target, {
    opacity: 0,
    duration: 1.1,
    ease: fadeEase,
    ...vars,
  })
}

export function scaleReveal(target: Target, vars: gsap.TweenVars = {}) {
  return gsap.from(target, {
    scale: 1.08,
    opacity: 0,
    duration: 1.4,
    ease: 'power2.out',
    ...vars,
  })
}

export function parallax(
  target: Target,
  trigger: Element,
  amount = 80,
  extras: gsap.TweenVars = {},
) {
  return gsap.to(target, {
    y: amount,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    ...extras,
  })
}

export function imageZoom(target: Target, trigger: Element, scale = 1.12) {
  return gsap.fromTo(
    target,
    { scale: 1 },
    {
      scale,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  )
}

export function clipReveal(target: Target, vars: gsap.TweenVars = {}) {
  return gsap.fromTo(
    target,
    { clipPath: 'inset(12% 12% 12% 12%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.3,
      ease: 'power3.out',
      ...vars,
    },
  )
}

export function staggerReveal(target: Target, vars: gsap.TweenVars = {}) {
  return gsap.from(target, {
    y: 28,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: fadeEase,
    ...vars,
  })
}

export function horizontalScroll(
  track: HTMLElement,
  trigger: Element,
  distance: number,
) {
  return gsap.to(track, {
    x: -distance,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top top',
      end: () => `+=${distance}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
    },
  })
}

export function revealOnEnter(
  target: Target,
  trigger: Element,
  reduced: boolean,
) {
  if (reduced) {
    gsap.set(target, { clearProps: 'all' })
    return
  }

  gsap.from(target, {
    y: 32,
    opacity: 0,
    duration: 1,
    ease: fadeEase,
    scrollTrigger: {
      trigger,
      start: 'top 82%',
      once: true,
    },
  })
}

export type { Gsap, ScrollTrigger }
