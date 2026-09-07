import { footerLinks, socialLinks } from '../data/nav'
import { handleAppLink, withBase } from '../lib/router'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <p className={styles.wordmark}>Eunoia Innovations</p>
        <p className={styles.tag}>Autonomous marine robotics</p>
      </div>
      <div className={`wrap ${styles.inner}`}>
        <p className="lede">Engineered for water.</p>
        <nav aria-label="Footer">
          {footerLinks.map((item) => (
            <a key={item.href} href={withBase(item.href)} onClick={(e) => handleAppLink(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.social}>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={`wrap ${styles.base}`}>
        <span>Built in India · Engineered for the water</span>
        <span>© {new Date().getFullYear()} Eunoia Innovations</span>
      </div>
    </footer>
  )
}
