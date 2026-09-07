import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { media, mediaAlts } from '../data/media'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import aqua from '../aqua/Physical.module.css'
import cond from '../aqua/Conditions.module.css'
import mon from '../aqua/Monitor.module.css'

const terms = ['Algae', 'Floating debris', 'Silt', 'Variable depth', 'Changing conditions'] as const
const rows = [
  { label: 'Vessel', value: 'Online' },
  { label: 'Mission', value: 'Surface cleaning' },
  { label: 'Monitoring', value: 'Active' },
  { label: 'Collection', value: 'Active' },
] as const

export function Craft() {
  const waterRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = waterRef.current
    if (!root || reduced) return
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('li')
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: 'top 55%', end: 'bottom 35%', scrub: 0.6 },
      })
      items.forEach((item, index) => {
        tl.to(item, { color: '#54e4e0', duration: 0.3 }, index * 0.3)
      })
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <>
      <section className={aqua.section} id="engineering">
        <div className={`wrap ${aqua.grid}`}>
          <div className={aqua.copy}>
            <SectionLabel>06 / Engineering</SectionLabel>
            <h2 className={`display ${aqua.title}`}>
              Designed
              <br />
              around the
              <br />
              problem.
            </h2>
            <div className={aqua.body}>
              <p>The collection system is where the machine meets the water.</p>
            </div>
          </div>
          <figure className={aqua.figure}>
            <MarineImage src={media.aquaEngineering} alt={mediaAlts.aquaEngineering} className={aqua.img} />
            <ul className={aqua.callouts}>
              {['Collection system', 'Surface access', 'Marine structure', 'Onboard electronics'].map((item) => (
                <li key={item}>
                  <i />
                  {item}
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </section>

      <section ref={waterRef} className={cond.section} id="water">
        <div className={cond.bg}>
          <MarineImage src={media.aquaDeployment} alt={mediaAlts.aquaDeployment} className={cond.img} />
          <div className={cond.veil} />
        </div>
        <div className={`wrap ${cond.content}`}>
          <SectionLabel>06 / Field</SectionLabel>
          <h2 className={`display ${cond.title}`}>
            Not a lab.
            <br />
            The water.
          </h2>
          <ul className={cond.terms}>
            {terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
          <p className="lede">
            Marine robotics has to work in environments that refuse to stay
            predictable. Eunoia develops its systems around the conditions encountered
            in real water bodies.
          </p>
        </div>
      </section>

      <section className={mon.section} id="monitor">
        <div className={`wrap ${mon.grid}`}>
          <div>
            <SectionLabel>07 / Monitor</SectionLabel>
            <h2 className={`display ${mon.title}`}>
              Clean the water.
              <br />
              Understand the water.
            </h2>
            <div className={mon.copy}>
              <p>
                Aqua Skimmer extends beyond physical waste collection by supporting
                water-quality monitoring and sample collection during operations.
              </p>
            </div>
          </div>
          <div className={mon.console} aria-hidden="true">
            <div className={mon.radar}>
              <div className={mon.sweep} />
              <div className={mon.rings}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <ul className={mon.rows}>
              {rows.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
