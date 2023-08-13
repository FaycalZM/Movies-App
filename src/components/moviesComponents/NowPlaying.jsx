/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import '../../style/card.css'
import CardListContainer from '../CardListContainer'
import { useData } from '../DataProvider'
import { playingNowURL } from '../../data/movieURLs'
import { fetchList } from '../../data/fetch'

const NowPlaying = () => {

  const { playingNowMovies, setPlayingNowMovies } = useData();
  useEffect(
    () => {
      if (playingNowMovies) return;
      fetchList(playingNowURL, setPlayingNowMovies);
    }, []
  )
  return <CardListContainer
    category={"now_playing"}
    type={"movie"}
    cardsList={playingNowMovies}
  />
}

export default NowPlaying