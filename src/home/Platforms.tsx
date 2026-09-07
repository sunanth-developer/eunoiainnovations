import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { products } from '../data/products'
import { handleAppLink } from '../lib/router'
import styles from './Platforms.module.css'

export function Platforms() {
  return (
    <section className={styles.section} id="platforms">
      <div className={`wrap ${styles.head}`}>
        <SectionLabel>05 / Platforms</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          Our
          <br />
          platforms.
        </h2>
      </div>
      <div className="wrap">
        {products.map((product) => (
          <article key={product.id} id={product.id} className={styles.card}>
            <div className={`${styles.media} ${product.fit === 'contain' ? styles.contain : ''}`}>
              <MarineImage src={product.image} alt={product.alt} className={styles.img} />
              <span className={styles.status}>{product.statusLabel}</span>
            </div>
            <div className={styles.body}>
              <p className={styles.meta}>
                {product.number} / {product.label}
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
    </section>
  )
}
