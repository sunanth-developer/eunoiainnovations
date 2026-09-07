import { VideoWithFallback } from './VideoWithFallback'

type ProductVideoProps = {
  mp4?: string
  webm?: string
  poster: string
  alt: string
  className?: string
}

export function ProductVideo({ mp4, webm, poster, alt, className }: ProductVideoProps) {
  return (
    <VideoWithFallback
      mp4={mp4}
      webm={webm}
      poster={poster}
      alt={alt}
      className={className}
    />
  )
}
