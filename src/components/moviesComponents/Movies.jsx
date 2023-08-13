/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import '../../style/sectionHeader.css'
import { useData } from '../DataProvider'
import {
  playingNowURL,
  popularMoviesURL,
  topRatedMoviesURL,
  upcomingURL
} from '../../data/movieURLs'
import CategorySection from '../CategorySection'
import { fetchList } from '../../data/fetch'



/* ********************************************* */

const Movies = () => {


  const {
    playingNowMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    setPlayingNowMovies,
    setPopularMovies,
    setTopRatedMovies,
    setUpcomingMovies
  } = useData();


  // fetching the playing now movies list
  useEffect(
    () => {
      fetchList(playingNowURL, setPlayingNowMovies);
    }, []
  )
  // fetching the popular movies list
  useEffect(
    () => {
      fetchList(popularMoviesURL, setPopularMovies);
    }, []
  )
  // fetching the top rated movies list
  useEffect(
    () => {
      fetchList(topRatedMoviesURL, setTopRatedMovies);
    }, []
  )
  // fetching the upcoming movies list
  useEffect(
    () => {
      fetchList(upcomingURL, setUpcomingMovies);
    }, []
  )


  return (
    <div>
      <CategorySection
        category={"now_playing"}
        type={"movie"}
        link_path={"now_playing"}
        list={playingNowMovies}
      />
      <CategorySection
        category={"popular_movies"}
        type={"movie"}
        link_path={"popular_movies"}
        list={popularMovies}
      />
      <CategorySection
        category={"top_rated_movies"}
        type={"movie"}
        link_path={"top_rated_movies"}
        list={topRatedMovies}
      />
      <CategorySection
        category={"upcoming"}
        type={"movie"}
        link_path={"upcoming"}
        list={upcomingMovies}
      />
    </div>


  )
}

export default Movies