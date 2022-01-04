import { useEffect, useState } from 'react'

export enum Scrolling {
  UP = "up",
  DOWN = "down"
}

// courtesy of https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(Scrolling.UP)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
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