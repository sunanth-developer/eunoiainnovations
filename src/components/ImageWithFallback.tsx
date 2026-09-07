import { useState } from 'react'
import styles from './ImageWithFallback.module.css'

type ImageWithFallbackProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  sizes,
  loading = 'lazy',
  fetchPriority,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return <div className={`${styles.fallback} ${className}`} aria-hidden="true" />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
