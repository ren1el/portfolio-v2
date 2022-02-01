import { useRef } from 'react'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Hero.module.scss'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'

const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isVisible = useVisibility(containerRef)

  return (
    <div
      className={combineClasses([styles.container, getEnterAnimationClasses(styles, isVisible)])}
      ref={containerRef}
    >
      <h1 className={styles.heading}>Reniel Ocampo.</h1>
      <h1 className={styles.heading}>Software Engineer.</h1>
    </div>
  )
}

export default Hero
