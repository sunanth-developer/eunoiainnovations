import { videos } from '../config/imageConfig'
import { VideoWithFallback } from './VideoWithFallback'

const HERO_VIDEO_READY = false

type HeroVideoProps = {
  poster: string
  alt: string
  className?: string
}

export function HeroVideo({ poster, alt, className }: HeroVideoProps) {
  return (
    <VideoWithFallback
      mp4={HERO_VIDEO_READY ? videos.hero.mp4 : undefined}
      webm={HERO_VIDEO_READY ? videos.hero.webm : undefined}
      poster={poster}
      alt={alt}
      className={className}
    />
  )
}
