import { useRef } from 'react'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Hero.module.scss'

const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isVisible = useVisibility(containerRef)

  return (
    <div
      className={`
        ${styles.container}
        ${isVisible ? `${styles.enter} ${styles.transitionDelay}` : ''}
      `}
      ref={containerRef}
    >
      <h1 className={styles.heading}>Reniel Ocampo.</h1>
      <h1 className={styles.heading}>Software Engineer.</h1>
    </div>
  )
}

export default Hero
