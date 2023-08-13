/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import '../../style/sectionHeader.css'
import { useData } from '../DataProvider'
import {
  airingTodayURL,
  onTheAirURL,
  popularSeriesURL,
  topRatedSeriesURL
} from '../../data/seriesURLs'
import CategorySection from '../CategorySection'
import { fetchList } from '../../data/fetch'


/* ********************************************* */


const Series = () => {

  const {
    airingTodaySeries,
    onTheAirSeries,
    popularSeries,
    topRatedSeries,
    setAiringTodaySeries,
    setOnTheAirSeries,
    setPopularSeries,
    setTopRatedSeries
  } = useData();


  // fetching the airing today series list
  useEffect(
    () => {
      fetchList(airingTodayURL, setAiringTodaySeries);
    }, []
  )
  // fetching the on the air series list
  useEffect(
    () => {
      fetchList(onTheAirURL, setOnTheAirSeries);
    }, []
  )
  // fetching the popular series list
  useEffect(
    () => {
      fetchList(popularSeriesURL, setPopularSeries);
    }, []
  )
  // fetching the top rated series list
  useEffect(
    () => {
      fetchList(topRatedSeriesURL, setTopRatedSeries);
    }, []
  )




  return (
    <div>
      <CategorySection
        category={"airing_today"}
        type={"tv"}
        link_path={"airing_today"}
        list={airingTodaySeries}
      />
      <CategorySection
        category={"on_the_air"}
        type={"tv"}
        link_path={"on_the_air"}
        list={onTheAirSeries}
      />
      <CategorySection
        category={"popular_series"}
        type={"tv"}
        link_path={"popular_series"}
        list={popularSeries}
      />
      <CategorySection
        category={"top_rated_series"}
        type={"tv"}
        link_path={"top_rated_series"}
        list={topRatedSeries}
      />
    </div>
  )
}

export default Series