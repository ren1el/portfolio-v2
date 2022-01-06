import { useEffect, useState } from 'react'

export enum Scrolling {
  UP = "up",
  DOWN = "down"
}

// https://stackoverflow.com/q/62497110
const useScrollDirection = () => {
  const pageYOffsetThreshold = 75; // header height
  const [scrollDir, setScrollDir] = useState(Scrolling.UP)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (scrollY < pageYOffsetThreshold) {
        return
      }

      setScrollDir(scrollY > lastScrollY ? Scrolling.DOWN : Scrolling.UP)
      lastScrollY = scrollY
    }

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDir)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return scrollDir
}

export default useScrollDirection