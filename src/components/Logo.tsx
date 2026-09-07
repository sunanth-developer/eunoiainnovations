import styles from './Logo.module.css'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`${styles.mark} ${className}`}>
      <svg className={styles.svg} viewBox="0 0 36 48" aria-hidden="true">
        <path
          d="M18 4c-6 6-10 11-10 16 0 4 2.4 7 6.2 9.2C10.6 31.6 8 35 8 39c0 5 4 9 10 9s10-4 10-9c0-4-2.6-7.4-6.2-9.8C25.6 27 28 24 28 20c0-5-4-12-10-16z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="18" cy="18" r="2.1" fill="var(--accent)" />
      </svg>
      <span className={styles.copy}>
        <span>Eunoia</span>
        <span>Innovations</span>
      </span>
    </span>
  )
}
