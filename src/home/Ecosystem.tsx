import styles from './home.module.css'

const names = ['AMRUT 2.0', 'NIDHI Seed Support', 'ISB D-Labs']

export function Ecosystem() {
  return (
    <section className={styles.eco} id="ecosystem">
      <div className="wrap">
        <h2 className={`display ${styles.title}`}>
          Supported by India’s
          <br />
          innovation ecosystem.
        </h2>
        <p className={styles.ecoLine}>
          {names.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </p>
        <p className={styles.note}>
          These names refer to programme and incubation affiliations. They are not customers,
          endorsements or delivery partners unless separately confirmed.
        </p>
      </div>
    </section>
  )
}
