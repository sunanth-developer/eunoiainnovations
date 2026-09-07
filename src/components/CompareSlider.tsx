import { useRef, useState, type PointerEvent } from 'react'
import styles from './CompareSlider.module.css'

type CompareSliderProps = {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  beforeLabel: string
  afterLabel: string
}

export function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
}: CompareSliderProps) {
  const [value, setValue] = useState(52)
  const track = useRef<HTMLDivElement>(null)

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const box = track.current?.getBoundingClientRect()
    if (!box) return
    const next = ((event.clientX - box.left) / box.width) * 100
    setValue(Math.min(100, Math.max(0, next)))
  }

  return (
    <div className={styles.wrap}>
      <div
        ref={track}
        className={styles.frame}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          move(event)
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event)
        }}
      >
        <img src={after} alt={afterAlt} />
        <div className={styles.before} style={{ width: `${value}%` }}>
          <img src={before} alt={beforeAlt} />
        </div>
        <div className={styles.handle} style={{ left: `${value}%` }} aria-hidden="true">
          <span />
        </div>
        <input
          className={styles.range}
          type="range"
          min={0}
          max={100}
          value={value}
          aria-label="Compare field conditions"
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
      <div className={styles.labels}>
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>
    </div>
  )
}
