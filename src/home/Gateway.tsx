import { LinkButton } from '../components/Button'
import { MarineImage } from '../components/MarineImage'
import { SectionLabel } from '../components/SectionLabel'
import { homeFeatured, homeGateways } from '../data/pages'
import { handleAppLink, withBase } from '../lib/router'
import styles from './Gateway.module.css'

export function Gateway() {
  return (
    <section className={styles.section} id="explore" aria-label="Explore the site">
      <article className={styles.featured}>
        <div className={`wrap ${styles.featuredInner}`}>
          <div className={styles.featuredCopy}>
            <SectionLabel>{homeFeatured.kicker}</SectionLabel>
            <h2 className={`display ${styles.featuredTitle}`}>{homeFeatured.title}</h2>
            <p className="lede">{homeFeatured.copy}</p>
            <LinkButton href={homeFeatured.href} onClick={(e) => handleAppLink(e, homeFeatured.href)}>
              {homeFeatured.cta}
            </LinkButton>
          </div>
          <div className={styles.featuredMedia}>
            <MarineImage src={homeFeatured.image} alt={homeFeatured.alt} className={styles.featuredImg} />
          </div>
        </div>
      </article>

      <div className={`wrap ${styles.head}`}>
        <SectionLabel>Explore</SectionLabel>
        <h2 className={`display ${styles.title}`}>
          The work,
          <br />
          page by page.
        </h2>
      </div>

      <div className={`wrap ${styles.grid}`}>
        {homeGateways.map((item) => (
          <a
            key={item.id}
            href={withBase(item.href)}
            className={styles.card}
            onClick={(event) => handleAppLink(event, item.href)}
          >
            <MarineImage src={item.image} alt="" className={styles.cardImg} />
            <p className={styles.kicker}>{item.kicker}</p>
            <h3 className={`display ${styles.cardTitle}`}>{item.title}</h3>
            <p>{item.copy}</p>
            <span className={styles.more}>Open {item.kicker}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
