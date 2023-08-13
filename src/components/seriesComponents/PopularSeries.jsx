/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider';
import CardListContainer from '../CardListContainer';
import { fetchList } from '../../data/fetch';
import { popularSeriesURL } from '../../data/seriesURLs';


const PopularSeries = () => {
  const { popularSeries, setPopularSeries } = useData();
  useEffect(
    () => {
      if (popularSeries) return;
      fetchList(popularSeriesURL, setPopularSeries);
    }, []
  )
  return <CardListContainer
    category={"popular_series"}
    type={"tv"}
    cardsList={popularSeries}
  />
}

export default PopularSeries