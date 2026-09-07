import { ImageWithFallback } from './ImageWithFallback'

type MarineImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

/**
 * Image slot for marine visuals. Swap this for <VesselScene /> later
 * without rebuilding the surrounding section.
 */
export function MarineImage({
  src,
  alt,
  className,
  loading,
  fetchPriority,
}: MarineImageProps) {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
    />
  )
}
