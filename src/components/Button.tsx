import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { withBase } from '../lib/router'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'line'
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
  variant?: 'primary' | 'ghost' | 'line'
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
  return (
    <a
      href={withBase(href)}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      data-cursor={variant === 'primary' ? 'cta' : undefined}
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  )
}
