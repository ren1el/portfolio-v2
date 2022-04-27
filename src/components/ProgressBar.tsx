import { useEffect, useRef } from 'react'
import styles from '../styles/ProgressBar.module.scss'

const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (barRef.current !== null) {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        barRef.current.style.width = `${(scrollTop / height) * 100}%`
      }
    })
  }, [])

  return (
    <div className={styles.barContainer}>
      <div className={styles.bar} ref={barRef} />
    </div>
  )
}

export default ProgressBar
