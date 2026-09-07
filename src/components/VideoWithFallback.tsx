import { useState } from 'react'
import { ImageWithFallback } from './ImageWithFallback'
import styles from './VideoWithFallback.module.css'

type VideoWithFallbackProps = {
  mp4?: string
  webm?: string
  poster?: string
  alt: string
  className?: string
  autoPlay?: boolean
}

export function VideoWithFallback({
  mp4,
  webm,
  poster,
  alt,
  className = '',
  autoPlay = true,
}: VideoWithFallbackProps) {
  const [videoFailed, setVideoFailed] = useState(!mp4 && !webm)

  if (!videoFailed && (mp4 || webm)) {
    return (
      <video
        className={`${styles.media} ${className}`}
        poster={poster}
        muted
        playsInline
        loop
        autoPlay={autoPlay}
        preload="none"
        onError={() => setVideoFailed(true)}
      >
        {webm ? <source src={webm} type="video/webm" /> : null}
        {mp4 ? <source src={mp4} type="video/mp4" /> : null}
      </video>
    )
  }

  if (poster) {
    return <ImageWithFallback src={poster} alt={alt} className={`${styles.media} ${className}`} />
  }

  return <div className={`${styles.gradient} ${className}`} aria-hidden="true" />
}
