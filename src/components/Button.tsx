import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { handleAppLink, withBase } from '../lib/router'
import styles from './Button.module.css'

type Variant = 'primary' | 'ghost' | 'line'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[variant]} ${className}`} {...props}>
      <span>{children}</span>
    </button>
  )
}

type LinkButtonProps = {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function LinkButton({
  href,
  variant = 'primary',
  className = '',
  children,
  onClick,
}: LinkButtonProps) {
  const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  return (
    <a
      href={external ? href : withBase(href)}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      data-cursor={variant === 'primary' ? 'cta' : undefined}
      target={external && href.startsWith('http') ? '_blank' : undefined}
      rel={external && href.startsWith('http') ? 'noreferrer' : undefined}
      onClick={(event) => {
        if (onClick) {
          onClick(event)
          return
        }
        if (!external) handleAppLink(event, href)
      }}
    >
      <span>{children}</span>
    </a>
  )
}
