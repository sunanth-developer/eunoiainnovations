import { useEffect, useState, type MouseEvent } from 'react'
import { imageAlts, imageConfig } from '../config/imageConfig'
import { contactDetails, navItems } from '../data/site'
import { handleAppLink, withBase } from '../lib/router'
import { LinkButton } from './Button'
import { Logo } from './Logo'
import styles from './Navbar.module.css'

type NavbarProps = {
  compact: boolean
  path: string
}

export function Navbar({ compact, path }: NavbarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('is-nav-open', open)
    return () => document.body.classList.remove('is-nav-open')
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [path])

  const go = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAppLink(event, href)
    setOpen(false)
  }

  const active = (item: (typeof navItems)[number]) =>
    Boolean(item.match?.some((match) => path === match || path.startsWith(`${match}/`)))

  return (
    <header
      className={`${styles.bar} ${compact ? styles.compact : styles.onHero} ${open ? styles.open : ''}`}
    >
      <div className={styles.shell}>
        <a href={withBase('/')} aria-label="Eunoia Innovations home" onClick={(e) => go(e, '/')}>
          <Logo />
        </a>

        <nav className={styles.desktop} aria-label="Primary">
          {navItems.map((item) => (
            <div key={item.label} className={styles.item}>
              <a
                href={withBase(item.href)}
                className={`${styles.link} ${active(item) ? styles.active : ''}`}
                onClick={(e) => go(e, item.href)}
              >
                {item.label}
              </a>
              {item.children ? (
                <div className={styles.drop} role="group" aria-label={`${item.label} pages`}>
                  {item.children.map((child) => (
                    <a key={child.href} href={withBase(child.href)} onClick={(e) => go(e, child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          {contactDetails.brochureUrl ? (
            <a className={styles.brochure} href={contactDetails.brochureUrl} target="_blank" rel="noreferrer">
              Download brochure
            </a>
          ) : null}
          <LinkButton href="/contact" variant="primary" className={styles.cta} onClick={(e) => go(e, '/contact')}>
            <span className={styles.ctaFull}>Request a site demo</span>
            <span className={styles.ctaShort}>Site demo</span>
          </LinkButton>
          <button
            className={styles.burger}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <i />
            <i />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={styles.mobile} aria-hidden={!open}>
        <img className={styles.menuMark} src={imageConfig.icon} alt={imageAlts.icon} />
        <nav className="wrap" aria-label="Mobile">
          {navItems.map((item) => (
            <div key={item.label}>
              <a href={withBase(item.href)} onClick={(e) => go(e, item.href)}>
                {item.label}
              </a>
              {item.children?.map((child) => (
                <a key={child.href} className={styles.sub} href={withBase(child.href)} onClick={(e) => go(e, child.href)}>
                  {child.label}
                </a>
              ))}
            </div>
          ))}
          <a className={styles.mobileCta} href={withBase('/contact')} onClick={(e) => go(e, '/contact')}>
            Request a site demo
          </a>
        </nav>
      </div>
    </header>
  )
}
