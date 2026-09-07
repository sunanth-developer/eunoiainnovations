import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { LinkButton } from '../components/Button'
import { ProductCard } from '../components/ProductCard'
import { ProductVideo } from '../components/ProductVideo'
import { SectionLabel } from '../components/SectionLabel'
import { products } from '../data/products'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { handleAppLink } from '../lib/router'
import styles from './Products.module.css'

export function Products() {
  const pinRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const desktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin || reduced || !desktop) return

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(`.${styles.slide}`)
      gsap.set(slides, { autoAlpha: 0, xPercent: 0, clipPath: 'inset(0 0 0 0%)' })
      gsap.set(slides[0], { autoAlpha: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: `+=${slides.length * 130}%`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
        },
      })

      slides.forEach((slide, index) => {
        if (index === 0) return
        const prev = slides[index - 1]
        tl.to(prev, { autoAlpha: 0, xPercent: -6, duration: 1 }, index)
          .fromTo(
            slide,
            { autoAlpha: 0, clipPath: 'inset(0 0 0 100%)', xPercent: 6 },
            { autoAlpha: 1, clipPath: 'inset(0 0 0 0%)', xPercent: 0, duration: 1 },
            index,
          )
      })
    }, pin)

    return () => ctx.revert()
  }, [reduced, desktop])

  return (
    <section className={styles.section} id="products">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>03 / Platforms</SectionLabel>
        <h2 className={`display ${styles.title}`}>Built for different missions.</h2>
      </div>

      <div ref={pinRef} className={styles.pin}>
        <div className={`wrap ${styles.stage}`}>
          {products.map((product) => (
            <article key={product.id} className={styles.slide}>
              <div className={`${styles.media} ${product.fit === 'contain' ? styles.contain : ''}`} data-cursor="explore">
                <ProductVideo poster={product.image} alt={product.name} className={styles.img} />
                {product.statusLabel ? <span className={styles.badge}>{product.statusLabel}</span> : null}
              </div>
              <div className={styles.body}>
                <p className={styles.meta}>
                  Product {product.number} / {product.label}
                </p>
                <h3 className={`display ${styles.name}`}>{product.name}</h3>
                <p className={styles.copy}>{product.summary}</p>
                <LinkButton href={product.href} variant="line" onClick={(e) => handleAppLink(e, product.href)}>
                  {product.cta}
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={`wrap ${styles.stack}`}>
        {products.map((product) => (
          <ProductCard key={`m-${product.id}`} product={product} />
        ))}
      </div>
    </section>
  )
}
