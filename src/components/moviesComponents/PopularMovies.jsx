/* eslint-disable react-hooks/exhaustive-deps */
import React , {useEffect} from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider'
import CardListContainer from '../CardListContainer'
import { popularMoviesURL } from '../../data/movieURLs'
import { fetchList } from '../../data/fetch'

const PopularMovies = () => {
  const { popularMovies, setPopularMovies } = useData();
  useEffect(
    () => {
      if (popularMovies) return;
      fetchList(popularMoviesURL, setPopularMovies);
    }, []
  )
  return <CardListContainer
    category={"popular_movies"}
    type={"movie"}
    cardsList={popularMovies}
  />
}

export default PopularMovies