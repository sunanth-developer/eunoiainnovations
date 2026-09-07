import { MarineImage } from '../MarineImage'

type AquaSkimmerSceneProps = {
  fallbackImage: string
  alt?: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

/**
 * Reserved R3F slot. When a production GLB is available, replace the
 * image fallback with Canvas + VesselModel + CameraRig + MarineEnvironment.
 */
export function AquaSkimmerScene({
  fallbackImage,
  alt = 'Aqua Skimmer',
  className,
  loading,
  fetchPriority,
}: AquaSkimmerSceneProps) {
  return (
    <MarineImage
      src={fallbackImage}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
    />
  )
}
