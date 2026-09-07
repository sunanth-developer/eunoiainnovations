import { useEffect } from 'react'
import { SectionLabel } from '../components/SectionLabel'
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
  kicker: string
  title: string
  lede?: string
}

export function PageHero({ kicker, title, lede }: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <SectionLabel>{kicker}</SectionLabel>
        <h1 className={`display ${styles.title}`}>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  )
}
