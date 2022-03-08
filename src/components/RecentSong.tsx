import styles from '../styles/RecentSong.module.scss'
import useSWR, { Fetcher } from 'swr'
import { MostRecentSong } from '../pages/api/most-recent-song'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'
import Image from 'next/image'

const fetcher: Fetcher<MostRecentSong> = (url: string) => fetch(url).then((res) => res.json())

type RecentSongProps = {
  isVisible: boolean
  isDesktop?: boolean
}

const RecentSong = ({ isVisible, isDesktop = false }: RecentSongProps) => {
  const { data, error } = useSWR('/api/most-recent-song', fetcher)

  if (error || !data) {
    return <></>
  }

  const { name, artists, imgSrc, link, isPlaying } = data

  if (isPlaying === undefined) {
    return <></>
  }

  return (
    <a
      className={combineClasses([
        styles.container,
        isDesktop && styles.desktop,
        getEnterAnimationClasses(styles, isVisible),
      ])}
      href={link}
      target={'_blank'}
      rel={'noreferrer'}
    >
      <div className={styles.card}>
        <div className={styles.meta}>
          <span className={styles.currentlyPlaying}>
            {isPlaying ? 'Currently Playing' : 'Last Song I Listened To'}
          </span>
          <span className={styles.title}>{name}</span>
          <span className={styles.artist}>{artists.join(', ')}</span>
        </div>
      </div>
      <span className={styles.album}>
        <Image src={imgSrc} alt={name} layout={'fill'} />
      </span>
    </a>
  )
}

export default RecentSong
