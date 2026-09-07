import styles from './ScrollIndicator.module.css'

export function ScrollIndicator() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <span>Scroll to explore</span>
      <span className={styles.arrow}>↓</span>
    </div>
  )
}
