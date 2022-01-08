import { useEffect, useRef, useState } from 'react'

export enum Scrolling {
  UP = "up",
  DOWN = "down"
}

// https://stackoverflow.com/q/62497110
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(Scrolling.UP)
  const pageYOffsetThreshold = 75; // header height
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (scrollY <= pageYOffsetThreshold) {
        return
      }

      setScrollDir(scrollY > lastScrollY.current ? Scrolling.DOWN : Scrolling.UP)
      lastScrollY.current = scrollY
    }

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDir)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollDir
}

export default useScrollDirection