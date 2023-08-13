/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider';
import CardListContainer from '../CardListContainer';
import { topRatedSeriesURL } from '../../data/seriesURLs';
import { fetchList } from '../../data/fetch'


const TopRatedSeries = () => {
  const { topRatedSeries, setTopRatedSeries } = useData();
  useEffect(() => {
    if (topRatedSeries) return;
    fetchList(topRatedSeriesURL, setTopRatedSeries);
  }, [])

  return <CardListContainer
    category={"top_rated_series"}
    type={"tv"}
    cardsList={topRatedSeries}
  />
}

export default TopRatedSeries