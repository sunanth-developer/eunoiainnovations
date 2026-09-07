import { videos } from '../config/imageConfig'
import { VideoWithFallback } from './VideoWithFallback'

const BACKGROUND_VIDEO_READY = false

type BackgroundVideoProps = {
  poster: string
  alt: string
  className?: string
}

export function BackgroundVideo({ poster, alt, className }: BackgroundVideoProps) {
  return (
    <VideoWithFallback
      mp4={BACKGROUND_VIDEO_READY ? videos.background.mp4 : undefined}
      webm={BACKGROUND_VIDEO_READY ? videos.background.webm : undefined}
      poster={poster}
      alt={alt}
      className={className}
    />
  )
}
