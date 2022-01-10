import { MutableRefObject, useEffect, useRef, useState } from 'react'

// https://stackoverflow.com/a/16270434
const useVisibility = (
  elem: MutableRefObject<HTMLElement | null>,
  threshold = 0,
  getVisibilityOnce = true
) => {
  const [isVisible, setIsVisible] = useState(false)
  const wasVisibleRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const getValidThreshold = (): number => {
      let validThreshold

      if (threshold > 1) {
        validThreshold = 1
      } else if (threshold < 0) {
        validThreshold = 0
      } else {
        validThreshold = threshold
      }

      return validThreshold
    }

    const listeners = ['scroll', 'resize']

    const addEventListeners = () => {
      listeners.forEach((listener) => {
        window.addEventListener(listener, updateVisibility)
      })
    }

    const removeEventListeners = () => {
      listeners.forEach((listener) => {
        window.removeEventListener(listener, updateVisibility)
      })
    }

    const isElementVisible = (): boolean => {
      if (elem.current === null) {
        return false
      }

      const rect = elem.current.getBoundingClientRect()
      const validThreshold = getValidThreshold()
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const elemThresholdHeight = validThreshold * elem.current.offsetHeight

      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < viewportWidth &&
        rect.top < (viewportHeight - elemThresholdHeight || viewportHeight - elemThresholdHeight)
      )
    }

    const updateVisibility = (): void => {
      if (isElementVisible()) {
        if (getVisibilityOnce && wasVisibleRef.current) {
          removeEventListeners()
          return
        }

        setIsVisible(true)
        wasVisibleRef.current = true
      } else {
        if (!getVisibilityOnce) {
          setIsVisible(false)
        }
      }
    }

    updateVisibility()
    addEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [elem, threshold, getVisibilityOnce])

  return isVisible
}

export default useVisibility
