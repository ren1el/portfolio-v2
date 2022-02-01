import { ReactElement } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.fourOFour}>Hm?</h1>
      <p className={styles.subtext}>The page you’re looking for doesn’t exist (yet?).</p>
      <p className={styles.subtext}>
        Let’s bring you{' '}
        <strong>
          <a href={'/'} className={'animated strong'}>
            home
          </a>
        </strong>{' '}
        instead.
      </p>
    </div>
  )
}

Custom404.getLayout = (page: ReactElement) => {
  return (
    <Layout showAnimations={false} showFooter={false}>
      {page}
    </Layout>
  )
}

export default Custom404
