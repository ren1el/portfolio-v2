import styles from '../styles/Hero.module.scss'

const Hero = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Reniel Ocampo.</h1>
      <h1 className={styles.heading}>Software Engineer.</h1>
    </div>
  )
}

export default Hero
