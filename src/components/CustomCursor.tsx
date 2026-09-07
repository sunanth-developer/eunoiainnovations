import { useEffect, useRef, useState } from 'react'
import { useIsTouch } from '../hooks/useIsTouch'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import styles from './CustomCursor.module.css'

export function CustomCursor() {
  const touch = useIsTouch()
  const reduced = usePrefersReducedMotion()
  const [label, setLabel] = useState('')
  const [expanded, setExpanded] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (touch || reduced) return

    const dot = dotRef.current
    if (!dot) return

    const move = (event: PointerEvent) => {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    const inspect = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('[data-cursor]')
      const mode = target?.getAttribute('data-cursor') ?? ''
      setExpanded(mode === 'cta' || mode === 'view' || mode === 'explore')
      if (mode === 'view') setLabel('View')
      else if (mode === 'explore') setLabel('Explore')
      else setLabel('')
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', inspect)
    document.documentElement.classList.add('has-cursor')

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', inspect)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [touch, reduced])

  if (touch || reduced) return null

  return (
    <div
      ref={dotRef}
      className={`${styles.cursor} ${expanded ? styles.expanded : ''}`}
      aria-hidden="true"
    >
      <span className={styles.ring} />
      {label ? <em>{label}</em> : null}
    </div>
  )
}
