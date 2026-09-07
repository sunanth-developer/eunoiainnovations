import { imageAlts, imageConfig } from '../config/imageConfig'
import {
  contactDetails,
  footerLinks,
  footerServices,
  footerSolutions,
  positioning,
  socialLinks,
  tagline,
} from '../data/site'
import { handleAppLink, withBase } from '../lib/router'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.plate}>
            <img src={imageConfig.logo} alt={imageAlts.logo} />
          </div>
          <p className={styles.tag}>{tagline}</p>
          <p className={styles.copy}>{positioning}</p>
        </div>

        <nav aria-label="Company">
          <p>Company</p>
          {footerLinks.map((item) => (
            <a key={item.href} href={withBase(item.href)} onClick={(e) => handleAppLink(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Solutions">
          <p>Solutions</p>
          {footerSolutions.map((item) => (
            <a key={item.href} href={withBase(item.href)} onClick={(e) => handleAppLink(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Services">
          <p>Services</p>
          {footerServices.map((item) => (
            <a key={item.label} href={withBase(item.href)} onClick={(e) => handleAppLink(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <p>Contact</p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          <span>{contactDetails.city}</span>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {socialLinks.instagram ? (
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          ) : null}
          {socialLinks.youtube ? (
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          ) : null}
        </div>
      </div>

      <div className={`wrap ${styles.base}`}>
        <span>© {new Date().getFullYear()} Eunoia Innovations</span>
        <div>
          <a href={withBase('/privacy')} onClick={(e) => handleAppLink(e, '/privacy')}>
            Privacy Policy
          </a>
          <a href={withBase('/terms')} onClick={(e) => handleAppLink(e, '/terms')}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
