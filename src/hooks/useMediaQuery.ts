import { useLayoutEffect, useState } from 'react'

function matchesQuery(query: string) {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => matchesQuery(query))

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}
