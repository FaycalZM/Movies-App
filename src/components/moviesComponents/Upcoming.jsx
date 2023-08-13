/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider'
import CardListContainer from '../CardListContainer'
import { upcomingURL } from '../../data/movieURLs'
import { fetchList } from '../../data/fetch'


const Upcoming = () => {
  const { upcomingMovies, setUpcomingMovies } = useData();
  useEffect(
    () => {
      if (upcomingMovies) return;
      fetchList(upcomingURL, setUpcomingMovies);
    }, []
  )
  return <CardListContainer
    category={"upcoming"}
    type={"movie"}
    cardsList={upcomingMovies}
  />
}

export default Upcoming