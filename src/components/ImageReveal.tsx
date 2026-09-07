import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { clipReveal, imageZoom } from '../animations/scrollAnimations'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { MarineImage } from './MarineImage'
import styles from './ImageReveal.module.css'

type ImageRevealProps = {
  src: string
  alt: string
  className?: string
  zoom?: boolean
}

export function ImageReveal({ src, alt, className = '', zoom = true }: ImageRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    const img = imgRef.current
    if (!root || !img || reduced) return

    const ctx = gsap.context(() => {
      clipReveal(root, {
        scrollTrigger: { trigger: root, start: 'top 85%', once: true },
      })
      if (zoom) imageZoom(img, root, 1.08)
    }, root)

    return () => ctx.revert()
  }, [reduced, zoom])

  return (
    <div ref={rootRef} className={`${styles.frame} ${className}`}>
      <div ref={imgRef} className={styles.inner}>
        <MarineImage src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  )
}
