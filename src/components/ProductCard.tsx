import type { Product } from '../data/products'
import { handleAppLink } from '../lib/router'
import { LinkButton } from './Button'
import { MarineImage } from './MarineImage'
import styles from './ProductCard.module.css'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card} data-cursor="explore">
      <div className={`${styles.media} ${product.fit === 'contain' ? styles.contain : ''}`}>
        <MarineImage src={product.image} alt={product.name} className={styles.img} />
        {product.statusLabel ? <span className={styles.status}>{product.statusLabel}</span> : null}
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
  )
}
