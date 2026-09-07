import { imageAlts, imageConfig } from '../config/imageConfig'
import styles from './Logo.module.css'

type LogoProps = {
  className?: string
  variant?: 'wordmark' | 'icon'
}

export function Logo({ className = '', variant = 'wordmark' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        className={`${styles.icon} ${className}`}
        src={imageConfig.icon}
        alt={imageAlts.icon}
        width={40}
        height={40}
      />
    )
  }

  return (
    <img
      className={`${styles.wordmark} ${className}`}
      src={imageConfig.logo}
      alt={imageAlts.logo}
      width={168}
      height={48}
    />
  )
}
