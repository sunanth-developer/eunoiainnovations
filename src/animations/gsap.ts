import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGsap() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true })
  ScrollTrigger.defaults({
    invalidateOnRefresh: true,
  })
  registered = true
}

export { gsap, ScrollTrigger }
