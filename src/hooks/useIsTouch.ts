import { useEffect, useState } from 'react'

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)')
    const update = () => setIsTouch(coarse.matches || navigator.maxTouchPoints > 0)
    update()
    coarse.addEventListener('change', update)
    return () => coarse.removeEventListener('change', update)
  }, [])

  return isTouch
}
