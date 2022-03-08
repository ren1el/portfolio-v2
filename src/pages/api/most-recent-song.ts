import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentlyPlaying, getRecentlyPlayed } from '../../utils/spotify'

export type MostRecentSong = {
  name: string
  artists: string[]
  imgSrc: string
  link: string
  isPlaying?: boolean
}

const recentlyPlayed = async (): Promise<MostRecentSong | undefined> => {
  const recentlyPlayedResponse = await getRecentlyPlayed()
  const status = recentlyPlayedResponse.status

  if (status === 204 || status > 400) {
    return undefined
  }

  const { items } = await recentlyPlayedResponse.json()
  const item = items[0].track

  return {
    name: item.name,
    artists: item.album.artists.map((artist: { name: string }) => artist.name),
    imgSrc: item.album.images[0].url,
    link: item.external_urls.spotify,
    isPlaying: false,
  }
}

const currentlyPlaying = async (): Promise<MostRecentSong | undefined> => {
  const currentlyPlayingResponse = await getCurrentlyPlaying()
  const status = currentlyPlayingResponse.status

  if (status === 204 || status > 400) {
    return undefined
  }

  const { item, is_playing } = await currentlyPlayingResponse.json()

  return {
    name: item.name,
    artists: item.album.artists.map((artist: { name: string }) => artist.name),
    imgSrc: item.album.images[0].url,
    link: item.external_urls.spotify,
    isPlaying: is_playing,
  }
}

const mostRecentSong = async (_: NextApiRequest, res: NextApiResponse<MostRecentSong>) => {
  const currentSong = await currentlyPlaying()

  if (!currentSong) {
    const recentSong = await recentlyPlayed()

    if (!recentSong) {
      return res.status(200).json({
        name: '',
        artists: [''],
        imgSrc: '',
        link: '',
        isPlaying: undefined,
      })
    }

    return res.status(200).json(recentSong)
  }

  return res.status(200).json(currentSong)
}

export default mostRecentSong
