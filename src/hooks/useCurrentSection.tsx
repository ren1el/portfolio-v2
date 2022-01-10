import { useEffect, useState } from 'react'

export const enum Section {
  About = 'About',
  Work = 'Work',
  Experience = 'Experience',
  Skills = 'Skills',
}

// https://stackoverflow.com/q/123999
const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState(Section.About)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const percentHeightOfViewport = (section: HTMLElement): number => {
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const rect = section.getBoundingClientRect()
      const isTopEdgeInOrUnderViewport = rect.top > 0

      let viewableHeight
      if (isTopEdgeInOrUnderViewport) {
        // in this case, the top edge of the element is either in the viewport or underneath it.
        // this value is the height from the top edge of the element to the bottom of the viewport.
        // it represents the max amount of space that the element could possibly be taking up at the moment.
        // a value < 0 means the element is past the viewport (it's not visible yet)
        const maxViewableHeight = viewportHeight - rect.top

        // `maxViewableHeight` could potentially be bigger than the element's true height
        // so `viewableHeight` = the minimum between the element's true height and `maxViewableHeight`
        viewableHeight = Math.min(sectionHeight, maxViewableHeight)
      } else {
        // in this case, the top edge of the element is above the viewport.
        // this value is the height from the top of the viewport to the bottom edge of the element.
        const remainingHeight = rect.bottom

        // but the element might be so big that it extends past the viewport,
        // so `remainingHeight` could potentially be bigger than the viewport.
        // thus `viewableHeight` = the minimum between `remainingHeight` and `viewportHeight`
        viewableHeight = Math.min(remainingHeight, viewportHeight)
      }

      // at this point viewableHeight can still be < 0 (meaning it's not visible yet from case 1)
      // so make viewableHeight = 0 in that case
      viewableHeight = Math.max(0, viewableHeight)

      return viewableHeight / viewportHeight
    }

    const getCurrentSection = (): void => {
      const sections = document.getElementsByTagName('section')
      const sectionsArray = Array.from(sections).filter((section) => section.id !== '')
      let mostVisibleSection = { section: Section.About, viewportHeightPercent: 0 }

      sectionsArray.forEach((section) => {
        const viewportHeightPercent = percentHeightOfViewport(section)

        if (viewportHeightPercent >= mostVisibleSection.viewportHeightPercent) {
          if (section.id === 'OtherProjects') {
            mostVisibleSection.section = Section.Work
          } else {
            mostVisibleSection.section = section.id as Section
          }

          mostVisibleSection.viewportHeightPercent = viewportHeightPercent
        }
      })

      setCurrentSection(mostVisibleSection.section)
    }

    getCurrentSection()
    window.addEventListener('scroll', getCurrentSection)

    return () => {
      window.removeEventListener('scroll', getCurrentSection)
    }
  }, [])

  return currentSection
}

export default useCurrentSection
