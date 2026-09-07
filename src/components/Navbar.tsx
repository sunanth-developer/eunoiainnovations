import { useEffect, useState, type MouseEvent } from 'react'
import { navItems } from '../data/nav'
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
    <header className={`${styles.bar} ${compact ? styles.compact : ''} ${open ? styles.open : ''}`}>
      <div className={styles.shell}>
        <a href={withBase('/')} aria-label="Eunoia Innovations home" onClick={(e) => go(e, '/')}>
          <Logo />
        </a>

        <nav className={styles.desktop} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={withBase(item.href)}
              className={`${styles.link} ${active(item) ? styles.active : ''}`}
              onClick={(e) => go(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LinkButton href="/contact" variant="primary" onClick={(e) => go(e, '/contact')}>
            Contact
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

      <div id="mobile-menu" className={styles.mobile} hidden={!open}>
        <nav className="wrap" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.label} href={withBase(item.href)} onClick={(e) => go(e, item.href)}>
              {item.label}
            </a>
          ))}
          <a className={styles.mobileCta} href={withBase('/contact')} onClick={(e) => go(e, '/contact')}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
