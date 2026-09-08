import { useEffect, type ReactNode } from 'react'
import styles from './page.module.css'

export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}

type PageHeroProps = {
  kicker?: string
  title: ReactNode
  lede?: string
}

export function PageHero({ title, lede }: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <h1 className={`display ${styles.title}`}>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  )
}
