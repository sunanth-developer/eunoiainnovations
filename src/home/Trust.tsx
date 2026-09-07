import styles from './home.module.css'

const items = ['Built in India', 'Electric operations', 'Field-tested', 'Data-backed reporting']

export function Trust() {
  return (
    <section className={styles.trust} aria-label="Proof points">
      <div className="wrap">
        <div className={styles.trustRow}>
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
