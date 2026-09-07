import { MarineImage } from '../MarineImage'

type VesselSceneProps = {
  fallbackImage: string
  alt?: string
  className?: string
}

/**
 * Reserved R3F slot. Replace the image fallback with a Canvas + VesselModel
 * when production assets are ready. Keep this component's props stable.
 */
export function VesselScene({ fallbackImage, alt = 'Marine vessel', className }: VesselSceneProps) {
  return <MarineImage src={fallbackImage} alt={alt} className={className} />
}
