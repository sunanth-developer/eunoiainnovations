import styles from './TechnicalOverlay.module.css'

type OverlayItem = {
  label: string
  value?: string
}

type TechnicalOverlayProps = {
  items: OverlayItem[]
  className?: string
}

export function TechnicalOverlay({ items, className = '' }: TechnicalOverlayProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <span>{item.label}</span>
          {item.value ? <strong>{item.value}</strong> : null}
        </li>
      ))}
    </ul>
  )
}
