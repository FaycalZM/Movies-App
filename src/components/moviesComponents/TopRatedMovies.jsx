/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider'
import CardListContainer from '../CardListContainer'
import { topRatedMoviesURL } from '../../data/movieURLs'
import { fetchList } from '../../data/fetch'

const TopRatedMovies = () => {
  const { topRatedMovies, setTopRatedMovies } = useData();
  useEffect(
    () => {
      if (topRatedMovies) return;
      fetchList(topRatedMoviesURL, setTopRatedMovies);
    }, []
  )
  return <CardListContainer
    category={"top_rated_movies"}
    type={"movie"}
    cardsList={topRatedMovies}
  />
}

export default TopRatedMovies