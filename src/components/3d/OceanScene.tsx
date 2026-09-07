import { MarineImage } from '../MarineImage'

type OceanSceneProps = {
  fallbackImage: string
  alt?: string
  className?: string
}

/** Reserved ocean WebGL slot. Image fallback until a single canvas is needed. */
export function OceanScene({ fallbackImage, alt = 'Ocean', className }: OceanSceneProps) {
  return <MarineImage src={fallbackImage} alt={alt} className={className} />
}
